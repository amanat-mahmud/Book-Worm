import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {
  const {user} = useContext(AuthContext);
  const { data: products = [], refetch} = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/myproducts?email=${user.email}`,{
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        });
        const data = await res.json();
        
        return data
    }
  });
  console.log(products);
  const handleAdvertise = (id)=>{
    // console.log(id);
    fetch(`http://localhost:5000/books/${id}`,{
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
  })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
      refetch()}
    })
  }
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
                <td>{prod.available==="yes" ? 'Unsold':'Sold'}</td>
                <td>{(((prod.advertised==="no" && prod.available==="no")) || (prod.advertised==="yes" && prod.available==="no") ||(prod.advertised==="yes" && prod.available==="yes")) ? <button className="btn btn-xs  mr-1" disabled>Advertised</button>:<button className="btn btn-xs border-0 bg-[#92B4EC] mr-1" onClick={()=>handleAdvertise(prod._id)}>Advertise</button>}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;