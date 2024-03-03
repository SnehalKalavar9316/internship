import React from 'react'

import "./Subcategory.css";
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from '../../components/dashboard-menu-card/DashboardMenuCard';
import Overview from "../../components/overview/Overview";
import SearchBar from "../../components/searchbar/SearchBar";
import DashboardInfoCard from '../../components/dashboardinfocard/DashboardInfoCard';
import DashboardInfo from '../../components/dashboardinfo/DashboardInfo';


export default function Subcategory()

{
    return(
    <>
      <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <DashboardInfoCard/>
             <DashboardInfo/>
             <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>

            <div className='add-categorys-btn-container'>
                <h6 className='add-categorys-btn'>Add Category</h6>
                </div>
              
             
             
              
                  
                  <table>
                    
                    <thead className='sub-category-table-head'>
                        
                        
                        <tr>
                            <th>Sr No</th>
                            <th>category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        
                    </thead>
                    
                    <tbody className='sub-category-table-body'>
                        <tr  style = {{Top:"480px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                           <button type ="text" className='action-btn'><span style={{ width:"41px",
                                   height:"28px",
                                   marginTop:"50px",
                                   left:"5px",
                                   fontFamily: "Roboto",
                                   fontSize: "24px",
                                   fontWeight: "500",
                                   lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                        </tr>
                         <tr style = {{marginTop:"546px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            </tr>
                        <tr style = {{marginTop:"612px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            
                        </tr>
                        <tr style = {{marginTop:"688px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            </tr>
                    </tbody>
                    
                    
                </table>
                 
              
            
              
             
             















    {/* <faSquareChevronDown/>
        <div style={{position:"relative"}}>

             
             <Startup/>
              <div className='add-categorys-btn-container'>
                <h6 className='add-categorys-btn'>Add Category</h6>
                </div>
              
             
             
              <div className='sub-category-info'><SubInfo/>
                  
                  <table>
                    
                    <thead className='sub-category-table-head'>
                        
                        
                        <tr>
                            <th>Sr No</th>
                            <th>category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        
                    </thead>
                    
                    <tbody className='sub-category-table-body'>
                        <tr  style = {{Top:"480px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                           <button type ="text" className='action-btn'><span style={{ width:"41px",
                                   height:"28px",
                                   marginTop:"50px",
                                   left:"5px",
                                   fontFamily: "Roboto",
                                   fontSize: "24px",
                                   fontWeight: "500",
                                   lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                        </tr>
                         <tr style = {{marginTop:"546px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            </tr>
                        <tr style = {{marginTop:"612px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            
                        </tr>
                        <tr style = {{marginTop:"688px"}}>
                            <td>01</td>
                            <td>Repairs</td>
                            <td>Active</td>
                            <button type ="text" className='action-btn'><span style={{ width:"41px",
                                    height:"28px",
                                    marginTop:"50px",
                                    left:"5px",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    lineHeight: "28.13px"}}>Edit</span>
                             
                            </button>
                            </tr>
                    </tbody>
                    
                    
                </table>
                 
              
             </div>
             
              
             
             </div> 
            
            
       
         
           */}
           
        
        </>
        
    )
}