import React from 'react';
import './styles.scss';
import Button from './../Forms/Button';

const Signin = props => {
    return (
        <div className ="signin">
            <div className="wrap">
                <h2>Login</h2>

                <div className="formWrap">
                    <form>
                        <div className="socialSignin">
                            <div className="row">
                                <Button>
                                    Sign In With Google
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Signin;