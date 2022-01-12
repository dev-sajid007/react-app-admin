import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card shadow-sm my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="login-form">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Register</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group" >
                                                <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter Full Name" />
                                                <small className="text-danger" v-if="errors.name"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address" v-model="form.email" />
                                                <small className="text-danger" v-if="errors.email"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password" />
                                                <small className="text-danger" v-if="errors.password"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPasswordRepeat"
                                                    placeholder="Repeat Password" v-model="form.password_confirmation" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="font-weight-bold small" to="/">Already have an account?</Link>
                                        </div>
                                        <div className="text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}