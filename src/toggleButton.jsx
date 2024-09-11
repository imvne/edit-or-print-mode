import { useState } from 'react'
import './toggleButton.css'

export default function ToggleButton({toggleOffText, toggleOnText, toggleOn, handleClick}) {	
	
	const toggleOnStyle = {text : {color: 'rgb(100, 100, 156)', fontWeight: '500', fontSize: '16.5px'}, button : {backgroundColor: 'rgb(159, 193, 147)'}};
	const toggleOffStyle = {text : {color: 'rgb(137, 184, 119)', fontWeight: '500', fontSize: '16.5px'}, button : {backgroundColor: 'rgb(99, 99, 124)'}}
	const notChosenTextStyle = {color: 'rgb(113, 113, 113)', fontWeight: '400', fontSize: '16px'};

	return (
		<div className="toggleDiv">
			
			<p style={toggleOn === true ? notChosenTextStyle : toggleOnStyle.text}>{toggleOffText}</p>
				<div className="toggle-rectangle"  style={toggleOn === true ? toggleOnStyle.button : toggleOffStyle.button}>
					<div className="toggle-circle" onClick={handleClick} style={toggleOn ? {transform: 'translate(140%)'} : {transform: 'translate(0%)'}}></div>
				</div>
			<p style={toggleOn === true ? toggleOffStyle.text : notChosenTextStyle}>{toggleOnText}</p>
			
		</div>
	)
}