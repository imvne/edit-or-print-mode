import React, { useState } from "react";

export default function App() {
	const [edit, setEdit] = useState(false)
	const [text, setText] = useState("")
	
	const switchPrintEdit = (which) => {
		setEdit(which)
		console.log(`edit ${which}`)
	}
	
	const handleChange = (event) => {
		setText(event.target.value)
	}
  
	return (
		<div className="printBox" onClick={() => switchPrintEdit(false)}>
	
			<div className='editBox' onClick={(event) => { event.stopPropagation(); switchPrintEdit(true); }}>
				{  edit ? <input className="input-to-edit" value={text} onChange={handleChange}/> : <p className="text-to-print">{text}</p>  }
			</div>
		
		</div>
	)
}