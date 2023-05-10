const useValidate = (props) => {
  const setError = props.setError;
  const username = props.username;
  const password = props.password;
  const confirmedPassword = props.confirmedPassword;
  const isLogin = props.isLogin;

  function validate() {
    if (!username || !password || (!confirmedPassword && !isLogin)) {
      setError("Fields cannot be empty.");
      return false;
    } else if (password.includes(username)) {
      setError("Password cannot include your username.");
      return false;
    } else if (!isLogin && confirmedPassword !== password) {
      setError("Passwords are not the same.");
      return false;
    } else {
      return true;
    }
  }
  return validate;
};

export default useValidate;
