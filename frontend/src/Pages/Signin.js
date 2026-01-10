import React, { useContext, useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext.js'
import Switch from '@material-ui/core/Switch';
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Signin() {
    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState("")
    const [employeeId, setEmployeeId] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL

    const loginCall = async (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        setIsLoading(true);
        try {
            const res = await axios.post(API_URL + "api/auth/signin", userCredential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err })
            setError("Authentication failed. Please check your credentials.")
        }
        setIsLoading(false);
    }

    const handleForm = (e) => {
        e.preventDefault()
        isStudent
            ? loginCall({ admissionId, password }, dispatch)
            : loginCall({ employeeId, password }, dispatch)
    }

    return (
        <div className='signin-container'>
            <div className="animated-bg">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
            </div>

            <div className="signin-card">
                <div className="signin-header">
                    <div className="signin-logo">
                        <LibraryBooksIcon style={{ fontSize: 40 }} />
                        <p className="logo-name">Daksha <span>LMS</span></p>
                    </div>
                    <h2 className="signin-title">Welcome Back</h2>
                    <p className="signin-subtitle">Please enter your details to sign in</p>
                </div>

                <form className="signin-form" onSubmit={handleForm}>
                    <div className="persontype-toggle">
                        <p>{isStudent ? "Student Access" : "Staff Access"}</p>
                        <div className="toggle-wrapper">
                            <span>Staff?</span>
                            <Switch
                                onChange={() => setIsStudent(!isStudent)}
                                color="primary"
                            />
                        </div>
                    </div>

                    {error && <div className="error-box"><p>{error}</p></div>}

                    <div className="signin-fields">
                        <div className="input-group">
                            <label htmlFor={isStudent ? "admissionId" : "employeeId"}>
                                {isStudent ? "Admission ID" : "Employee ID"}
                            </label>
                            <div className="input-wrapper">
                                <AccountCircleIcon className="input-icon" />
                                <input
                                    className='signin-textbox'
                                    type="text"
                                    placeholder={isStudent ? "S202XXXXX" : "E100XXXXX"}
                                    name={isStudent ? "admissionId" : "employeeId"}
                                    required
                                    onChange={(e) => { isStudent ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <LockIcon className="input-icon" />
                                <input
                                    className='signin-textbox'
                                    type="password"
                                    minLength='6'
                                    placeholder="••••••••"
                                    name="psw"
                                    required
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="signin-button" disabled={isLoading}>
                        {isLoading ? "Authenticating..." : "Sign In"}
                        {!isLoading && <ArrowForwardIcon className="btn-icon" />}
                    </button>

                    <div className="signin-footer">
                        <a className="forget-pass" href="#home">Forgot password?</a>
                        <p className="signup-text">New member? <span>Contact Admin</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin