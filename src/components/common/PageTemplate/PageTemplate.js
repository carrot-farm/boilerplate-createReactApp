import React from "react";
import classNames from "classnames/bind";

import styles from "./PageTemplate.scss";
// import HeaderContainer from 'containers/common/HeaderContainer';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  return (
    <div className={cx("page-template-root")}>
      {/* <HeaderContainer /> */}
      <main className={[cx("main")]}>{children}</main>
      <footer className={cx("footer")} />
    </div>
  );
};

export default PageTemplate;
