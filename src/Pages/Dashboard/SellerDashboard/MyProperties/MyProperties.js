import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyProperties = () => {
    const { user } = useContext(AuthContext);

    const url = `https://havenly-s.vercel.app/properties/myproperty?email=${user?.email}`;
    const { data: properties = [], refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });
    console.log(properties);

    const handleDeleteProduct = property => {
        fetch(`https://havenly-server-new.vercel.app/property/${property._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Property Deleted');
                }
            })
    };
    return (
        <div className='mt-32'>
           
            <h2 className="text-3xl text-center mb-4">All Apertment List: {properties.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Property</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Advertize</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties &&
                            properties?.map((property, i) => <tr key={property._id}>
                                <td>{i + 1}</td>
                                <td className='text-rose-700 font-semibold'>{property.address}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={property.img1} alt='property' />
                                    </div>
                                </div></td>
                                <td>${property.price}</td>

                                {
                                  
                                    property?.isPremium?
                                    <td> <Link to='#'><button className='btn btn-xs btn-secondary'>Advertised</button></Link></td>
                                    :                                 
                                    <td> <Link to={`/dashboard/PromotePayment/${property._id}`}><button className='btn btn-xs btn-primary'>Advertise</button></Link></td>
                                    
                                }

                                <td>
                                    <button className="btn btn-xs btn-outline btn-accent">{property.status}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(property)} className="btn btn-xs btn-secondary">Delete</button>
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProperties;