import React, { useState } from 'react'
import "./AdminDashboard.css"
import AddTransaction from './Components/AddTransaction'
import AddMember from './Components/AddMember'
import AddBook from './Components/AddBook';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GetMember from './Components/GetMember';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import Return from './Components/Return';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GrainIcon from '@material-ui/icons/Grain';

/* Semantic UI Dropdown Styles Import */
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function AdminDashboard() {

    const [active, setActive] = useState("dashboard")
    const [sidebar, setSidebar] = useState(false)

    /* Logout Function*/
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    }


    return (
        <div className="dashboard">
            <div className="dashboard-card">
                <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
                    <IconButton>
                        {sidebar ? <CloseIcon style={{ fontSize: 25, color: "var(--primary-color)" }} /> : <DoubleArrowIcon style={{ fontSize: 25, color: "var(--primary-color)" }} />}
                    </IconButton>
                </div>

                {/* Sidebar */}
                <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
                    <div className='dashboard-logo'>
                        <LibraryBooksIcon style={{ fontSize: 40 }} />
                        <p className="logo-name">Daksha <span>LMS</span></p>
                    </div>

                    <div className="dashboard-menu">
                        <p className={`dashboard-option ${active === "dashboard" ? "clicked" : ""}`} onClick={() => { setActive("dashboard"); setSidebar(false) }}><DashboardIcon className='dashboard-option-icon' /> Overview</p>
                        <p className={`dashboard-option ${active === "profile" ? "clicked" : ""}`} onClick={() => { setActive("profile"); setSidebar(false) }}><AccountCircleIcon className='dashboard-option-icon' /> Profile</p>
                        <p className={`dashboard-option ${active === "addbook" ? "clicked" : ""}`} onClick={() => { setActive("addbook"); setSidebar(false) }}><BookIcon className='dashboard-option-icon' />Add Book</p>
                        <p className={`dashboard-option ${active === "addtransaction" ? "clicked" : ""}`} onClick={() => { setActive("addtransaction"); setSidebar(false) }}><ReceiptIcon className='dashboard-option-icon' /> Add Transaction </p>
                        <p className={`dashboard-option ${active === "getmember" ? "clicked" : ""}`} onClick={() => { setActive("getmember"); setSidebar(false) }}><AccountBoxIcon className='dashboard-option-icon' /> Get Member </p>
                        <p className={`dashboard-option ${active === "addmember" ? "clicked" : ""}`} onClick={() => { setActive("addmember"); setSidebar(false) }}><PersonAddIcon className='dashboard-option-icon' /> Add Member </p>
                        <p className={`dashboard-option ${active === "returntransaction" ? "clicked" : ""}`} onClick={() => { setActive("returntransaction"); setSidebar(false) }}><AssignmentReturnIcon className='dashboard-option-icon' /> Return </p>
                    </div>

                    <div className="dashboard-logout" onClick={logout}>
                        <p className={`dashboard-option`}><PowerSettingsNewIcon className='dashboard-option-icon' /> Log out </p>
                    </div>

                </div>

                <div className="dashboard-option-content">
                    {active === "dashboard" && (
                        <div className="dashboard-overview">
                            <h2 className="overview-title">Dashboard Overview</h2>
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-icon books"><BookIcon /></div>
                                    <div className="stat-details">
                                        <p className="stat-label">Total Books</p>
                                        <h3 className="stat-value">2,451</h3>
                                        <p className="stat-trend positive">+12% this month</p>
                                    </div>
                                    <div className="stat-graph">
                                        <div className="bar" style={{ height: '40%' }}></div>
                                        <div className="bar" style={{ height: '60%' }}></div>
                                        <div className="bar" style={{ height: '50%' }}></div>
                                        <div className="bar" style={{ height: '80%' }}></div>
                                        <div className="bar" style={{ height: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon members"><AccountBoxIcon /></div>
                                    <div className="stat-details">
                                        <p className="stat-label">Active Members</p>
                                        <h3 className="stat-value">842</h3>
                                        <p className="stat-trend positive">+5.4%</p>
                                    </div>
                                    <div className="stat-graph">
                                        <div className="bar" style={{ height: '30%' }}></div>
                                        <div className="bar" style={{ height: '40%' }}></div>
                                        <div className="bar" style={{ height: '60%' }}></div>
                                        <div className="bar" style={{ height: '50%' }}></div>
                                        <div className="bar" style={{ height: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon transactions"><ReceiptIcon /></div>
                                    <div className="stat-details">
                                        <p className="stat-label">Transactions</p>
                                        <h3 className="stat-value">156</h3>
                                        <p className="stat-trend negative">-2.1%</p>
                                    </div>
                                    <div className="stat-graph">
                                        <div className="bar" style={{ height: '80%' }}></div>
                                        <div className="bar" style={{ height: '70%' }}></div>
                                        <div className="bar" style={{ height: '60%' }}></div>
                                        <div className="bar" style={{ height: '40%' }}></div>
                                        <div className="bar" style={{ height: '30%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="recent-activity-container">
                                <h3>System Analytics</h3>
                                <div className="analytics-placeholder">
                                    <div className="chart-line">
                                        <GrainIcon className="chart-bg-icon" />
                                        <span>Graphical visualization of library traffic and book rotations.</span>
                                    </div>
                                    <div className="visual-bars">
                                        <div className="v-bar" style={{ height: '100px', '--color': '#6366f1' }}></div>
                                        <div className="v-bar" style={{ height: '150px', '--color': '#8b5cf6' }}></div>
                                        <div className="v-bar" style={{ height: '120px', '--color': '#ec4899' }}></div>
                                        <div className="v-bar" style={{ height: '180px', '--color': '#f59e0b' }}></div>
                                        <div className="v-bar" style={{ height: '140px', '--color': '#10b981' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="dashboard-addbooks-content" style={active !== "addbook" ? { display: 'none' } : {}}>
                        <AddBook />
                    </div>
                    <div className="dashboard-transactions-content" style={active !== "addtransaction" ? { display: 'none' } : {}}>
                        <AddTransaction />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "addmember" ? { display: 'none' } : {}}>
                        <AddMember />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "getmember" ? { display: 'none' } : {}}>
                        <GetMember />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "returntransaction" ? { display: 'none' } : {}}>
                        <Return />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard