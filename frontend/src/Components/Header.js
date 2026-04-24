import { React, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import { AuthContext } from '../Context/AuthContext.js';

function Header() {

    const [menutoggle, setMenutoggle] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const history = useHistory()
    const { user, dispatch } = useContext(AuthContext)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    const logout = () => {
        dispatch({ type: "LOGIN_FAILURE", payload: null });
        localStorage.removeItem("user");
        setMenutoggle(false);
        history.push('/');
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() !== "") {
            history.push(`/books?search=${searchQuery}`)
        }
    }

    return (
        <div className="header">
            <div className="logo-nav">
                <Link to='/' className="logo-container">
                    <div className="logo-icon-wrapper">
                        <LibraryBooksIcon className="logo-icon-animated" />
                    </div>
                    <span className="logo-text">Daksha <span>LMS</span></span>
                </Link>
            </div>

            <div className='nav-right'>
                <div className="search-box-wrapper">
                    <SearchIcon className="search-icon-nav" />
                    <input
                        className='search-input-modern'
                        type='text'
                        placeholder='Find a book...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>Books</Link>
                    </li>
                    {user ? (
                        <>
                            <li className="option" onClick={() => { closeMenu() }}>
                                <Link to={user.isAdmin ? '/dashboard@admin' : '/dashboard@member'}>Dashboard</Link>
                            </li>
                            <li className="option" onClick={() => { logout() }}>
                                <span className="signin-link-btn" style={{ cursor: "pointer" }}>Log out</span>
                            </li>
                        </>
                    ) : (
                        <li className="option" onClick={() => { closeMenu() }}>
                            <Link to='/signin' className="signin-link-btn">Sign In</Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon-toggle" />
                ) : (
                    <MenuIcon className="menu-icon-toggle" />
                )}
            </div>
        </div>
    )
}

export default Header
