import { Route, Routes } from 'react-router-dom';
import { HomePage, ProductDetails, ProductPage } from './pages';
function App() {
	return (
		<div className='w-full'>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/products'
					element={<ProductPage />}
				/>
				<Route
					path='/product/:id'
					element={<ProductDetails />}
				/>
			</Routes>
		</div>
	);
}

export default App;
