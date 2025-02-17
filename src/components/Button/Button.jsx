import styles from "./Button.module.scss";
function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
