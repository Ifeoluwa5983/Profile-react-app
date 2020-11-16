import React from 'react'
import { Card, ProfileInfo, ProfilePic } from '../styles/users'

export default function User(props) {
    // const {name,username,email,phone,website} = props.userObj
    return (
            <Card>
                {/* {console.log(props)} */}
                <ProfilePic src={props.image} alt="profile pic" />
                <ProfileInfo>
                    <p> {props.userObj.name} </p>
                    <small>Full Name</small>
                    <p> {props.userObj.username} </p>
                    <small>Username</small>
                    <p> {props.userObj.email} </p>
                    <small>Email address</small>
                    <p> {props.userObj.phone} </p>
                    <small>Phone</small>
                    <p> {props.userObj.website} </p>
                    <small>Website</small>
                </ProfileInfo>
                
            </Card>
    )
}
