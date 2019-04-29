import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as baseActions from "store/modules/base";
// import Trade from "component/coinTrade/trade";

class TradeContainer extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <div>test</div>;
  }
}

export default connect(
  state => ({
    isLogged: state.base.get("isLogged")
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(TradeContainer);
