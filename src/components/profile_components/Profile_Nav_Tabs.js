import React, { Component } from 'react';
import '../../styles/profile_styles/profile__tabs__style.scss';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockIcon from '@material-ui/icons/Lock';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import { Link } from 'react-router-dom';

export class Profile_Nav_Tabs extends Component {

    onTabClick = (id) => {
        let x;
        x = document.getElementsByClassName("profile__nav__tabs__tab");
        for(let i = 0; i < x.length; i++){
            x[i].className="profile__nav__tabs__tab"
        }

        x[id].className = "profile__nav__tabs__tab clicked"
    } 

    render() {
        return (
            <nav className="profile__nav__tabs">
                <Link to="/profile/edit" className="profile__nav__tabs__tab" onClick={() => this.onTabClick(0)}>
                    <EditIcon style={{ paddingLeft: '25px' }}/>
                    <p className="profile__nav__tabs__tab__text">Edit profile</p>
                </Link>
                <Link to="/profile/address" className="profile__nav__tabs__tab" onClick={() => this.onTabClick(1)}>
                    <LocalPostOfficeIcon style={{ paddingLeft: '25px' }}/>
                    <p className="profile__nav__tabs__tab__text">Set address</p>
                </Link>
                <button className="profile__nav__tabs__tab" onClick={() => this.onTabClick(2)}>
                    <ShoppingCartIcon style={{ paddingLeft: '25px' }}/>
                    <p className="profile__nav__tabs__tab__text">Orders</p>
                </button>
                <button className="profile__nav__tabs__tab" onClick={() => this.onTabClick(3)}>
                    <LockIcon style={{ paddingLeft: '25px' }}/>
                    <p className="profile__nav__tabs__tab__text">Password & security</p>
                </button>
            </nav>
        )
    }
}

export default Profile_Nav_Tabs
