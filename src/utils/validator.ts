

export const validator = (name: string, value:string) => {
    const emailError = 'Email должен содержать @';
    const passwordError = 'Пароль должен содержать 8 символов, а так же заглавную и строчную буквы'
    
    switch(name) {
        case 'email':
            return (validateEmail(value)) ? '' : emailError 
        case 'password':
            return (validatePassword(value)) ? '' : passwordError
    }
        
}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

const validatePassword = (password: string) => {
    return String(password)
      .match(
        /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/
      );
}
