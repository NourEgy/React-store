import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'



const ProductList = () => {

  const {filtered_products: products, gird_view} = useFilterContext();

 
  
  if (products.length < 1 ){
   return (
    <>
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search..
      </h5>
     
    </>
   )
  }
  
  if (gird_view === false ) {
    return (
      <ListView products={products}></ListView>
      )
    }
    
    return ( 
      <GridView products={products}>  </GridView>
      )
    }
    
    export default ProductList
    