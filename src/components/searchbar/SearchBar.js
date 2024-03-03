import React from 'react'
import {RiSearchLine}from 'react-icons/ri';
import "./SearchBar.css";

export default function SearchBar()
{
    return(
        <>
           <div style={{position:"relative",display:"flex"}}className='search-bar-container'>
            <h6 className='search-bar'>Search</h6>
              <div style={{position:"absolute"}}>
                <RiSearchLine className='searcbar-icon'/>
                </div>

           </div>
        
        
        </>
    )
}