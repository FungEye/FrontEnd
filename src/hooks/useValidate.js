const useValidate = (props) => {
  const setError = props.setError;
  const username = props.username;
  const password = props.password;
  const confirmedPassword = props.confirmedPassword;
  const isLogin = props.isLogin;

  function validate() {
    if (
      username === "" ||
      password === "" ||
      (confirmedPassword === "" && !isLogin)
    ) {
      setError("Fields cannot be empty.");
    } else if (password.includes(username)) {
      setError("Password cannot include your username.");
    } else if (!isLogin && confirmedPassword !== password) {
      setError("Passwords are not the same.");
    }
  }
  return validate;
};

export default useValidate;
