import React from "react";
import "./AddProduct.css";
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from "../../components/dashboard-menu-card/DashboardMenuCard";
import Overview from "../../components/overview/Overview";
import SearchBar from "../../components/searchbar/SearchBar";
import DashboardInfo from "../../components/dashboardinfo/DashboardInfo";
import DashboardInfoCard from "../../components/dashboardinfocard/DashboardInfoCard";

export default function AddProduct()
{
    return(
        <>
           <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>
            <DashboardInfoCard/>
             <DashboardInfo/>
             <h1 className='add-new-product-text'>Add New Products</h1>
              
              {/* <div style={{position:"absolute"}}> <SubInfo/> */}
              <form >
                 <label className='product-info'>Product Information
                     <hr className='product-info-line'/>
                 </label>
 
                 <label className='product-name'>Product Name:</label>
                 <input type="text" className='product-name-input-container'/>
 
                 <div>
                      <label className='product-category-text'>Product Category:</label>
                     <label className='product-sub-category-text'>Product Sub Category:</label>
                       
                 <div className='product-category-container'>
                     <select className='product-category-dropdown'>
                        
                         
                          <option className='product-category-dropdown'>Select Product Category</option>
                          <option>Product_1</option>
                          <option>Product_2</option>
                          <option>Product_3</option>
                         
                     </select>
                 </div>
 
 
 
 
 
 
 
 
 
 
                   <div className='product-sub-category-container'>
                       <select className='product-category-dropdown'>
                        
                         
                          <option className='product-Subcategory-dropdown'>Select Product Subcategory</option>
                         <option>Product_1</option>
                         <option>Product_2</option>
                         <option>Product_3</option>
                         
                       </select>
                  
                   </div>
 
                   <label className='product-price-text'>Price INR</label>
                   <input type="text" className='product-price-input'/>
 
 
                   <label className='stock-available-taxt'>Stock Available</label>
                   <div className='stock-available-container'>
                     <select className='product-stock-dropdown'>
                         <option className='product-stock-dropdown'>Select Product Stock Availability</option>
                         <option>Available</option>
                         <option>Available</option>
                         <option>Available</option>
                     </select>
                   </div>
 
 
                   <label className='product-description-text'>Product Description (Optional)</label>
                    <textarea className='product-description-input-container'></textarea>
 
                    <label className='select-img-text'>Product Image:</label>
                    <div className='img-file-container'>
                     <input type="file" id="fileInput" accept="image/png"/>
                    </div> 
              
                 </div>
 
 
                 
 
                
               </form>
               
 
               <div className='save-btn-container'>
                 <h6>save</h6>
               </div>
 
 
 
  
 
          
           
             
  
        
        </>
    )
}