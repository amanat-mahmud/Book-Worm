import React from 'react';

const MyBuyers = () => {
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
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
        </div>
    );
};

export default MyBuyers;