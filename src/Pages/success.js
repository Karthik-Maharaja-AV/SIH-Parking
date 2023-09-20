import React from "react";
import html2canvas from "html2canvas";
import { useRef } from "react";
import jsPDF from "jspdf";

export default function Success() {
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div>
      <div className="w-screen flex flex-col gap-10" ref={pdfRef}>
        <div className="text-center text-5xl font-bold p-10">
          ThankYou Payment SuccessFul!!!!
        </div>
        <div className=" font-bold p-10 w-full flex items justify-between px-[500px]">
          <a className="normal-case text-xl font-bold">
            <span className="text-4xl font-bold text-blue-500">P</span>arking
          </a>
          <a className="text-5xl">Invoice</a>
        </div>
        <div>
          <h1 className="text-xl pl-96">
            {" "}
            <span className="font-bold"> Invoice Number:</span> 1234
          </h1>
          <h1 className="text-xl pl-96">
            {" "}
            <span className="font-bold">Invoice Date:</span> September 21 2023
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <table className=" table-auto text-center border border-black w-1/2">
            <thead className="bg-gray-400">
              <tr>
                <th>Slot number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Slot 4</td>
                <td className="text-green-600">Booked Successfully</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <button
          className="btn bg-blue-400 border-none text-white hover:bg-blue-800 hover:shadow hover:shadow-xl hover:shadow-orange-400 font-bold"
          onClick={downloadPDF}
        >
          Print Recipt
        </button>
      </div>
    </div>
  );
}
