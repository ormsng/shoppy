import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/productsActions';
import handleAddOrRemove from '../product_handle/handleAddOrRemove'

export default function ProductCard() {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.allProducts);
	const { cart, products } = allProducts;
	const renderList = products.map((product) => {
		const { title, image, price, id, description } = product;
		return (

			<div key={Math.random()} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-2 m-7">
				<div className="px-1 py-5">
					<h1 className="text-gray-900 font-bold text-2xl uppercase">{id === 8 ? title.slice(0, 30) : title.slice(0, 20)}</h1>
					<p className="text-gray-600 text-sm mt-1"> {description.slice(0, 110)}</p>
				</div>
				<img className=" card-image" src={image} alt={title} />
				<div className=" flex items-center justify-between px-4 py-2 bg-gray-900">
					<h1 className="text-gray-200 font-bold text-xl">$ {price}</h1>
					<button onClick={() => handleAddOrRemove(product, dispatch, addToCart, removeFromCart)} className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">	{(cart.filter(e => JSON.parse(e).id === id).length > 0) ? <> Remove from cart </> : <>
						Add to cart
					</>}</button>
				</div>
			</div>
		);
	});
	return <>{renderList}</>;
}

