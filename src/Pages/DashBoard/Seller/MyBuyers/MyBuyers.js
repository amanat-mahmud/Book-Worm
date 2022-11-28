import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
//   locATION

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data: buyers = [] } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch(`https://book-worm-server-omega.vercel.app/mybuyers?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      });
      const data = await res.json();
      return data
    }
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers.map((buyer, idx) => <tr key={buyer._id}>
                <th>{idx + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer.phone ?? "N/A"}</td>
                <td>{buyer.location ?? "N/A"}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;