/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use Client"
import React from 'react'
import './Search.css'
const Search = ({toglesearch}) => {
  return (
    <>
    <div className="search" onClick={()=>toglesearch((item)=>!item)}>
    <i className="ri-search-line "></i>
    </div>
    </>
  )
}

export default Search
