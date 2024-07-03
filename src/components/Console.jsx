import React, {useState} from 'react';
import styled from 'styled-components';
import {Flex} from "./Flex";
import {Line} from "./Line";



const StyledConsole = styled.textarea`
    width: 100%;
    height:70vh;
    background-color: black;
    color: ${({color}) => color || "white"};
    resize: none;
    &:focus{
        outline: none;
    };
    
    border: none;
    font-size: 22px;
    
`




export  const Console = ({color,...props}) => {
    const[lines,setLines] = useState(["C/Users/Lincode>"]);

    const onKeyPress = e => {
        if(e.charCode === 13){
            setLines([...lines,"C/Users/Lincode>"]);
        }
    }


    return(
        <Flex>
            <Flex direction="column" margin="0 10px">
                {
                    lines.map((line) => {
                        return<Line color={"green"}>{line}</Line>
                    })
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} {...props} color={"green"} />
        </Flex>
    )
}
