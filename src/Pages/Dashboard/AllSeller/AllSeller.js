import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';


const AllSeller = () => {
    const { user } = useContext(AuthContext);


    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['seller'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;

        }
    });

    const handleDeleteSeller= (id, name) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE',
            headers:{
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if (data.deletedCount > 0){
                toast.success(`${name} is delete successfully`)
                refetch();
            }
            console.log(data);
        })
    }

    const handleVerify = email =>{
        fetch (`http://localhost:5000/users/admin/${email}`,{
           method: 'PUT',
            headers: {
             authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.result.modifiedCount > 0){
                toast.success('verify seller successfull')
                refetch();
            }
            console.log(data);      
     
        });
     };



    return (
        <div>
            <h2 className='text-left text-3xl font-semibold my-10 ml-10 text-secondary'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr> 
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.user}</td>
                                <td><button onClick={() => handleVerify(seller.email)} className='btn btn-xs btn-primary'>{seller?.isVerified === 'verified' ? 'Verified' : 'Verify Seller'} </button></td>

                                {/* <td>
                                    <button className='btn btn-xs btn-warning'>Delete</button>
                                </td> */}

                                <td>
                    <button onClick={()=>handleDeleteSeller(seller._id, seller.name)} className='btn btn-xs btn-warning'>Delete</button>
                </td> 

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;