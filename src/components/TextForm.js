import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Umang Rathod");
    // setText("Legend");

    const handleUpClick = () => {
        console.log("Uppercase Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleOnChange = (inpt) => {
        setText(inpt.target.value);
    }
    const handleLoClick= () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }

    const handleClear = () =>{
        setText("");
        props.showAlert('Text cleared','success');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied','success');
    }

    const handleXtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


  return (
      <>
      <div className='container'>
        <div className="mb-3">
            <label htmlFor="myBox" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</label>
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#999'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy to clipboard</button>
        <button className="btn btn-primary mx-3" onClick={handleXtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-2">
          <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Summary : </h1>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>Words : {text.split(" ").length}, Characters : {text.length}</p>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>Read Time : {text.split(" ").length*0.008} minutes</p>

          <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview :-</h3>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter Text"}</p>
      </div>
      </>
  );
}
