import React from "react";
import "./Categories.css";
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from "../../components/dashboard-menu-card/DashboardMenuCard";
import DashboardInfoCard from "../../components/dashboardinfocard/DashboardInfoCard";
import DashboardInfo from "../../components/dashboardinfo/DashboardInfo";

export default function Categories()
{
    return(
        <>
          <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <DashboardInfoCard/>
             <DashboardInfo/>
             
              
          
            <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>
        
        </>
    )
}