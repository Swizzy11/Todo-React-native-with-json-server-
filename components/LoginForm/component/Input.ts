import styled from "styled-components/native";

const styles = {
    gray: '#E1E1E1',
    defaultBorderColor: '#CDCACE',
    defaultBorderWidth: '2px',
    defaultPadding: '5px'
}

export const Input = styled.TextInput`
    width: 80%;
    height: 35px;
    padding: ${styles.defaultPadding};
    background-color: ${styles.gray};
    border-bottom-width: ${styles.defaultBorderWidth};
    border-bottom-color: ${styles.defaultBorderColor};
`
export const Label = styled.Text`
    margin-bottom: 10px;
    width: 80%;
    font-size: 15px;
    font-weight: 500;
`
