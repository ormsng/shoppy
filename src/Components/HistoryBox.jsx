import { useSelector } from 'react-redux';
export default function HistoryBox(purchase) {
    const user = useSelector((state) => state.user);
    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div> */}
                    <div className="font-medium text-gray-800">{purchase.purchase.date}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.user.data.email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{purchase.purchase.price}$</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">{purchase.purchase.length}</div>
            </td>
        </tr>
    )
}
