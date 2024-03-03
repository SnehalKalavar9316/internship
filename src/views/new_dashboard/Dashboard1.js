import React from "react";
import './Dashboard1.css';
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import DashboardMenuCard from "../../components/dashboard-menu-card/DashboardMenuCard";
import Overview from "../../components/overview/Overview";
import SearchBar from "../../components/searchbar/SearchBar";

export default function Dashboard1()
{
    return(
        <>
           <div style={{position:"absolute",display:"flex"}}><DashboardCard/> </div>
             <div style={{position:"absolute"}}><DashboardMenuCard/></div> 
             <div style={{position:"absolute"}}><Overview/></div>
            <div style={{position:"absolute"}}><SearchBar/></div>


            <div className='no-of-enquiry-container'>
             <div className='no-of-enquiry-sub-container'>
                {/* <div><h6>No .Of Enquiry<br/>150</h6></div> */}
                {/* <div className='btn-container'>
                    <button type="button"className='btn'>THIS YEAR</button>
                </div> */}
                <div style={{display:"flex",position:"absolute"}}>
                    <div className='jan-inquiry-rating'></div>
                    <div className='feb-inquiry-rating'></div>
                    <div className="feb-inquiry-rating-color"></div>
                    <div className='mar-inquiry-rating'></div>
                    <div className="mar-inquiry-rating-color"></div>
                    <div className='apr-inquiry-rating'></div>
                    <div className="apr-inquiry-rating-color"></div>
                    <div className='may-inquiry-rating'></div>
                    <div className="may-inquiry-rating-color"></div>
                    <div className='jun-inquiry-rating'></div>
                    <div className="jun-inquiry-rating-color"></div>
                    <div className='jul-inquiry-rating'></div>
                    <div className="jul-inquiry-rating-color"></div>
                    <div className='aug-inquiry-rating'></div>
                    <div className="aug-inquiry-rating-color"></div>
                    <div className='sep-inquiry-rating'></div>
                    <div className="sep-inquiry-rating-color"></div>
                    <div className='oct-inquiry-rating'></div>
                    <div className="oct-inquiry-rating-color"></div>
                    <div className='nov-inquiry-rating'></div>
                    <div className="nov-inquiry-rating-color"></div>
                    <div className='dec-inquiry-rating'></div>
                    <div className="dec-inquiry-rating-color"></div>


                </div>
                <div style={{display:"flex",position:"relative"}}>
                    <div className='jan-div'>Jav</div>
                   
                    <div className='feb-div'>Feb</div>
                    <div className='mar-div'>Mar</div>
                    <div className='apr-div'>Apr</div>
                    <div className='may-div'>May</div>
                    <div className='jun-div'>Jun</div>
                    <div className='jul-div'>Jul</div>
                    <div className='aug-div'>Aug</div>
                    <div className='sep-div'>Sep</div>
                    <div className='oct-div'>Oct</div>
                    <div className='nov-div'>Nov</div>
                    <div className='dec-div'>Dec</div>
                </div>


                <div className='customer-container'>
            {/* <h1 className='customer-text'>Customer</h1> */}
            <h6 className='customer-text1'>Information About Your Customer</h6>
            </div>

           </div>

           <div className='top-product-container'>
            <div style={{display:"flex"}}>
            <div className='total-visit-card'>
                <h6 className='total-visit-info-card'>Total Visits<br/>10.8m</h6>
            </div>
            <div className='total-sales-card'>
                <h6 className='total-sales-info-card'>Total Sales<br/>100,345</h6>
            </div>
            <div className='total-made-card'>
                <h6 className='total-made-info-card'>Total Made <br/>$200k</h6>
            </div>
            <div className='order-completed-card'>
                <h6 className='order-completed-info-card'>Orders Completed<br/>98,771</h6>
            </div>
            
          </div>
          <h1>Top Products</h1>
          <div style={{display:"inline-block"}}>
            <div className='top-product-div1'>
                <div style={{display:"flex"}}> 
                     {/* <img src={TopProductImage} alt ="img"className="top-prouct-img1"/> */}
                     <p className='top-product-info'>Samsung S20 128GB <br/>Pink-50 orders</p>
                     <p className='inventory'>Inventory <br/>7000</p>
                     <p className='sale'>Sale<br/>$1,000.60</p>
                     <p className='price'>Price<br/>$1,300.92</p>
                     <p className='today-status'>Today<br/>$17,000.92</p>
              </div>
           </div>
            <div className='top-product-div2'>
            <div style={{display:"flex"}}>
                {/* <img src ={TopProductImage} className='top-product-img2'/> */}
                <p className='top-product-info'>Samsung S21 256GB <br/>Black-25 orders</p>
                     <p className='inventory'>Inventory <br/>200</p>
                     <p className='sale'>Sale<br/>$1,200.60</p>
                     <p className='price'>Price<br/>$1,500.92</p>
                     <p className='today-status'>Today<br/>$12,000.82</p>
            
            </div>
            </div>
          </div>
          </div> 

          <div className='start-overview-container'>
            <h1 className='stats-overview-text'>Stats Overview</h1>
            <h6 className='stats-overview-tex1'>information about store visits</h6>
            <h6 className='women-text'>Women</h6>
            <div className='women-div'>
                <div className='women-child-div'></div>
                <div className='rating'>63%</div>
            </div>
            <h6 className='men-text'>Men</h6>
            <div className='men-div'>
                <div className='men-child-div'></div>
                <div className='rating'>88%</div>
            </div>

            <h6 className='kids-text'>Kids</h6>
            <div className='kids-div'>
                <div className='kids-child-div'></div>
                <div className='rating'>38%</div>
            </div>






</div>






          </div>
               
                
        </>
    )
}