import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import DefaultPage from './views/DefaultPage';
import MyPlants from './views/myPlants';
import About from './views/About';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },
      {
        path: 'myPlants',
        element: <MyPlants />,
      },
      {
        path: 'About',
        element: <About />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
