import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import WishListCard from './WishListCard/WishListCard';

const WishList = () => {
    const { user } = useContext(AuthContext);

    const url = `https://havenly-server-new.vercel.app/wishlist?email=${user?.email}`;

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

    console.log(wishlist);


    return (
        <div className='mt-28'>
            <div>
                <h3 className='font-extrabold text-secondary text-3xl my-8 text-center'>My Favorites</h3>
            </div>
            <section className="container mx-auto p-10 md:p-20 antialiased grid grid-cols-1">
                {
                    wishlist.map(wish => <WishListCard
                        key={wish._id}
                        wish={wish}
                        refetch={refetch}
                    ></WishListCard>)
                }
            </section>
        </div>
    );
};

export default WishList;