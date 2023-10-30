import React, { FC, useState } from 'react'
import { ButtonAddWrapper, Form, FormItem, FormTitle } from './RegistrationForm.style'
import { ErrorLabel } from './component/Input'
import { Input, Label } from './component/Input'
import { ButtonAdd } from './component/Button'
import { userAPI } from '../../service/UserService'
import { IUser } from '../../types/user'
import { IPost } from '../../types/post'
import { router } from 'expo-router'
import { Text } from 'react-native'
import { validator } from '../../utils/validator'

const RegistrationForm:FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [secondname, setSecondname] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [createUser] = userAPI.useCreateUserMutation()

    const handleCreate = () => {
        const validityEmail = validator('email', email)
        const validityPassword = validator('password', password)

        if(validityEmail === '' && validityPassword === '') {
            createUser({
                email: email,
                password: password,
                username: username,
                secondname: secondname,
                posts: [] as IPost[]
            } as IUser)
            .then(() => router.push('/home'))
            .catch(() => setPasswordError(`Неверный логин или пароль`))

        }else {
            setEmailError(validityEmail!)
            setPasswordError(validityPassword!)
        }
        
    }

    return (
        <Form>
            <FormItem>
                <FormTitle>Регистрация</FormTitle>
            </FormItem>
            <FormItem>
                <Label>Email</Label>
                <Input 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholder='email'
                />
                <ErrorLabel>
                    {emailError}
                </ErrorLabel>
            </FormItem>
            <FormItem>
                <Label>Имя</Label>
                <Input 
                    value={username} 
                    onChangeText={setUsername} 
                    placeholder='username'
                />
                <Text>
                    
                </Text>
            </FormItem>
            <FormItem>
                <Label>Фамилия</Label>
                <Input 
                    value={secondname} 
                    onChangeText={setSecondname} 
                    placeholder='secondname'
                />
                <Text>
                    
                </Text>
            </FormItem>
            <FormItem>
                <Label>Пароль</Label>
                <Input 
                    value={password} 
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder='password'
                />
                <ErrorLabel>
                    {passwordError}
                </ErrorLabel>
            </FormItem>
            <FormItem>
                <ButtonAddWrapper>
                    <ButtonAdd 
                        onPress={handleCreate}
                        title='Зарегистрироваться' 
                    />
                    <Text>или</Text>
                    <ButtonAdd 
                        title='Войти' 
                        onPress={() => router.push('/')} 
                    />
                </ButtonAddWrapper>
            </FormItem>
        </Form>
  )
}


export default RegistrationForm
