import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <main className="loginPage centerMain">
            <form className="form-horizontal">
                <div className="container containerLogin">
                    <div className="form-group">
                        <div className="col-sm-10">
                            <label for="UserName">User Name</label>
                            <input type="text" class="form-control" name="UserName" id="UserName" placeholder="UserName" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="col-sm-10">
                            <label for="password">Password</label>
                            <input type="text" class="form-control" name="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10"> <Link to="/"
                            className="btn btn-sm login roundButton" aria-label="Log in Button">Log in</Link></div>
                    </div>
                </div>
            </form>
        </main>
    )
}