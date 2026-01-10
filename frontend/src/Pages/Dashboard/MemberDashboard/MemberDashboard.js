import React, { useContext, useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import "./MemberDashboard.css";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookIcon from "@material-ui/icons/Book";
import HistoryIcon from "@material-ui/icons/History";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CloseIcon from "@material-ui/icons/Close";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { IconButton } from "@material-ui/core";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import moment from "moment";
import StarIcon from '@material-ui/icons/Star';
import TimelineIcon from '@material-ui/icons/Timeline';

function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/users/getuser/" + user._id
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? (
              <CloseIcon style={{ fontSize: 25, color: "var(--primary-color)" }} />
            ) : (
              <DoubleArrowIcon
                style={{ fontSize: 25, color: "var(--primary-color)" }}
              />
            )}
          </IconButton>
        </div>

        <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
          <div className="dashboard-logo">
            <LibraryBooksIcon style={{ fontSize: 40 }} />
            <p className="logo-name">Daksha <span>LMS</span></p>
          </div>

          <div className="dashboard-menu">
            <p className={`dashboard-option ${active === "profile" ? "clicked" : ""}`} onClick={() => { setActive("profile"); setSidebar(false) }}>
              <AccountCircleIcon className="dashboard-option-icon" /> Profile
            </p>
            <p className={`dashboard-option ${active === "active" ? "clicked" : ""}`} onClick={() => { setActive("active"); setSidebar(false) }}>
              <LocalLibraryIcon className="dashboard-option-icon" /> Issued
            </p>
            <p className={`dashboard-option ${active === "reserved" ? "clicked" : ""}`} onClick={() => { setActive("reserved"); setSidebar(false) }}>
              <BookIcon className="dashboard-option-icon" /> Reserved
            </p>
            <p className={`dashboard-option ${active === "history" ? "clicked" : ""}`} onClick={() => { setActive("history"); setSidebar(false) }}>
              <HistoryIcon className="dashboard-option-icon" /> History
            </p>
          </div>

          <div className="dashboard-logout" onClick={logout}>
            <p className={`dashboard-option`}><PowerSettingsNewIcon className="dashboard-option-icon" /> Log out </p>
          </div>
        </div>

        <div className="dashboard-option-content">
          {active === "profile" && (
            <div className="member-profile-content">
              <div className="profile-hero-card">
                <div className="profile-hero-left">
                  <div className="user-profileimage-container">
                    <img
                      className="user-profileimage"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt=""
                    />
                    <div className="profile-online-badge"></div>
                  </div>
                  <div className="user-info">
                    <h2 className="user-name">{memberDetails?.userFullName}</h2>
                    <p className="user-type-tag">{memberDetails?.userType}</p>
                    <div className="user-contact-grid">
                      <p><span className="label">ID:</span> {memberDetails?.userType === "Student" ? memberDetails?.admissionId : memberDetails?.employeeId}</p>
                      <p><span className="label">Email:</span> {memberDetails?.email}</p>
                    </div>
                  </div>
                </div>

                <div className="profile-hero-right">
                  <div className="stat-blob">
                    <StarIcon className="blob-icon" />
                    <div className="blob-text">
                      <p>Current Points</p>
                      <h3>540</h3>
                    </div>
                  </div>
                  <div className="stat-blob rank">
                    <TimelineIcon className="blob-icon" />
                    <div className="blob-text">
                      <p>Global Rank</p>
                      <h3>#{memberDetails?.points || '1'}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-grid">
                <div className="details-card">
                  <h3>Personal Information</h3>
                  <div className="details-rows">
                    <div className="detail-row"><span>Age</span> <span>{memberDetails?.age}</span></div>
                    <div className="detail-row"><span>Gender</span> <span>{memberDetails?.gender}</span></div>
                    <div className="detail-row"><span>DOB</span> <span>{memberDetails?.dob}</span></div>
                    <div className="detail-row"><span>Address</span> <span>{memberDetails?.address}</span></div>
                  </div>
                </div>
                <div className="details-card summary">
                  <h3>Activity Summary</h3>
                  <div className="activity-stats">
                    <div className="act-stat">
                      <h4>{memberDetails?.activeTransactions?.filter(t => t.transactionType === "Issued").length || 0}</h4>
                      <p>Issued</p>
                    </div>
                    <div className="act-stat">
                      <h4>{memberDetails?.activeTransactions?.filter(t => t.transactionType === "Reserved").length || 0}</h4>
                      <p>Reserved</p>
                    </div>
                    <div className="act-stat">
                      <h4>{memberDetails?.prevTransactions?.length || 0}</h4>
                      <p>Returned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "active" && (
            <div className="member-activebooks-content">
              <div className="content-header">
                <h2 className="member-dashboard-heading">Issued Books</h2>
                <p className="heading-sub">Manage your currently borrowed literature</p>
              </div>
              <div className="table-container">
                <table className="admindashboard-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Book Name</th>
                      <th>Issued Date</th>
                      <th>Return Date</th>
                      <th>Fine Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberDetails?.activeTransactions
                      ?.filter((data) => data.transactionType === "Issued")
                      .map((data, index) => {
                        const fine = Math.floor((Date.parse(moment(new Date()).format("MM/DD/YYYY")) - Date.parse(data.toDate)) / 86400000);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="book-name-cell">{data.bookName}</td>
                            <td>{data.fromDate}</td>
                            <td>{data.toDate}</td>
                            <td>
                              <span className={`fine-tag ${fine > 0 ? 'overdue' : 'normal'}`}>
                                {fine <= 0 ? "No Fine" : `₹${fine * 10}`}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {active === "reserved" && (
            <div className="member-reservedbooks-content">
              <div className="content-header">
                <h2 className="member-dashboard-heading">Reserved Books</h2>
                <p className="heading-sub">Your waitlist and upcoming reads</p>
              </div>
              <div className="table-container">
                <table className="admindashboard-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Book Name</th>
                      <th>Reserved From</th>
                      <th>Reserved To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberDetails?.activeTransactions
                      ?.filter((data) => data.transactionType === "Reserved")
                      .map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="book-name-cell">{data.bookName}</td>
                          <td>{data.fromDate}</td>
                          <td>{data.toDate}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {active === "history" && (
            <div className="member-history-content">
              <div className="content-header">
                <h2 className="member-dashboard-heading">Reading History</h2>
                <p className="heading-sub">A journey through your past reads</p>
              </div>
              <div className="table-container">
                <table className="admindashboard-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Book Name</th>
                      <th>Issued</th>
                      <th>Target Return</th>
                      <th>Actual Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberDetails?.prevTransactions?.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="book-name-cell">{data.bookName}</td>
                        <td>{data.fromDate}</td>
                        <td>{data.toDate}</td>
                        <td>{data.returnDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
