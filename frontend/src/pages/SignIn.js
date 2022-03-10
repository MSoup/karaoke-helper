import './Main.css';

function SignIn() {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="text" />
      <button>Login</button>
      <p>No account? Click here to register.</p>
    </div>
  );
}
  
export default SignIn;