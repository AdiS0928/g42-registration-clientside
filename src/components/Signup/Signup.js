import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from './g42logo.png';

const Signup = () => {
    const history = useNavigate();
    const [user,setUser] = useState({
        name:"", email:"", phone:"", company:"", position:"",message:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    }

//fetch api to transfer data
    const PostData = async (e) => {
        
        if (document.getElementById("name").value === "")
        {
            // something is wrong
            alert('Please Enter Your Name');
            return false;
        }

        if (document.getElementById("email").value === "")
        {
            // something is wrong
            alert('{Please Enter Your Email}');
            return false;
        }

        if (document.getElementById("phone").value === "")
        {
            // something is wrong
            alert('Please Enter Your Phone Number');
            return false;
        }

        if (document.getElementById("company").value === "")
        {
            // something is wrong
            alert('Please Enter Company Name');
            return false;
        }

        if (document.getElementById("position").value === "")
        {
            alert('Please Enter Your Position');
            return false;
        }

        if (document.getElementById("message").value === "")
        {
            alert('Please Enter Your Feedback');
            return false;
        }


        e.preventDefault();
        //object destruction so dont need to write user.name etc again and again
        const { name, email, phone, company, position, message } = user;
        
        axios.post("https://g42-server.herokuapp.com/register", {
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                name, email, phone, company, position, message
            })
        });

        // const data = await res.json();

        // if(data.status === 422 || !data) {
        //     window.alert("Invalid Credentials");
        //     console.log("Invalid Credentials");
        // } else {
        //     console.log("Form Submitted!");
        //     history('/success');
        // }

        history('/success');

    }

    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items"
                                style={{  
                                    textAlign: 'center',
                                }}
                            >
                                <img src={logo} alt="Logo" id='logo'
                                style={{  
                                    height: '120px',
                                    width: '200px',
                                  }}
                                  />
                                <form method="POST" id="register-form" className="requires-validation" novalidate>

                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="Name" required/>
                                        <div className="valid-tooltip">Username field is valid!</div>
                                        <div className="invalid-tooltip">Username field cannot be blank!</div>
                                    </div>


                                    <div className="col-md-12">
                                        <input className="form-control" type="email" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Contact Email" required/>
                                        <div className="valid-feedback">Email field is valid!</div>
                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>


                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="Contact Number" required/>
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                    </div>


                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="company" id="company" value={user.company} onChange={handleInputs} placeholder="Company" required/>
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                    </div>


                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="position" id="position" value={user.position} onChange={handleInputs} placeholder="Position" required/>
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                    </div>


                                    <div className="col-md-12">
                                        <textarea className="form-control" type="textarea" name="message" id="message" rows='3' value={user.message} onChange={handleInputs} placeholder="For us, the answer is Yes. Now, what's your question?" required
                                        style={{  
                                            height: '115px',
                                            marginBottom: '0px',
                                        }}/>
                                        <div className="valid-tooltip">Password field is valid!</div>
                                        <div className="invalid-tooltip">Password field cannot be blank!</div>
                                    </div>

                            

                                    <div className="form-button mt-3">
                                        <button id="signup" name="signup" type="submit" className="btn btn-primary" onClick={PostData}
                                        style={{  
                                            backgroundColor: '#034041',
                                            paddingLeft: '30px',
                                            paddingRight: '30px',
                                        }}
                                            >SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
