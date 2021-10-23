import React from 'react'
import './Home.css'
// import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">
            {/* <h1>This is home page</h1> */}
            <div className="home_header">
                <div className="home_header_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_header_right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" width="272" height="92" alt="" srcset="" />
                <div className="home_inputContainer">
                    <Search hideButtons/>
                </div>
            </div>
        </div>
    )
}

export default Home
