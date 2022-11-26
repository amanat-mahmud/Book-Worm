import React from 'react';

const Reported = () => {
    return (
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>
                Name
              </td>
              <td>Quality Control</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Reported;