import { Link } from 'react-router-dom';
import { Product, Productdetails } from '../types';
import Rating from './Rating';

const ProductCard = ({ product }: Productdetails) => {
	return (
		<div className='card w-80  md:w-80 lg:w-96 bg-base-100 shadow-xl'>
			<figure>
				<img
					src={product.image}
					alt='Shoes'
				/>
			</figure>
			<div className='card-body flex-wrap'>
				<h2 className='card-title'>{product.name}</h2>
				<p className=' md:max-h-24 overflow-hidden'>{product.description}</p>
				<div className=' flex items-center justify-between'>
					<div>
						<span className=' text-primary mb-1'>
							(no of reviews {product.numReviews})
						</span>
						<Rating />{' '}
					</div>
					<div className=' text-lg font-semibold'> ${product.price}</div>
				</div>
				<div className='card-actions justify-end'>
					<Link
						to={`/product/${product._id}`}
						className='btn btn-primary'
					>
						Buy Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
