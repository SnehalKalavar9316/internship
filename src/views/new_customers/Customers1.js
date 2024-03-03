import React from "react";
import "./Customer1.css";
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from "../../components/dashboard-menu-card/DashboardMenuCard";
import Overview from "../../components/overview/Overview";
import SearchBar from "../../components/searchbar/SearchBar";
import DashboardInfoCard from '../../components/dashboardinfocard/DashboardInfoCard';
 import DashboardInfo from '../../components/dashboardinfo/DashboardInfo';

 export default function Customer1()
 {
    return(
        <>
           <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <DashboardInfoCard/>
             <DashboardInfo/>
             
              
          
            <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>


            <h1 className="customer-text">Customer</h1>
          <div className="customers-div">
            <div className="total-customers">150</div>
          </div>
            <table>
               <thead className='customer-table-head-container'>
                <tr>
                    <th>Sr No</th>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>Mobile No</th>
                    <th>Email.Id</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
               </thead>
               <tbody className='customer-table-body'>
                <tr>
                    <td>01</td>
                    <td>C1123</td>
                    <td>Vishal Rajput</td>
                    <td>8459694413</td>
                    <td>vishal@gmail.com</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>01</td>
                    <td>C1123</td>
                    <td>Vishal Rajput</td>
                    <td>8459694413</td>
                    <td>vishal@gmail.com</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>01</td>
                    <td>C1123</td>
                    <td>Vishal Rajput</td>
                    <td>8459694413</td>
                    <td>vishal@gmail.com</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>01</td>
                    <td>C1123</td>
                    <td>Vishal Rajput</td>
                    <td>8459694413</td>
                    <td>vishal@gmail.com</td>
                    <td>Active</td>
                </tr>
               </tbody>


             </table>
            
        
        </>
    )
 }