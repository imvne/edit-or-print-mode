import { useState } from 'react'
import './App.css'
import ToggleButton from './toggleButton';
import EditMode from './editmode';
import PrintMode from './printmode';

export default function App() {
	const [text, setText] = useState("")
	const [toggleOn, setToggleOn] = useState(false)
	
	const handleChange = (event) => {
		setText(event.target.value)
	}
	
	const handleToggleClick	= () => {
		if(toggleOn === false){
			setToggleOn(true)
		} else if (toggleOn === true){
			setToggleOn(false)
		}
	}
	
	return (
		
	<div className="printBox">
		
			<ToggleButton toggleOffText={'Edit mode'} toggleOnText={'Print mode'} toggleOn={toggleOn} handleClick={handleToggleClick}/>
		
		<div className='editBox'>
			{toggleOn ? (
				<PrintMode text={text}/>
			) : (
				<EditMode text={text} handleChange={handleChange}/>
			)}
			
		</div>
	</div>
	
	)
}

