import React, { useState } from 'react'

export default function FormText(props) {
  const handleUpClick = ()=>{
    // console.log("upper case was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText)
    props.showalert("Converted to upper case","success")
  }
  const handleLoClick = ()=>{
    let newText = Text.toLowerCase();
    setText(newText)
    props.showalert("Converted to lower case","success")
  }
  const handleClearClick = ()=>{
    let newText = ("");
    setText(newText)
    props.showalert("Text area cleared","warning")
  }
  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied","success")
  }
  const handleExtraspaces = ()=>{
    let newText = Text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalert("Extra space removed","success")
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
  }
  
  const[Text,setText] =useState("");   
  return (
      <>
    <div className='container' style={{color:props.mode==='#adb5bd'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'#042d08':'white',color:props.mode==='#adb5bd'?'black':'white'}} rows="10"></textarea>
      </div>
      <button className="btn btn-success " onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-success " onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success " onClick={handleExtraspaces}>Remove extra spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='#adb5bd'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>There are {Text.split(" ").length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{Text.length<1 && "enter text in above box to preview"}{Text}</p>
    </div>
      </>
  )
}
