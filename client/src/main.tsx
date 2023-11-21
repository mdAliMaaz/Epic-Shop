import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Footer, Navbar } from './components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
);
