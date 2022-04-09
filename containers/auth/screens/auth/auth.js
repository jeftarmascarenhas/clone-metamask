import styles from "./auth.module.css";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <div className="text-center">
        <h1>Welcome Back</h1>
        <h2>The decentralized web awaits</h2>
      </div>
      <form className={styles["auth-box"]}>
        <p>
          <input placeholder="Password" />
        </p>
        <button className="primary">Unlock</button>
      </form>
      <div className={styles["auth-box"]}>
        <button>+ Create account</button>
        <button> {`>`} Import account</button>
      </div>
    </div>
  );
};

export default Auth;
