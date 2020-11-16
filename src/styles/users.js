import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`

export const Card = styled.div`
    width: 18rem;
    background-color: #eee;
    height: 350px;
    border-radius: 4px;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`

export const ProfilePic = styled.img`
    height: 8rem;
`

export const ProfileInfo = styled.div`
    padding: 0 0 10px 10px;
    p {
        font-size: 15px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: -3px;
    }

    small {
        font-size: 12px;
    }
`