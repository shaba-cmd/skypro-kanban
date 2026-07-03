import AuthForm from "../AuthForm/AuthForm"

const SignIn = ({ handleAuth }) => {
  return <AuthForm handleAuth={handleAuth} isSignUp={false}/>
}

export default SignIn