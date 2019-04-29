import React from "react";
import PageTemplate from "components/common/PageTemplate";
import TradeContainer from "containers/coninTrade/TradeContainer";

const TradePage = ({ match }) => {
  return (
    <div className="container">
      <PageTemplate>
        <TradeContainer />
      </PageTemplate>
    </div>
  );
};

export default TradePage;
