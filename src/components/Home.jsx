import React, { useEffect, useState } from 'react'
import prodService from '../service/prod.service'

const Home = () => {
const [prodList, setProdList]  = useState([]);

    useEffect (() => {
      prodService.getProdductList().then((res) =>{
        console.log(res.data);
        setProdList(res.data); 
      }).catch((error) =>{
        console.log(error)
      })    
    }, []);

  return (  
    <div className='container'>
        <h1 className='text-center mt 3'> Product List</h1>
        <table class="table mt-5">
            <thead className='bg-light'>
                <tr>
                <th scope="col">SL #</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                </tr>
            </thead>            
            <tbody>
              {
                prodList.map((e,num)=> (
                  <tr>
                    <th scope="row">{num+1}</th>
                      <td>{e.productName}</td>
                      <td>{e.productPrice}</td>
                      <td>{e.imageUrl}</td>
                    </tr> 
                ))
              }
                                   
            </tbody>
            </table>
    </div>
  )
}

export default Home