import styles from "./Error.module.scss";
import { useRouteError } from "react-router-dom";
function Error() {
  const { message } = useRouteError();
  return (
    <div className={styles.error}>
      <h2>{message}</h2>
    </div>
  );
}

export default Error;
