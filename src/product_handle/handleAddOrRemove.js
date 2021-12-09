export default function handleAddOrRemove(product, dispatch, addToCart, removeFromCart) {
	const { id } = product;
	if (localStorage.getItem(id)) {
		dispatch(removeFromCart(product));
		localStorage.removeItem(id);
	} else {
		dispatch(addToCart(JSON.stringify(product)));
		localStorage.setItem(id, JSON.stringify(product));
	}
}
