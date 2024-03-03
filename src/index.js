import React from 'react';
import "./index.css";
import ReactDom from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import Product from "./views/products/Product";
// import Customer from "./views/customers/Customer";
// import Dashboard from "./views/dashboard/Dashboard";
//import DashboardCard from './components/dashboardcard/DashboardCard';
//import MenuCard from './components/menucard/MenuCard';




//import Menu from "./components/dashboard-menu-card/DashboardMenuCard";

//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import addCategory from "./views/add-category/AddCategory";
 //import Product from "./views/products/Product";
//import Customer from "./views/customers/Customer";
import SignUp from "./views/login_page/Login";
import Dashboard from "./views/new_dashboard/Dashboard1";
import Product from './views/new_product/Product';
import AddProduct from './views/add_new_products/AddProduct';
import Customer1 from './views/new_customers/Customers1';
import AddCategory from "./views/add-category/AddCategory";
import SubCategory from "./views/subcategory/Subcategory";
//import Dashboard from "./views/dashboard/Dashboard";
//import Startup from './components/startups/Startup';
//import Dashboard from './views/dashboard/Dashboard';
//import Product from './views/products/Product';
//import Subcategory from './views/subcategory/Subcategory';
//import AddCategory from "./views/add-category/AddCategory"; 
//import Product1 from './views/product1/Product1';
const router  = createBrowserRouter([
   {
      path:"/",
      element:<SignUp/>,
   },
   {
      path:"/dashboard",
      element:<Dashboard/>,
   },
   {
      path:"/product",
      element:<Product/>,
   },
   {
      path:"/addproduct",
      element:<AddProduct/>,
   },
   {
      path:"/customer",
      element:<Customer1/>
   },
   {
      path:"/addcategory",
      element:<AddCategory/>
   },
   {
      path:"/subcategory",
      element:<SubCategory/>,
   },
   

]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
// import Main from './components/main/Main';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Main/>
    
//   </BrowserRouter>
// );


reportWebVitals();














//  const router = createBrowserRouter([
//   {
//     path:"/product",
//     element:<Product/>,
//   },
//   {
//     path:"/customer",
//     element:<Customer/>,
//   },
//   {
//     path:"/dashboard",
//     element:<Dashboard/>,
//   },
//  ]);

  
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <React.StrictMode>

     
  
//   <MenuCard/>



//  </React.StrictMode>
//  );

  


// (<RouterProvider router = {router}/>);















// import Dashboard from "./views/"
// import Product from "./views/products/Product";
// import Customer from "./views/customers/Customer";










//  const router = createBrowserRouter([
  
//    {
//       path:"/Product",
//       element:<Product/>,
//   },
//    {
//       path:"/Customer",
//       element:<Customer/>,
//    },
  
  
//  ]);

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router ={router}/>);

//reportWebVitals(); 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <> <App/></>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
