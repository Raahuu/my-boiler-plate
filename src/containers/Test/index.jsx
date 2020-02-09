import React from "react";
import { connect } from "react-redux";

import styles from "./test.module.css";
import i18n from "../../constants/strings";

const Test = props => {
  return (
    <>
      <h1 className={styles.textCenter}>{i18n.t("titles.heading")}</h1>
      <h1 onClick={() => props.clicked(5)} className={styles.pointer}>
        Click me to update count
      </h1>
      <h3>Count: {props.count}</h3>
    </>
  );
};

const mapStateToProps = state => ({
  count: state.test.data
});

const mapDispatchToProps = dispatch => ({
  clicked: payload => dispatch({ type: "TEST", payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
