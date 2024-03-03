import React from 'react'
import "./AddCategory.css";
import DashboardCard from '../../components/dashboardcard/DashboardCard';
import DashboardMenuCard from '../../components/dashboard-menu-card/DashboardMenuCard';
import Overview from '../../components/overview/Overview';
import SearchBar from '../../components/searchbar/SearchBar';
import DashboardInfoCard from "../../components/dashboardinfocard/DashboardInfoCard";




export default function Customer()
{
  return(
    <>
      {/* <Startup/>
      <div className='category-info'>
        <div className='view-btn'></div>
             <div className='view-btn-text'>View </div>
             <div className='add-category-container'>ADD CATEGORY</div>
             
             <div style={{display:"flex"}}><h2>CATEGORY:</h2>
             <div className='category-container'>
              <div className='input-box'>Add Category Here</div></div></div>
              <div style={{display:"flex"}}>
                <h6>Status:</h6>
                <div className='status-category-container'>
                  <div className='select-status-text'>Select Status</div>
                </div>
               </div>
               <div className='add-btn-container'>
               <button type="button" className='add-btn'>ADD</button></div>
      </div>
        
     
      
     */}
          <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <DashboardInfoCard/>
             <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>
            <div className='category-info'>
        <div className='view-btn'></div>
             <div className='view-btn-text'>View </div>
             <div className='add-category-container'>ADD CATEGORY</div>
             
             <div style={{display:"flex"}}><h2>CATEGORY:</h2>
             <div className='category-container'>
              <div className='input-box'>Add Category Here</div></div></div>
              <div style={{display:"flex"}}>
                <h6>Status:</h6>
                <div className='status-category-container'>
                  <div className='select-status-text'>Select Status</div>
                </div>
               </div>
               <div className='add-btn-container'>
               <button type="button" className='add-btn'>ADD</button></div>
      </div>


    
    </>
  )
}
