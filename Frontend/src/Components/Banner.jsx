import React from "react";
import img from "../assets/image.jpeg";
function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row ml-20 ">
        <div className="flex">
          <ol type="1">
            <li className="text-xl font-semibold">
              How To Convert Word to PDF:
            </li>
            <br />
            <li>1. Import or drag & drop your PDF file to our converter.</li>
            <br />
            <li>2. Choose to convert to Word, Excel, PowerPoint, or image.</li>
            <br />
            <li>
              3. Select to apply OCR or extract images if desired (Pro feature).
            </li>
            <br />
            <li>4. Click “Convert” to transform your file type.</li>
            <br />
            <li>5. Download your converted document when ready—easy!</li>
            <br />
          </ol>
        </div>
        <div className="flex justify-center mr-10 md:ml-20">
          <img
            className="h-[300px] w-[800px]"
            src={img}
            alt="Image How To Convert Docx to pdf"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
