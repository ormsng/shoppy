import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import axios from 'axios';
import { setProducts, setCart } from '../redux/actions/productsActions';

export default function Products() {
	const dispatch = useDispatch();
	const fetchProducts = async () => {
		const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
			// console.log(err);
		});
		dispatch(setProducts(response.data));
		dispatch(setCart(Object.values({ ...localStorage })))
	};
	useEffect(() => {
		fetchProducts();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="flex flex-wrap flex-row justify-center ">
			<ProductCard key={Math.random()} />
		</div >
	);
}

