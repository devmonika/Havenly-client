import React from 'react';

const AllSeller = () => {
    return (
        <div>
            <h2 className='text-left text-3xl font-semibold my-10 ml-10 text-secondary'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
          sellers.map((seller, i) => <tr key={seller._id}>
            <th>{i + 1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>{seller.role}</td> */}
                        {/* <td><button onClick={() => handleVerify(seller.email)} className='btn btn-xs btn-primary'>{seller?.isVerified ==='verified' ? 'verified' :'verify seller'} </button></td> */}

                        {/* <td><button className='btn btn-xs btn-warning'>Delete</button>
            </td> */}
                        {/* <td><button onClick={()=>handleDeleteSeller(seller._id, seller.name)} className='btn btn-xs btn-warning'>Delete</button>
            </td> */}

                        {/* </tr>)
        } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;