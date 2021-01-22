import React from "react";

function LoginPage(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogout,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Sign in</button>
                <p>
                  Don't have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>
                  Already have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
