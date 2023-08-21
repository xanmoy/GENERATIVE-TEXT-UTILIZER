import React, {useState} from 'react'



export default function TextFrom(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // setText("fjmefg") correct    
    // text = "new text" wrong
    return (
        <div className='bg-dark text-white'>
            <h1 className='text-uppercase'>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control bg-dark text-white" value={text} onChange={handleOnChange} id="myBox" rows="18"></textarea>
            </div>
            <button className="btn btn-info" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
