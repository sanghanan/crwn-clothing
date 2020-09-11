import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';



class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        }
    }
    
    handleSubmit= async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            console.log("User signed in successfully!")
        }catch(err){
            console.log("Problem while signing in: ",err);
        }
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" label="Email" type="email" value={this.state.email} required handleChange={this.handleChange}/>
                <FormInput name="password" label="Password" type="password" value={this.state.password} required handleChange={this.handleChange}/>
                
                <div className='buttons'>
                <CustomButton type="button">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
                
            </form>
            </div>
        );
    }
}

export default SignIn;