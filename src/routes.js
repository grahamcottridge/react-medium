import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home.component";
import Article from "./pages/article/Article.component";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" conponent={Home} exact />
      <Route path="/articles/:slug" conponent={Article} />
    </Switch>
  );
};
export default Routes;
