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
export const Textarea = styled.TextInput`
    width: 80%;
    padding: ${styles.defaultPadding};
    height: 70px;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    background-color: ${styles.gray};
    border-bottom-width: ${styles.defaultBorderWidth};
    border-bottom-color: ${styles.defaultBorderColor};
`
