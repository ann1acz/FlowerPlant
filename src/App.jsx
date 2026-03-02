import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import DefaultPage from './views/DefaultPage';
import MyPlants from './views/myPlants';
import About from './views/About';
import Form from './views/Form';
import UpdateGuide from './views/Update';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },
      {
        path: "myPlants",
        element: <MyPlants />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "edit/:id",
        element: <UpdateGuide />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  }
],{
  basename: "/FlowerPlant" 
});

function App() {
  return <RouterProvider router={router} />;
}

export default App
