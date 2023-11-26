import { products } from '../dummy';
import { ProductCard } from '../components';
import { useGetProductsQuery } from '../redux/api/productApi';
import { Productdetails } from '../types';

const HomePage = () => {
	const { data, isError, isLoading } = useGetProductsQuery();

	if (isLoading) {
		return (
			<div>
				<h1>Loading</h1>
			</div>
		);
	}

	return (
		<>
			{Array.isArray(data) && !isError && (
				<div className=' h-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2	p-2 place-items-center md:p-2'>
					{data.map((item) => (
						<ProductCard
							key={item._id}
							product={item}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default HomePage;
