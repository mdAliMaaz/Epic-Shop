import { useParams } from 'react-router-dom';
import { Loading, Rating } from '../components';
import { useGetProductByIdQuery } from '../redux/api/productApi';
import { useState } from 'react';

const ProductDetails = () => {
	const { id } = useParams();

	if (!id) {
		return null;
	}

	let { data, isLoading, isError } = useGetProductByIdQuery(id);

	const [quantity, setQuantity] = useState(0);

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

	if (isLoading && !data) {
		return <Loading />;
	}
	if (!data) {
		<h1>Product Not Found</h1>;
	}
	return (
		<>
			{data && (
				<div className=' w-full h-full lg:flex p-2 gap-4 my-2'>
					<div className=' w-full lg:w-1/3 shadow-xl'>
						<img
							className=' w-full rounded-sm'
							src={data.image}
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
										<td>{data.name}</td>
										<td>{data.price}</td>
										<td>{data.brand}</td>
										<td>{data.category}</td>
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
												(no fo reviews {data.numReviews})
											</span>
											<Rating />
										</td>
										<td>{data.description}</td>
									</tr>
								</tbody>
							</table>
						</div>
						{data.countInStock > 0 ? (
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
			)}
		</>
	);
};

export default ProductDetails;
