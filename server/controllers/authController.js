async function Login(req,res) {
    return res.json({message:"login successfull"})
}
async function Register(req,res) {
    return res.json({message:"register successfull"})
}
async function ForgotPass(req,res) {
    return res.json({message:"forgotPass successfull"})
}

export default {
    Login,
    Register,
    ForgotPass
}