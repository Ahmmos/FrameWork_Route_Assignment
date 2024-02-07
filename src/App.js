import './App.css';
import About from './Componants/About/About';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import MainLayout from './Componants/MainLayout/MainLayout';
import Navbar from './Componants/Navbar/Navbar';
import Portfolio from './Componants/Portfolio/Portfolio';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
let Routes =createBrowserRouter([
  {
    path:"/",element: <MainLayout />,children:[
      
        {index:true,element: <Home />},
        {path:"/home",element: <Home />},
        {path:"/about",element: <About />},
        {path:"/contact",element: <Contact />},
        {path:"/portfolio",element: <Portfolio />},
      
    ]
    
  }
])


  return (
    <>
    <RouterProvider router={Routes}>

    </RouterProvider>
    <Footer/>
    </>
  )
}

export default App;
