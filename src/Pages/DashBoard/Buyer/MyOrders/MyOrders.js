import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext)
  const { data: myOrders = [] } = useQuery({
    queryKey: ['myOrders'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/order?email=${user.email}`);
      const data = await res.json();
      return data
    }
  });
  // console.log(myOrders);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {/* <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Quality Control</td>
              <td>Blue</td>
            </tr> */}
            {
              myOrders.map((order, idx) => <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={order.product_image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.product_name}</div>
                    </div>
                  </div>
                </td>
                <td>{order.product_price}</td>
                <td>{order.productAvailability ?<button className='btn btn-xs border-0 bg-[#92B4EC]'>Pay</button> :<button className='btn btn-xs'disabled>Paid</button>}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;