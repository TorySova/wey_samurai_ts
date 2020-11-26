import React from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormControll/FormsControls'
import {login} from '../../redux/authReducer'
import { RootState } from '../../redux/redux-store'
import { Redirect } from 'react-router-dom'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} type='checkbox' name={'rememberMe'} /> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state: RootState) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)