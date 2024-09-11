import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from '../greeting.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
