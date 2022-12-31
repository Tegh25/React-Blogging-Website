import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/React-Blogging-Website/">Home</Link>
                </li>
                <li>
                    <Link to="/React-Blogging-Website/about">About</Link>
                </li>
                <li>
                    <Link to="/React-Blogging-Website/articles">Articles</Link>
                </li>
            </ul>
            <div className="nav-right">
                {user 
                    ? <button onClick={() => {
                        signOut(getAuth());
                    }}>Logout</button>
                    : <button onClick={() => {
                        navigate('/React-Blogging-Website/login');
                    }}>Login</button>}
            </div>
        </nav>
    );
}

export default NavBar;