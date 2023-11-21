import { products } from '../dummy';
import { ProductCard } from '../components';

const HomePage = () => {
	return (
		<div className=' h-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2	p-2 place-items-center md:p-2'>
			{products.map((item) => (
				<ProductCard
					key={item._id}
					product={item}
				/>
			))}
		</div>
	);
};

export default HomePage;
