import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState( {email: '', password: ''})
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState ({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Sign-in with your user and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        label='Email' 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required />
                    <FormInput 
                        handleChange={this.handleChange} 
                        label='Password' 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>sign-in</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>sign-in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
