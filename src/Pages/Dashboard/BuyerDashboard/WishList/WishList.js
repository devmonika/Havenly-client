import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const WishList = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteWishlist = wish => {
        fetch(`http://localhost:5000/wishlist/${wish._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Property Removed')
                }
            })
    };

    return (
        <div className='mt-28'>
            <div>
                <h3 className='text-3xl my-8 text-center'>My Wishlist: {wishlist.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist &&
                                wishlist?.map((wish, i) => <tr
                                    key={wish._id}
                                    className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{wish?.address}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-28 mask mask-squircle">
                                                <img src={wish?.img1} alt='property' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>${wish?.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteWishlist(wish)} className='btn btn-xs btn-secondary'>Delete</button>
                                    </td>
                                </tr>)
                            };
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WishList;