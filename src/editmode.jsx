
export default function EditMode({text, handleChange}) {
	return (
		
		<input className="input-to-edit" value={text} onChange={handleChange} placeholder='Prénom Nom'/> 
	
	)
}