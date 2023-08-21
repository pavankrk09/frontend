import React, { Component } from 'react'
import './App.css'

 class  About extends Component {
  state={
    productsList:[]
  }
  componentDidMount() { 
    fetch("https://backendjap.onrender.com/products")
    .then((res)=>{
      return res.json()
    })
    .then((resjson)=>{
      this.setState({
        productsList:resjson
      })
    })
  }
  render() {
    return (
      <div className='parent-product-item'>
        {
          this.state.productsList.map((product)=>(
            <div className='product-item'>
              <p>Name:{product.price}</p>
              <p>Price:<b>{product.price}</b></p>
              <img src={product.image} width="20%" alt={product.name}/>
              </div>
          
          ))
        }

      </div>
    );
  
  }
}

export default About;