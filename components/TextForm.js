import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newText =text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value)
        
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div>
            <h5>{props.heading}</h5>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={handleUpClick}>Convert LowerCase to UpperCase</button>
            </div>
            <div></div>
        </div>
        <div className='container my-3'>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes read.</p>
            <h1>Preview</h1>
            <p>{text}</p>
             
        </div>
        </>
    )
}
