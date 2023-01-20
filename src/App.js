import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
import { useSelector } from 'react-redux';
export const siteName = 'Havenly';
function App() {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div style={{background:mode? "#18191A" : "white" , color:mode? "#808183" : "black"}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
    // 455F7B
  );
}

export default App;
