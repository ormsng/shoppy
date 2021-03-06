import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/productsActions';
export default function MiniProduct(product) {
    const dispatch = useDispatch();
    const handleRemove = (product) => {
        dispatch(removeFromCart(product.product));
        localStorage.removeItem(product.product.id);
    }
    const { title, price, image, description } = product.product;
    return (
        <div>
            <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
            >
                <div className="p-2 w-12"><img src={image} className="my-image" alt="img product" /></div>
                <div className="flex-auto text-sm w-32">
                    <div className="font-bold">{title}</div>
                    <div className="truncate">{description}</div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700" onClick={() => { handleRemove(product) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  className="feather feather-trash-2 ">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    ${price}</div>
            </div>
        </div>
    )
}