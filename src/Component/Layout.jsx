import React, { useState } from "react";

const TextAnalyzer = () => {
  //state variable -4
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  //Define which should analyze the text
  const analyzeText = () => {
    //word->trim->split into array format
    const words = text.split(" ");

    //letter count->remove all whitespace from text using
    // regex
    const letters = text.replace(/\s/g, "");

    //paragraph
    const paragraphs = text
      .split("\n")
      .filter((paragraph) => paragraph.trim() !== "");

    setWordCount(words.length);
    setLetterCount(letters.length);
    setParagraphCount(paragraphs.length);
  };

  return (
    <div className="layout text-center mx-5 p-4 bg-dark text-light">
      <h1 className="m-3" style={{color:"orangered"}}>Text Analyzer</h1>
      <textarea className="m-3 p-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text....."
      />
      <br />
      <br />
      <button className="btn btn-info p-1" onClick={analyzeText}>Analyze</button>
      <div>
        <h1 className="heading m-3" style={{color:"orangered"}}>Analzyed Result</h1>
        <h6 className="para m-3" style={{color:"orange"}}>Word Count : <span className="text-light">{wordCount}</span></h6>
        <h6 className="para m-3" style={{color:"orange"}}>Letter Count : <span className="text-light">{letterCount}</span></h6>
        <h6 className="para m-3" style={{color:"orange"}}>Paragraph Count : <span className="text-light">{paragraphCount}</span></h6>
      </div>
    </div>
  );
};

export default TextAnalyzer;
