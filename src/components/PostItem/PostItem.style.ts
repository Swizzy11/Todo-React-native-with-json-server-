import styled from "styled-components/native";

export const PostView = styled.View`
    width: 100%;
    min-height: 35px;
    max-height: 45%;
    margin-top: 2%;
    margin-bottom: 4%;
`
export const Container = styled.View`
    width: 100%;
    padding-right: 5%;
    padding-left: 5%;
`
export const ToachContainer = styled.TouchableHighlight`
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: gray; 
`
export const PostTitle = styled.View`
    height: 30px;
    width: 100%;
    justify-content: center;
`
export const PostContentContainer = styled.View`
    margin: 2%;
    margin-bottom: 5%;
    margin-left: 0;
    width: 98%;
    justify-content: center;
    align-items: center;
`
export const PostContent = styled.ScrollView`
    width: 90%;
`
export const ButtonWrapper = styled.View`
    width: 100%;
    height: 30px;
    flex-direction: column;
    justify-content: flex-end;
`
