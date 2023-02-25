import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import Loading from '../../../Shared/Footer/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders/property?email=${user?.email}`;
    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders', user?.email ],
        queryFn: async () => {
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    console.log(orders);


    if(isLoading){
        return <Loading></Loading>
     }
     
    return (
        <div>
            <h1 className="mt-20 font-extrabold text-secondary text-3xl text-center">My Orders{orders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Price</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, i) => <tr key={order._id}>
                                <td>{i + 1}</td>
                                <td className='text-rose-700 font-semibold'>{order.category}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={order.img1} alt='property' />
                                    </div>
                                </div></td>
                                <td>${order.price || order.grandTotal}</td>

                                {/* <td>
                                    <button className="btn btn-xs btn-secondary">Delete</button>
                                </td> */}
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;