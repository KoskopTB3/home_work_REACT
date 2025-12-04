import smile from "../../assets/img/task_1_img/smile.jpg";
import { useState } from "react";
import styles from "./SignIn.module.css";

function SignIn({ userData }) {
  const [loginInp, setLoginInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  const [isSucsses, setIsSucsess] = useState(null);
  const [checkedLogin, setCheckedLogin] = useState("");

  function checkDataLogin() {
    setCheckedLogin(loginInp);
    if (loginInp === userData.login && passwordInp === userData.password)
      setIsSucsess(true);
    else setIsSucsess(false);
  }

  let result = null;
  if (isSucsses) {
    result = (
      <div className={`${styles.result} ${styles.success}`}>
        <img src={smile} alt="success" className={styles.smile} />
      </div>
    );
  } else if (isSucsses === false) {
    const isLoginCorrect = checkedLogin === userData.login;
    const errorClass = isLoginCorrect ? styles.errorBlue : styles.errorRed;
    result = (
      <div className={`${styles.result} ${errorClass}`}>
        Не вірний логін або пароль
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Вхід</h3>

      <div className={styles.row}>
        <label className={styles.label}>
          Логін
          <input
            className={styles.input}
            type="text"
            value={loginInp}
            onChange={(e) => setLoginInp(e.target.value)}
            placeholder="Введіть логін"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Пароль
          <input
            className={styles.input}
            type="password"
            value={passwordInp}
            onChange={(e) => setPasswordInp(e.target.value)}
            placeholder="Введіть пароль"
          />
        </label>
      </div>

      <div className={styles.row}>
        <button className={styles.button} onClick={checkDataLogin}>
          Увійти
        </button>
      </div>

      {result}
    </div>
  );
}

export default SignIn;
