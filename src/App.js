import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
export const siteName = 'Havenly';
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
