import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const {data: buyers= [], refetch} = useQuery ({
        queryKey: ['buyers'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = (id, name) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0 ){
                toast.success(`${name} is delete successfuly`)
                refetch();
            }
            console.log(data);
        })
    }

    return (
        <div>
            <h2 className='text-left text-3xl font-semibold my-10 ml-10 text-secondary'>All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td><button onClick={()=> handleDeleteBuyer(buyer._id, buyer.name)} className='btn btn-xs btn-warning'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;