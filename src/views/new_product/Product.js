import React from 'react';
import "./Product.css";
import Dashboardcard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from '../../components/dashboard-menu-card/DashboardMenuCard';
import Overview from "../../components/overview/Overview";
import SearchBar from "../../components/searchbar/SearchBar";
import DashboardInfoCard from '../../components/dashboardinfocard/DashboardInfoCard';
 import DashboardInfo from '../../components/dashboardinfo/DashboardInfo';
 import { Link } from 'react-router-dom';

export default function Product()
{
    return(
        <>
          <div style={{position:"absolute",display:"flex"}}><Dashboardcard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <DashboardInfoCard/>
             <DashboardInfo/>
             
              
          
            <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>
            


           <h1 className="product-text">Products</h1>
          <div className="product-qty-div">
            <div className="qty">150</div>
          </div>
          <div className="add-new-product-div">
            <Link to ="/addproduct">
            <button type="button" className="add-new-btn">Add New Products</button></Link>
          </div>

            <div className="product-table-div">
            <table>
                <thead className="product-table-head">
                    <tr>
                        <th>Sr No</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Stocks</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    <tbody className="product-table-body">
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                               
                               <h6 className="edit-text">Edit</h6>
                                </button></div>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                               
                               <h6 className="edit-text">Edit</h6>
                                </button></div>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                              
                               <h6 className="edit-text">Edit</h6>
                                </button></div>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                               
                               
                               <h6 className="edit-text">Edit</h6>
                                </button></div>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                               
                               <div className="edit-text">Edit</div>
                                </button></div>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>PO123</td>
                            <td>Trio track jacket</td>
                            <td>Clothing</td>
                            <td>Yes</td>
                            <td>Rs.120</td>
                            <div className="edit-btn-div">
                            <button type="button">
                               
                               <h6 className="edit-text">Edit</h6>
                                </button></div>
                        </tr>
                    </tbody>
                </thead>
            </table> 
          </div>
             
          
        
        
        </>
    )
        
    
}