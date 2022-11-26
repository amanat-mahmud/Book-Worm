import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            return data;
        }
    });
    // console.log(sellers);
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
            {/* <!-- row 1 --> */}
            {/* <tr>
              <th>1</th>
              <td>
                Name
              </td>
              <td>Quality Control</td>
              <td>Blue</td>
            </tr> */}
            {
                sellers.map((seller,idx)=><tr
                key={seller._id}>
                    <th>{idx+1}</th>
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
              <td>{seller.phone ?seller.phone: "N/A"}</td>
              <td>{seller.email}</td>
              <td>{seller.verified==="no" ?<> <button className="btn btn-xs border-0 bg-[#92B4EC] mr-1">Verify</button><button className="btn btn-xs bg-red-500 border-0">Delete</button></> :
              <button className="btn btn-xs bg-red-500 border-0">Delete</button>
              
              }</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllSeller;