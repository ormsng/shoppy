import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/productsActions';
export default function CheckoutProduct(product) {
    const { title, image, price, id } = product.product;
    const dispatch = useDispatch();
    return (
        <tr>
            <td className=" pb-4 md:table-cell">
                <img src={image} className="w-14 rounded" alt="Thumbnail" />
            </td>
            <td>
                <p className="mb-2 md:ml-4">{title}</p>
                <button className="text-gray-700 md:ml-4">
                    <small onClick={() => {
                        dispatch(removeFromCart(product.product))
                        localStorage.removeItem(id);;
                    }}>(Remove item)</small>
                </button>
            </td>
            <td className=" text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium mx-6">
                    ${price}
                </span>
            </td>

        </tr>

    )
}