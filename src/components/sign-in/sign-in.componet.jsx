import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handelChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already habve an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="emmail"
            name="email"
            handelChange={this.handelChange}
            value={this.state.email}
            label="email"
            required
          />{" "}
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handelChange={this.handelChange}
            label="password"
            required
          />
          <CustomButton type="submit">Sign IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
