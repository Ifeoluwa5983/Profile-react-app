import React, {useEffect, useState} from 'react'
import { getUsers } from '../routes/api'
import { Container, Card, ProfilePic, ProfileInfo } from "../styles/users"
import User from './User'

export default function Users(props) {
    const [myData, setMyData] = useState([])
    
    useEffect(() => {
        fetch(getUsers)
            .then(res=>res.json())
            .then(data=> setMyData(data))
    }, [])

    const filteredData = myData.filter(user=>{
        return user.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
    })

    const userImage = `https://picsum.photos/id/33/200/200`
    return (
        <Container>
            {/* {filteredData} */}
            {
                filteredData.map((data,index)=>{
                    return(
                        <User image={`https://picsum.photos/id/${index+32}/200/300`} userObj={data} />
                    )
                })
                }
            
        </Container>
    )
}
