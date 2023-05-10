import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Register fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfDownload = ({ data }) => {
  const documentDefinition = {
    content: [
      {
        // Company details
        columns: [
          {
            width: "*",
            text: "Info campus",
            style: "companyName",
          },
          {
            width: "auto",
            stack: [
              { text: "Address Line 1" },
              { text: "Address Line 2" },
              { text: "City, State Zip" },
              { text: "Phone: (xxx) xxx-xxxx" },
              { text: "Email: your.email@example.com" },
            ],
            style: "address",
          },
        ],
      },
      {
        // Invoice details
        text: `Invoice #${data.id}`,
        // text: `Invoice #1`,
        style: "invoiceNumber",
      },
      {
        columns: [
          {
            width: "50%",
            stack: [
              {
                text: `Billed To:`,
                style: "billedToLabel",
              },
              {
                margin: [0, 5, 0, 5],
                canvas: [{ type: "line", x1: 0, y1: 5, x2: 120, y2: 5 }],
              },
              {
                text: `${data.name}\n${data.email}\n${data.mobile}`,
                // text: `Hemanthsaik \n$ Khemanthsai1@gmail.com\n9880529549`,
                style: "billedToValue",
              },
            ],
          },
          {
            width: "50%",
            stack: [
              {
                text: `Invoice Details:`,
                style: "invoiceDetailsLabel",
              },
              {
                margin: [0, 5, 0, 5],
                canvas: [{ type: "line", x1: 0, y1: 5, x2: 130, y2: 5 }],
              },
              {
                columns: [
                  {
                    text: `Invoice Date:\nDue Date:`,
                    width: 70,
                  },
                  {
                    text: `${data.month} ${data.day}, ${data.year}\n${
                      data.month
                    } ${parseInt(data.day) + 30}, ${data.year}`,
                    // text: `april 27, 2023\n april ${parseInt(27) + 30}, 2023`,
                    width: "*",
                  },
                ],
                style: "invoiceDetailsValue",
              },
            ],
          },
        ],
      },
      {
        // Invoice items
        table: {
          headerRows: 1,
          widths: ["*", "auto", "auto"],
          body: [
            [
              { text: "Description", bold: true },
              { text: "Qty", bold: true },
              { text: "Amount", bold: true },
            ],
            [data.product, "1", `$${parseFloat(data.amount).toFixed(2)}`],
            // ["the web devlopment", "1", `$${parseFloat(13000).toFixed(2)}`],
          ],
        },
        layout: "lightHorizontalLines",
        margin: [0, 20, 0, 20],
      },
      {
        // Totals
        columns: [
          {
            width: "*",
            text: "",
          },
          {
            width: "30%",
            stack: [
              {
                text: "Subtotal:",
                alignment: "right",
                width: "50%",
              },
              {
                text: "GST (7%):",
                alignment: "right",
              },
              {
                text: "Total:",
                bold: true,
                alignment: "right",
              },
            ],
          },
          {
            width: "20%",
            stack: [
              {
                text: `$${parseFloat(data.amount).toFixed(2)}`,
                // text: `$${parseFloat(12000).toFixed(2)}`,
                alignment: "right",
                width: "50%",
              },
              {
                text: `$${parseFloat(data.gst).toFixed(2)}`,
                // text: `$${parseFloat(1200).toFixed(2)}`,
                alignment: "right",
              },
              {
                text: `$${parseFloat(data.total).toFixed(2)}`,
                // text: `$${parseFloat(200000).toFixed(2)}`,
                bold: true,
                alignment: "right",
              },
            ],
          },
        ],
      },
    ],
    styles: {
      // Company details
      companyName: {
        fontSize: 22,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      address: {
        margin: [0, 10, 0, 0],
        fontSize: 12,
      },
      // Invoice details
      invoiceNumber: {
        fontSize: 16,
        margin: [0, 30, 0, 10],
      },
      billedToLabel: {
        fontSize: 14,
        bold: true,
      },
      billedToValue: {
        fontSize: 12,
      },
      invoiceDetailsLabel: {
        fontSize: 14,
        bold: true,
      },
      invoiceDetailsValue: {
        fontSize: 12,
      },
    },
  };

  const downloadPdf = () => {
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob) => {
      saveAs(blob, `invoice-${data.id}.pdf`);
      //   saveAs(blob, `invoice-1.pdf`);
    });
  };
  return (
    <div>
        <i className="fa fa-download" onClick={downloadPdf}></i>
    </div>
  );

};

export default PdfDownload;