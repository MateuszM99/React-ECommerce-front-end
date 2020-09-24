import React, { Component } from 'react'
import Profile_Header from './Profile_Header'
import Profile_Nav_Tabs from './Profile_Nav_Tabs'
import Profile_Edit from './Profile_Edit'
import Profile_Address from './Profile_Address'
import '../../styles/profile_styles/profile__view__main.scss'
import { Route } from 'react-router-dom'

export class Profile_View extends Component {
    render() {
        return (
            <div className="profile__view__main">
                <Profile_Header/>
                <div className="profile__view__main__tab">
                <Profile_Nav_Tabs/>
                <Route path="/profile/:profileId/edit">
                <Profile_Edit/>
                </Route>
                <Route path="/profile/:profileId/address">
                <Profile_Address/>
                </Route>
                </div>
            </div>
        )
    }
}

export default Profile_View
