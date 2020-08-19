import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'


class Members extends Component {


    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        const { getData } = this.props
        return (
            <div className="container"><br/>
                <h1 className="heading">WE ARE KRYPTON HACKERS</h1>
                {getData.users.map(user => (
                    <div className="d-flex">
                        <div className="card">
                        
                            <div className="card-body">
                                <u>
                            <h5 className="card-title">KRYPTON HACKERS ID CARD</h5>
                            </u>

                            <div class="d-flex flex-wrap">
                            <p class="card-text">Name:</p>
                            <p class="card-content">{user.firstname} {user.lastname}</p>
                            </div>

                            <div className="d-flex flex-wrap">
                            <p className="card-text">Date of Birth:</p>
                            <p className="card-content">{user.dob}</p>
                            </div>
                            <div className="d-flex flex-wrap">
                            <p className="card-text">Work:</p>
                            <p className="card-content">{user.job}</p>
                            </div>
                              
                            <div className="d-flex flex-wrap">
                            <p className="card-text">ID:</p>
                            <p className="card-content">{user._id}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getData: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members)

