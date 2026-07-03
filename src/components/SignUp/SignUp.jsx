import AuthForm from "../AuthForm/AuthForm"

const SignUp = ({ handleAuth }) => {
  return <AuthForm handleAuth={handleAuth} isSignUp={true}/>
}

export default SignUp