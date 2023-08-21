import React, { Component } from 'react'
import axios from 'axios'
export default class Contact extends Component {
  stat={
    userslist:[]
  }
  componentDidCatch(){
    axios.get("https://backendjap.onrender.com/bring")
    .then((res)=>{
      this.setState({
        userList:res.data
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.userslist.map((user)=>(
            <div key={user._id}> 
            <p>username:{user.username}</p>
            <p>password:{user.password}</p>
          </div>
          ))
        }
      </div>
    )
  }
}
