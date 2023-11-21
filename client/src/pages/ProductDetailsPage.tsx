import { useEffect, useState } from 'react';
import { products } from '../dummy';
import { useParams } from 'react-router-dom';
import { Rating } from '../components';

const ProductDetails = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({
		_id: '',
		name: '',
		image: '',
		description: '',
		brand: '',
		category: '',
		price: 0,
		countInStock: 0,
		rating: 0,
		numReviews: 0,
	});

	const [quantity, setQuantity] = useState(0);

	const item = products.find((item) => item._id === id);

	const increment = () => {
		if (quantity < 10) {
			setQuantity((prev) => prev + 1);
		}
	};

	const decrement = () => {
		if (quantity > 0) {
			setQuantity((prev) => prev - 1);
		}
	};
	useEffect(() => {
		item && setProduct(item);
	}, []);

	return (
		<div className=' w-full h-full lg:flex p-2 gap-4 my-2'>
			<div className=' w-full lg:w-1/3 shadow-xl'>
				<img
					className=' w-full rounded-sm'
					src={product.image}
				/>
			</div>
			<div className=' w-full'>
				<div className='overflow-x-auto'>
					<table className='table'>
						<thead>
							<tr className=' text-primary'>
								<th>Name</th>
								<th>Price</th>
								<th>Brand</th>
								<th>Category</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.brand}</td>
								<td>{product.category}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='overflow-x-auto'>
					<table className='table'>
						<thead>
							<tr className=' text-primary'>
								<th>Rating</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span className='text-accent m-1'>
										(no fo reviews {product.numReviews})
									</span>
									<Rating />
								</td>
								<td>{product.description}</td>
							</tr>
						</tbody>
					</table>
				</div>
				{product.countInStock > 0 ? (
					<div className=' flex items-center space-x-4 my-3'>
						<div className=' flex items-center justify-center space-x-3'>
							<button
								onClick={decrement}
								className='btn-outline btn-square btn-primary btn btn-sm md:btn-md'
							>
								-
							</button>
							<p className='text-2xl'>{quantity}</p>
							<button
								onClick={increment}
								className='btn-outline btn-square btn-primary btn btn-sm md:btn-md'
							>
								+
							</button>
						</div>
						<button className=' btn btn-warning btn-outline btn-sm md:btn-md'>
							Add to cart
						</button>
					</div>
				) : (
					<div>
						<p className=' text-2xl text-error my-3'>Out of Stock !!!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
