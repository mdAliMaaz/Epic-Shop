import { Loading, ProductCard } from '../components';
import { useGetProductsQuery } from '../redux/api/productApi';

const HomePage = () => {
	const { data, isError, isLoading } = useGetProductsQuery();

	if (isLoading && !data) {
		return <Loading />;
	}
	if (!data?.length) {
		<h1>Product Not Found</h1>;
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
