import React from "react";
import './Signin.css'

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "rent",
            password: "",
            notfilled: false,
            wrongCreds: false
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    filledCredentials = () => {
        const {email, password} = this.state;
        if (!email.length || !password.length) {
            return false;
        } else return true;
    }

    onSubmit = async () => {
        if (!this.filledCredentials()) {
            console.log("failed")
            return this.setState({
                notfilled: true
            })
        }
        try {
            const request = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            const data = await request.json();
            if (data.email) {
                this.props.signinChange(true);
                this.props.loadUser(data)
                return this.props.routeChange("dashboard")
            } else {
                return this.setState({
                    notfilled: false,
                    wrongCreds: true
                })
            }
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
            <div className="signin">
            <article className="br2 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <main className="pa4 center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
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
                {this.state.notfilled
                    ?<div className="err-msg pb3 f6 red ">
                        Please ensure all fields are filled
                    </div>
                    :(this.state.wrongCreds
                        ?<div className="err-msg pb3 f6 red ">
                            Wrong Credentials.  Please try again
                        </div>
                        :<div></div>
                    )
                }
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </fieldset>
                <div className="">
                <input 
                    onClick={this.onSubmit}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="button" 
                    value="Sign in"
                />
                </div>
                <div className="lh-copy mt3">
                <a 
                onClick={()=> this.props.routeChange("register")}
                href="#0" 
                className="f6 link dim black db">Register</a>
                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                </div>
            </main>
            </article>
            </div>
        )
    }
    
}

export default Signin;