import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {
  const {user} = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/myproducts?email=${user.email}`);
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
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((prod,idx)=><tr
              key={prod._id}>
                <th>{idx+1}</th>
                <td>{prod.bookName}</td>
                <td>{prod.author}</td>
                <td>{prod.category}</td>
                <td>{prod.reSalePrice}</td>
                <td>{prod.available ? 'Unsold':'Sold'}</td>
                <td>{prod.advertised ? <button className="btn btn-xs  mr-1" disabled>Advertised</button>:<button className="btn btn-xs border-0 bg-[#92B4EC] mr-1">Advertise</button>}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;