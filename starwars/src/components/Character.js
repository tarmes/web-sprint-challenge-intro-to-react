// Write your Character component here
import React from 'react';

export default function Character(props){
    const {characterObj} = props

    // const StyledCharacter = styled.div`
    
    // h1{
    //     color: ${props => {
    //     const { theme } = props;
    //     
    // }};
    // }
    
    // `

    return(
        <Character>
        <h1>Name: {characterObj.name} Height: {characterObj.height} Mass: {characterObj.mass}</h1>
        </Character>
    )
}