import React from "react";
import './Register.css'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: "",
            notfilled: false,
            notMatching: false,
            notUnique: false
        }
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onConfirmChange = (event) => {
        this.setState({confirm: event.target.value});
    }

    filledCredentials = () => {
        const {username, email, password, confirm} = this.state;
        if (!email.length || !password.length || !username.length || !confirm.length) return false;
        return true;
    }

    matchingPasswords = () => {
        const {password, confirm} = this.state;
        if (password !== confirm) return false;
        return true;
    }

    onSubmit = async () => {

        if (!this.filledCredentials()) {
            return this.setState({notfilled: true});
        }
        if (!this.matchingPasswords()) {
            return this.setState({
                notfilled: false,
                notMatching: true
            });
        }

        try {
            const request = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    confirm: this.state.confirm
                })
            })
            const data = await request.json();
            if (data === "taken") {
                return this.setState({
                    notfilled: false,
                    notMatching: false,
                    notUnique: true
                })
            }
            this.props.loadUser(data)
            return this.props.routeChange("dashboard")

        } catch (err) {
            console.log(err);
        }
    }

    onKeyPress = (event) => {
        if (event.code === "Enter") {
            this.onSubmit();
        }
    }

    render() {
        return (
            <div className="register">
            <article className="br2 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <main className="pa4 center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onUsernameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text"
                        name="username"  
                        id="username"
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onPasswordChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="confirm">Confirm</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onConfirmChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="confirm"  
                        id="confirm"
                    />
                </div>
                {this.state.notfilled
                            ?<div className="err-msg pb3 f6 red ">
                                Please ensure all fields are filled
                            </div>
                            :(this.state.notMatching
                                ?<div className="err-msg pb3 f6 red ">
                                    Please ensure passwords are matching
                                </div>
                                :(this.state.notUnique
                                    ?<div className="err-msg pb3 f6 red ">
                                        This email address is already in use.  Please use another email address
                                    </div>
                                    :<div></div>
                                )
                            )
                }
                </fieldset>
                <div className="">
                <input 
                    onClick={this.onSubmit}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="button" 
                    value="Register"
                />
                </div>
                <div className="lh-copy mt3">
                <a 
                onClick={()=> this.props.routeChange("signin")}
                href="#0" 
                className="f6 link dim black db">Go Back</a>
                </div>
            </main>
            </article>
            </div>
        )
    }
}

export default Register;