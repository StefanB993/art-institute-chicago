import { Outlet, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <div className={styles.appLayout}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
