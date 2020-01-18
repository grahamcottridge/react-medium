import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home.component";
import Article from "./pages/article/Article.component";
import Authentication from "./pages/authentication/Authentication.component";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/signin" component={Authentication} />
    </Switch>
  );
};
export default Routes;
