import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupClick = ()=>{
        console.log('Upper case was clicked'+ text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(":Converted to Upper Case!","success")
    }
    const handlelowClick = ()=>{
        console.log('Lower case was clicked'+ text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(":Converted to Lower Case!","success")
    }

    const handleclearClick = ()=>{
        console.log('Clear button was clicked'+ text );
        let newText = "";
        setText(newText);
        props.showAlert(":Cleared","success")
    }
    const handleonChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }
    const handlecopy = ()=>{
        console.log('copy me')
        var text = document.getElementById("box1");
        text.select();
        navigator.clipboard.writeText(text.value);


    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Enter Your text here</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange = {handleonChange} id="box1" rows="10" style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black' }}></textarea>
            </div>
            <button className='btn btn-primary' onClick = {handleupClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-2' onClick = {handlelowClick} >Convert to lower case</button>
            <button className='btn btn-primary mx-1' onClick = {handleclearClick} >Clear</button>
            <button className='btn btn-primary mx-1' onClick = {handlecopy} >Make copy</button>
        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length } minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length<0 ? text:"Enter something in the above text box to preview it here" }</p>
            <h3>{text}</h3>
        </div>
        </>
    )
}
