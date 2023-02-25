import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllSeller = () => {
  const { user } = useContext(AuthContext);
  // const [sellers, setSellers] = useState([])

  // useEffect(() => {
  //     fetch('https://havenly-server.vercel.app/users/sellers')
  //         .then(res => res.json())
  //         .then(data => setSellers(data))
  // }, []);

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(
        "https://havenly-server.vercel.app/users/sellers"
      );
      const data = await res.json();
      return data;
    },
  });

    // verify seller start here
  const handleVerify = (email) => {
    fetch(`https://havenly-server.vercel.app/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("verify seller successfull.");
        refetch();
        console.log(data);
      });
  };

  // handle delete seller 

  const handleDeleteSeller = (id, name) => {
    fetch(`https://havenly-server-seven.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${name}`, "is delete successfuly");
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h3 className='mt-20 font-extrabold text-secondary text-3xl text-center'>Landlords: {sellers.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.user}</td>
                <td>
                  {
                    seller?.isVerified?
                    <button
                    className="btn btn-xs btn-primary"
                  >Verified</button>
                    :
                    <button
                    onClick={() => handleVerify(seller.email)}
                    className="btn btn-xs btn-primary"
                  >Verify Seller</button>
                  }
                  
                </td>
                <td>
                    <button onClick={()=>handleDeleteSeller(seller._id, seller.name)} className='btn btn-xs btn-warning'>Delete</button>
                </td> 
              </tr>
            ))};
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
