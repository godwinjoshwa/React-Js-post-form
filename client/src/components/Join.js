import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Add_users } from '../actions';

class Join extends Component {
    state = {

        firstname: '',
        lastname: '',
        dob: '',
        gender: '',
        job: '',
    }

    handleSubmit = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmit = event => {
        event.preventDefault();
        this.props.Add_users(this.state);
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center form-container">

                    <form className="form" onSubmit={this.formSubmit}>
                        <h1 className="text-center heading">KRYPTON HACKERS ID CARD</h1>

                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                onChange={this.handleSubmit}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                onChange={this.handleSubmit}
                                className="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                onChange={this.handleSubmit}
                                name="dob"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <div className="form-radio">
                                <label className="radio-inline">
                                    <input type="radio"
                                        name="gender"
                                        onChange={this.handleSubmit}
                                        value="Male" />&nbsp;
                                    Male
                                </label>
                                <label className="radio-inline">
                                    <input type="radio"
                                        name="gender"
                                        onChange={this.handleSubmit}
                                        value="Female" />&nbsp;
                                    Female
                                </label>
                            </div>

                        </div>

                        <div class="form-group">
                            <label>Select your Job</label>
                            <select className="custom-select form-control"
                                onChange={this.handleSubmit} name="job">
                                <option value="" selected disabled>Choose...</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Web Developer" >Web Developer</option>
                                <option value="Ethical Hacker" >Ethical Hacker</option>
                                <option value="Ethical Hacker">Mobile App Developer</option>
                            </select>
                    
                        </div>
                        <div class="form-group">

                            <button type="submit" className="btn btn-success btn-lg btn-block">submit</button>

                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

export default connect(null, { Add_users })(Join)
