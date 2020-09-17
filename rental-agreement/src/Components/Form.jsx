import React from 'react';
import axios from 'axios'
import styles from './Form.module.css'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state ={
                name:"",
                contact:"",
                address:"",
                email:""

        }
    }

    handleChange =(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }

    automate_post = async()=>{
        const res = await axios({
            method:"post",
            url:"http://localhost:5000/screenshot",
            data:{
                "name":this.state.name,
                "contact":this.state.contact,
                "address":this.state.address,
                "email":this.state.email
            }
        })
        console.log(res)
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        this.automate_post()
    }

    render(){
        return (
            <div className={styles.main}>

            <div className="container" >
                <h1>Tenant Registration Form</h1>
            <br></br>
           
            <form className={styles.form} onSubmit={this.handleSubmit}>

                <div className="form-group">
                        <label htmlFor="name">Full Name </label>
                        <input type="text" placeholder=" Full Name ( eg : Bruce Wayne)" value ={this.state.name} className="form-control" onChange={this.handleChange} id="name" ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="Number" placeholder="Contact Number ( eg:+910123456789 )" value ={this.state.contact} className="form-control" onChange={this.handleChange} id="contact"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Permanent Address</label>
                    <input type="text" placeholder="Address (eg : 158,Clement Town,Dehradun,Uttarakhand )" value ={this.state.address} className="form-control" onChange={this.handleChange} id="address"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" placeholder="abc@xyz.com" value ={this.state.email} className="form-control" onChange={this.handleChange} id="email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            
            </div>
        </div>
        )
    }
}
export default Form