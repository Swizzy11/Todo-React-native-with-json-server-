import React, { FC, useState } from 'react'
import { ButtonAddWrapper, Form, FormItem, FormTitle } from './LoginForm.style'
import { Input, Label } from './component/Input'
import { ButtonAdd } from './component/Button'
import { router } from 'expo-router'
import { userAPI } from '../../../../service/UserService'
import { Text } from 'react-native'
import { validator } from '../../../../utils/validator'

const LoginForm:FC = () => {
    const [loginUser, {status}] = userAPI.useLoginMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const authUser = () => {
        const validityEmail = validator('email', email)
        const validityPassword = validator('password', password)

        setError('')

        if(validityEmail !== '' && validityPassword !== '') {
            return setError('Неверный формат логина или пароля')
        }else {
            loginUser(
                {
                    email: email,
                    password: password,
                }     
            )
            
            if(status === 'fulfilled') {
                router.push('/home')
            }else {
                setError(`Неверный логин или пароль`)
            }
        }
    }

    return (
            <Form>
                <FormItem>
                    <FormTitle>Авторизация</FormTitle>
                </FormItem>
                <FormItem>
                    <Label>Логин</Label>
                    <Input 
                        value={email} 
                        onChangeText={setEmail} 
                        placeholder='email'
                    />
                </FormItem>
                <FormItem>
                    <Label>Пароль</Label>
                    <Input 
                        value={password} 
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder='password...'
                    />
                </FormItem>
                <FormItem>
                    <Text style={{color: 'red'}}>
                        {error}
                    </Text>
                </FormItem>
                <FormItem>
                    <ButtonAddWrapper>
                        <ButtonAdd 
                            onPress={() => {
                                authUser()
                            }}
                            title='Войти' 
                        />
                        <Text>или</Text>
                        <ButtonAdd 
                            title='Зарегистрироваться' 
                            onPress={() => router.push('/registration')} 
                        />
                    </ButtonAddWrapper>
                </FormItem>
            </Form>
    )
}


export default LoginForm
