import React from 'react'
import "./DashboardMenuCard.css";
import { Link } from 'react-router-dom';


// import {FaAirbnb} from 'react-icons/fa';


export default function DashboardMenuCard()
{
    return(
        <>
           
           
             
            <div className='menubar-container'>
                <div style={{display:"flex"}}>
                 <div className='div-box'>
                    <div className='div-child-box'></div></div>
                    <div className='startup-idea-container'>STARTUP IDEA</div></div>
                 <Link to ="/">Sign Up</Link>  
                <Link to ="/dashboard" className="dashboard-menu">Dashboard</Link> 
                <Link to ="/product" className='dashboard-product-menu'>Products</Link>  
                <Link to ="/customer" className='dashboard-customer-menu'>Customers</Link>  
                <Link to ="/order" className='dashboard-order-menu'>Orders</Link> 
                <Link to ="/shipment" className='dashboard-shipment-menu'>Shipments</Link> 
                <Link to ="/transaction" className='dashboard-transaction-menu'>Transactions</Link> 
                <Link to ="/setting" className='dashboard-setting-menu'>Settings</Link>
                <Link to ="/addcategory">AddCategory</Link>
                <Link to ="/subcategory">SubCategory</Link>
                {/* <Link to ="/logout" className='dashboard-logout-menu'>Logout</Link> */}
                
                 
           </div>
           
        
        </>
    )

}
 /* <h6 className='dashboard-menu'>Dashboard</h6>
                <h6 className='dashboard-product-menu'>Products</h6>  */
 

                 /* <Link to ="/Dashboard">Dashboard</Link>
                 <Link to ="/Product">Product</Link>
                 <Link to ="/Customer">Customer</Link>
                 <Link to ="/Order">Order</Link>
                 <Link to ="/Shipment">Shipment</Link>
                 <Link to ="/Transaction">Transaction</Link>
                 <Link to ="/Setting">Setting</Link>
                 <Link to ="/Logout">Logout</Link> */

                 
                
                 /* <Link to ="/product">Products</Link>  */
                
                /* <Link to= "/dashboard"className='dashboard-customer-menu'>Customers</h6>
                <h6 className='dashboard-order-menu'>Orders</h6>
                <h6 className='dashboard-shipment-menu'>Shipments</h6>
                <h6 className='dashboard-transaction-menu'>Transactions</h6>
                <h6 className='dashboard-setting-menu'>Settings</h6>
                <h6 className='dashboard-logout-menu'>Logout</h6> */