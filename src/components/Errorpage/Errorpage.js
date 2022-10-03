import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './g42logo.png';

const Errorpage = () => {
    return (
        <>
            <div className="form-body">
                <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items"
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
                                                    >404 Not Found</h5>
                                                </div>

                                                <div className="form-button mt-3">
                                                    <NavLink className="btn btn-primary"to="/"
                                                    style={{  
                                                        backgroundColor: '#034041',
                                                        paddingLeft: '30px',
                                                        paddingRight: '30px',
                                                    }}
                                                        >Home</NavLink>
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

export default Errorpage