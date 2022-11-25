import React from 'react';

const MyOrders = () => {
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
        <th>Seller</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default MyOrders;