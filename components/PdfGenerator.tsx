import jsPDF from 'jspdf';
import React from "react";
import { saveAs } from 'file-saver';

interface PdfGeneratorProps {
    summary: string;
    satisfaction: string;
    sentiment: string;
    topics: string,
    turnover: string
  }

const PdfGenerator: React.FC<PdfGeneratorProps> = (props) => {
  const generatePDF = () => {
    const summary = props.summary
    const satisfaction = props.satisfaction
    const sentiment = props.sentiment
    const topics = props.topics
    const turnover = props.turnover

    // const blob = new Blob([summary], { type: 'text/plain' });
    // saveAs(blob, 'example.txt');

    var doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Report", 75, 25)
    doc.setFontSize(15);
    doc.text("Summary of conversation", 105, 50, {align: "center"});
    // doc.setFontSize(12);
    // doc.text(`${summary}`, 20, 50, { maxWidth: 100 });

    // doc.setFontSize(22);
    // doc.text("Customer Satisfaction", 30, 150);
    // doc.setFontSize(16);
    // doc.text(`${satisfaction}`, 30, 160);

    // doc.addPage("p")
    // doc.setFontSize(22);
    // doc.text("Conversation Sentiment", 30, 20);
    // doc.setFontSize(16);
    // doc.text(`${sentiment}`, 30, 30);

    // doc.setFontSize(22);
    // doc.text("Conversation topic extraction", 30, 150);
    // doc.text(`${topics}`, 10, 160);
    // doc.setFontSize(16);

    // doc.addPage("p")
    // doc.setFontSize(22);
    // doc.text("Customer turnover chances", 30, 20);
    // doc.text(`${turnover}`, 30, 30);

    doc.save("test1.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}  className="mt-40 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
>
        Generate Report
      </button>


    </div>
  );
};

export default PdfGenerator;
