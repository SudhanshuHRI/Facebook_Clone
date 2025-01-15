import "../styles/createAccount.css"
const CreateAccount = () => {
    return (<>
        <div className="CreateAccountMainContainer">
            <div className="w-25 boxContainer">
                <div className="text-center">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" width={300} />
                </div>
                <div className="formContainer pt-3">
                    <div className="text-center">
                        <h3>Create a new account</h3>
                    </div>
                    <div className="text-center">
                        <p>It's quick and easy.</p>
                    </div>
                    <hr />
                    <div className="container mt-2">
                        <form class="row g-3">
                            <div class="col-md-6">

                                <input type="text" class="form-control" id="inputEmail4" placeholder="First name" />
                            </div>
                            <div class="col-md-6">

                                <input type="text" class="form-control" id="inputPassword4" placeholder="Surname" />
                            </div>
                            <div class="col-12 mt-2">
                                <label for="inputAddress" class="form-label staticLabels">Date of Birth</label>
                                <div className="d-flex justify-content-between">
                                    <select id="inputState" class="form-select dobSelectBox">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <select id="inputState" class="form-select dobSelectBox">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <select id="inputState" class="form-select dobSelectBox">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-12 mt-2">
                                <label for="inputAddress2" class="form-label staticLabels">Gender</label>
                                <div className="genderContainer">
                                    <div class=" genderRadioBox">
                                        <label class="form-check-label" for="gridCheck">
                                            Female
                                        </label>
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    </div>
                                    <div class=" genderRadioBox">

                                        <label class="form-check-label" for="gridCheck">
                                            Male
                                        </label>
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    </div>
                                    <div class=" genderRadioBox">

                                        <label class="form-check-label" for="gridCheck">
                                            Custom
                                        </label>
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                                    </div>
                                </div>

                                <input type="text" class="form-control mobileNoInput" id="inputCity" placeholder="Mobile no" />
                                <input type="text" class="form-control passwordInput" id="inputCity" placeholder="new password" />
                                <div className="staticText">
                                    <p >People who use our service may have uploaded your contact information to Faceboek. <span className="linkText">Learn more.</span></p>
                                    <p>By clicking Sign Up, you agree to our <span className="linkText">Tearms, Privacy Policy</span> and <span className="linkText">Cookies Policy.</span>You may recieve SMS notifications from us and can opt at any time.</p>
                                </div>
                                <div className="buttonContainer text-center">
                                    <div className="text-center ">
                                        <button className="btn btn-success w-50">Sign Up</button>
                                    </div>

                                    <a href="/">Already have an account ?</a>
                                </div>

                            </div>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default CreateAccount;