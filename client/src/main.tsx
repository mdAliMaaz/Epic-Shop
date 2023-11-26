import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Footer, Navbar } from './components';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<App />
				<Footer />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
