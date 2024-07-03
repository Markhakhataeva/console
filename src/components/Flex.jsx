import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items:  ${props => props.align || "scretch"};
    justify-content:  ${props => props.just || "scretch"};
    margin: ${({margin}) => margin || "0"} ;
    
`

export const Flex = (props) => {
    return <FlexContainer  {...props}/>
}
