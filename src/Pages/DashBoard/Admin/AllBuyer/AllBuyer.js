import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const AllBuyer = () => {
    const { data: buyers = [] , refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=user');
            const data = await res.json();
            return data;
        }
    });
    const handleVerify = (buyer) =>{
      // console.log(buyer);
      fetch(`http://localhost:5000/verify?email=${buyer.email}`,{
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
    })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
      if(data.acknowledged){
        toast.success("User verified")
        refetch()
      }
      })
    }
    const handleDelete = (buyer)=>{
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
            fetch(`http://localhost:5000/user?email=${buyer.email}`, {
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
                buyers.map((buyer,idx)=><tr
                key={buyer._id}>
                    <th>{idx+1}</th>
                    <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={buyer.imgUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{buyer.name}</div>
                  </div>
                </div>
              </td>
              <td>{buyer.phone ?buyer.phone: "N/A"}</td>
              <td>{buyer.email}</td>
              <td>{buyer.verified==="no" ?<> <button className="btn btn-xs border-0 bg-[#92B4EC] mr-1" onClick={()=>handleVerify(buyer)}>Verify</button><button className="btn btn-xs bg-red-500 border-0"
              onClick={() => handleDelete(buyer)}>Delete</button></> :<><button className="btn btn-xs mr-1" disabled>Verify</button>
              <button className="btn btn-xs bg-red-500 border-0" onClick={() => handleDelete(buyer)}>Delete</button></>
              
              
              }</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyer;