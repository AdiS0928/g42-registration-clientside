import React from 'react';
import logo from './g42logo.png';
import "./Signup.css";

const Success = () => {
    return (
        <>
            <div className="form-body">
                <div className="form-holder"
                style={{  
                    borderColor: '#034041',
                }}>
                        <div className="form-content">
                            <div className="form-items" id="successpage"
                            style={{  
                                borderColor: '#034041',
                            }}>
                                <form>
                                    <div class="container" className="profilepanel">
                                    <img src={logo} alt="Logo" id='logo'
                                        style={{  
                                            height: '120px',
                                            width: '200px',
                                            marginBottom: '25px',
                                        }}
                                    />
                                                <div class="row" className="profilepanel">
                                                    <h5
                                                        style={{  
                                                            color: '#034041',
                                                    }}
                                                    >Form Submitted</h5>

                                                    <h5
                                                        style={{  
                                                            color: '#034041',
                                                        }}
                                                    >Successfully!</h5>
                                                </div>

                                                <div class="row" className="profilepanel">
                                                    <h4
                                                    style={{  
                                                        color: '#034041',
                                                    }}
                                                    >Thank You!</h4>
                                                </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success