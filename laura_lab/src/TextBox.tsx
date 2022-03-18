import React from 'react';

function TextBox(props : {label : string, change : React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="TextBox">
      <header className="TextBox-header">
        
        {props.label}
        <br />
        <input type={"text"} onChange={e => props.change(e.target.value)}></input>
      </header>
      <br />
    </div>
  );
}

export default TextBox;