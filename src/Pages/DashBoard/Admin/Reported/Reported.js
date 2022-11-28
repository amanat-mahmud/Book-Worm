import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const Reported = () => {
  const {user} = useContext(AuthContext);
  const { data: reportedBooks = [] , refetch } = useQuery({
      queryKey: ['reportedBooks'],
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/report',{
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
          });
          const data = await res.json();
          return data;
      }
  });
  console.log(reportedBooks);
  const handleDelete = (id) =>{
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`http://localhost:5000/report?email=${user?.email}&id=${id}`, {
              method: 'DELETE',
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
          })
              .then(res => res.json())
              .then(data => {
                  
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'User has been deleted.',
                          'success'
                      )
                      refetch();
                  }
                  
              })
      }
      else {
          Swal.fire('Didn\'t delete user', '', 'success')
      }
  })

      
  }
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Reported By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                reportedBooks.map((book,idx)=><tr
                key={book._id}>
                    <th>{idx+1}</th>
                    <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={book.bookImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{book.bookName}</div>
                  </div>
                </div>
              </td>
              <td>{book.price}</td>
              <td>{book.sellerEmail}</td>
              <td>{book.reportedBy}</td>
              <td><button className="btn btn-xs bg-red-500 border-0"
              onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default Reported;