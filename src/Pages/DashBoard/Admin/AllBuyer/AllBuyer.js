import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=user');
            const data = await res.json();
            return data;
        }
    });
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
                {buyer.name}
              </td>
              <td>{buyer.phone ?buyer.phone: "N/A"}</td>
              <td>{buyer.email}</td>
              <td>{buyer.verified==="yes" ?<> <button className="btn btn-xs border-0 bg-[#92B4EC] mr-1">Verify</button><button className="btn btn-xs bg-red-500 border-0">Delete</button></> :
              <button className="btn btn-xs bg-red-500 border-0">Delete</button>
              
              }</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyer;