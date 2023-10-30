import styled from "styled-components/native";


export const HeaderContainer = styled.View`
    z-index: 2;
    height: 50px;
    width: 100%;
    background-color: #2294F2;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`
export const HeaderImg = styled.TouchableHighlight`
    width: 14%;
    height: 85%;
    margin-left: 45%;
    border-radius: 5px;
    overflow: hidden;
    border-width: 2px;
    border-color: #E1E1E1;
`
export const Img = styled.Image`
    width: 100%;
    height: 100%;
`

export const HeaderName = styled.Text`
    color: white;
    font-size: 15px;
    margin-left: 5%;
`
