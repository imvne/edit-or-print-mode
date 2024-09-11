
export default function EditMode({text}) {
	return (
		
		<p className="text-to-print" value={text}>{text === "" ? "Prénom Nom" : text}</p> 
	
	)
}