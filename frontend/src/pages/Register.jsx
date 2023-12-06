import AuthForm from '../pages/Authform';

// Register Component
export default function Register() {
  return <AuthForm type="register" onSuccessRedirect="/login" />;}