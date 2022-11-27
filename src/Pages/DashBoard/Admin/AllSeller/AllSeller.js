import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users?role=seller');
      const data = await res.json();
      return data;
    }
  });
  const handleVerify = (seller) => {
    // console.log(seller);
    fetch(`http://localhost:5000/verify?email=${seller.email}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("User verified")
          refetch()
        }
      })
  }
  const handleDelete = (seller) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`http://localhost:5000/user?email=${seller.email}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'User has been deleted.',
                          'success'
                      )
                      refetch();
                  }
                  
              })
      }
      else {
          Swal.fire('Didn\'t delete user', '', 'success')
      }
  })
    
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            sellers.map((seller, idx) => <tr
              key={seller._id}>
              <th>{idx + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={seller.imgUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{seller.name}</div>
                  </div>
                </div>
              </td>
              <td>{seller.phone ? seller.phone : "N/A"}</td>
              <td>{seller.email}</td>
              <td>{seller.verified === "no" ? <> <button className="btn btn-xs border-0 bg-[#92B4EC] mr-1" onClick={() => handleVerify(seller)}>Verify</button><button className="btn btn-xs bg-red-500 border-0"
                onClick={() => handleDelete(seller)}>Delete</button></> :
                <><button className="btn btn-xs mr-1" disabled>Verify</button>
                  <button className="btn btn-xs bg-red-500 border-0" onClick={() => handleDelete(seller)}>Delete</button></>

              }</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;