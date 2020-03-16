import React, { useEffect } from "react";
import Psulogin from "./components/PsuLogin";
import { Switch, Route, Link } from 'react-router-dom'
import Bears from './components/Bears'


function mains(props) {
  // useEffect(() => {
  //   props.history.push("/api/")
  // }, [])
  return (
    <>
      <Link to="/api/" component={Psulogin} ></Link>
      123
    </>
  )
}
export default () => {



  return (
    <div>
      <Switch>
        <Route exact path="/" component={mains} />
        <Route exact path="/api/" component={Psulogin} />
        <Route path="/api/bears" component={Bears} />
      </Switch>
    </div>
  );
};
