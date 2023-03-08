import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    errorFirstname: false,
    errorLastname: false,
    renderForm: true,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({
        errorFirstname: true,
        errorLastname: true,
      })
    } else if (firstname === '') {
      this.setState({
        errorFirstname: true,
      })
    } else if (lastname === '') {
      this.setState({
        errorLastname: true,
      })
    } else {
      this.setState({renderForm: false})
    }
  }

  renderForm = () => {
    const {errorFirstname, errorLastname} = this.state

    return (
      <form className="registration-form" onSubmit={this.submitForm}>
        {this.renderFirstname()}
        {errorFirstname && <p className="error-msg">Required</p>}
        {this.renderLastname()}
        {errorLastname && <p className="error-msg">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onClickAnotherResponse = () => {
    this.setState({renderForm: true, firstname: '', lastname: ''})
  }

  renderSuccessfulSubmit = () => (
    <div className="successful-submit-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="succefull-img"
      />
      <p className="sucessfull-description">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onChangefirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurFirstname = event => {
    if (event.target.value === '') {
      this.setState({errorFirstname: true})
    } else {
      this.setState({errorFirstname: false})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({errorLastname: true})
    } else {
      this.setState({errorLastname: false})
    }
  }

  renderFirstname = () => {
    const {firstname, errorFirstname} = this.state
    const blurErrorInput = errorFirstname ? 'blurInput' : ''

    return (
      <div className="input-container">
        <label htmlFor="firstname" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          className={`input-box ${blurErrorInput}`}
          onChange={this.onChangefirstname}
          placeholder="First name"
          onBlur={this.onBlurFirstname}
        />
      </div>
    )
  }

  renderLastname = () => {
    const {lastname} = this.state

    return (
      <div className="input-container">
        <label htmlFor="lastname" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          className="input-box"
          onChange={this.onChangeLastname}
          placeholder="Last name"
          onBlur={this.onBlurLastname}
        />
      </div>
    )
  }

  render() {
    const {renderForm} = this.state

    return (
      <div className="app-container">
        <h1 className="registration-heading">Registration</h1>
        {renderForm ? this.renderForm() : this.renderSuccessfulSubmit()}
      </div>
    )
  }
}

export default RegistrationForm
