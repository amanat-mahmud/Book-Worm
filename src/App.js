import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      {/*2nd color if needed FF8787*/}
      {/* <h1 className='text-5xl bg-[#92B4EC]'>Test</h1> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
