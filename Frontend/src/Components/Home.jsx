import React, { useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null); // To check whether the file is selected or Not.

  const [convert, setConvert] = useState(null); // To Display the message "Success" after successful of docx to pdf Conversion.

  const [downloadError, setDownloadError] = useState(null); // To Display the Error if occurred in docx to pdf Conversion.

  const handleFilechange = (e) => {
    setSelectedFile(e.target.files[0]); // See in Console where the file has been Located.
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // To Prevent Default Action of Browser like refreshing the webpage by itself.

    if (!selectedFile) {
      setConvert("Please Select a file");
      return;
    }

    const formData = new FormData(); // Creating Object of the FormData
    formData.append("file", selectedFile);

    // MS-Word or docx files are Binary Files therefore response type is blob(Binary).

    try {
      const response = await axios.post(
        "http://localhost:5000/convertFile",
        formData,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data])); // Creating Object Url by passing the data, received from the Api Request.
      const link = document.createElement("a"); // Creating Anchor Tag
      link.href = url; // Storing url in Anchor Tag href.

      // To download the file by setting the attribute download to Anchor Tag and giving value = File + .pdf (Also replace Special Chars).

      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link); // Appending this anchor Tag in the HTML Document.
      link.click(); //Clicking on the Anchor Tag to download file Automatically.
      link.parentNode.removeChild(link); // After clicking on the link Remove Anchor Tag.
      setSelectedFile(null); // Changing the state of SelectedFile back to null.

      setConvert("File Converted Successfully");
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setDownloadError("Error occured : " + error.response.data.message);
      } else {
        setConvert("");
      }
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3  mt-8 mb-20">
        <h1 className="text-3xl font-bold text-center mt-10 mb-5">
          {" "}
          Convert Word to PDF Online{" "}
        </h1>{" "}
        <p className="text-xl flex justify-center ml-4">
          {" "}
          &#9989; Try the internet’s #1 free PDF converter. Convert your files
          to and from PDF documents entirely online, without registration or
          installation.
        </p>{" "}
        <br />
        <br />
        <br />
        <div className="p-3 md:mx-80 bg-yellow-400 rounded-lg shadow-2xl">
          <div className="flex items-center justify-center">
            <div className="border-2 border-dashed px-4 py-10 md:px-8 md:py-18 border-blue-800 rounded-lg bg-yellow-300">
              <p className="text-xl font-semibold text-center mb-10">
                Easily convert Word documents to PDF format online, without
                having to install any software. Just Drop your Files below!!
              </p>

              <div className="flex flex-col items-center space-y-4 mx-16 ">
                <input
                  type="file"
                  onChange={handleFilechange}
                  accept=".doc,.docx"
                  className="hidden"
                  id="FileInput"
                />
                <label
                  htmlFor="FileInput"
                  className="w-full flex items-center justify-center py-6 bg-gray-100 text-gray-700 rounded-2xl shadow-lg cursor-pointer hover:bg-indigo-600 transform transition-transform duration-300 hover:scale-105 hover:text-white"
                >
                  <FaRegFileWord className="text-3xl mr-3" />
                  <span className="text-xl mr-3">
                    {selectedFile ? selectedFile.name : ""}
                  </span>
                </label>
                <br />
                <button
                  onClick={handleSubmit}
                  disabled={!selectedFile}
                  className="text-white  bg-blue-600 hover:scale-110 hover:bg-blue-800 disabled:bg-gray-400 disabled:pointer-events-none duration-300 px-4 py-2 rounded-lg"
                >
                  Convert File
                </button>
                {convert && (
                  <div className="text-center text-xl text-green-500 font-semibold">
                    {" "}
                    &#9989; {convert}{" "}
                  </div>
                )}
                {downloadError && (
                  <div className="text-center text-xl text-red-500 font-semibold">
                    {" "}
                    {downloadError}{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
