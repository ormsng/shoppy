import { useEffect, useState } from 'react';
import HistoryBox from './HistoryBox';
import axios from 'axios';

export default function History() {
    const [history, setHistory] = useState("");

    async function getHistory() {
        return axios({
            method: 'get',
            withCredentials: true,
            url: 'https://orms-shoppy.herokuapp.com/history'
        }).then((history) => {
            // console.log(history.data);
            setHistory(history.data)
        });
    }

    useEffect(() => {
        getHistory();
        // eslint-disable-next-line 
    }, [])
    return (
        <div className="flex flex-col justify-center h-full">

            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">History</h2>
                </header>
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">DATE</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Email</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Spent</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Products</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">

                                {Object.values(history).map((purchase) => <HistoryBox purchase={purchase} key={Math.random()}></HistoryBox>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

