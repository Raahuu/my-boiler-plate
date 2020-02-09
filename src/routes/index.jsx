import React from "react";
import { Route, Switch } from "react-router-dom";

import Test from "../containers/Test";

const AllRoutes = () => {
  return (
    <Switch>
      <Route path="/test" exact component={Test} />
      <Route path="/" render={() => <h2>Boiler plate Home</h2>} />
    </Switch>
  );
};

export default AllRoutes;
