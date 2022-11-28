import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext)
  const { data: myOrders = [] } = useQuery({
    queryKey: ['myOrders'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/order?email=${user.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
      });
      const data = await res.json();
      return data
    }
  });
  const { data: paidOrders = [] } = useQuery({
    queryKey: ['paidOrders'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/book?email=${user.email}`);
      const data = await res.json();
      return data
    }
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
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
                <td><Link to={`/dashboard/payment/${order._id}`}><button className='btn border-0 bg-[#92B4EC]'>Pay</button></Link></td>
              </tr>)
            }
            {
              paidOrders.map((myOrder, idx) => <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myOrder.bookImage} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myOrder.bookName}</div>
                    </div>
                  </div>
                </td>
                <td>{myOrder.reSalePrice}</td>
                <td><button className='btn'disabled>Paid</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;