import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import RouteList from './RouteList';

const Routes = () => {
    return (
       <>
        <Router>
            <Switch>
                { RouteList.map((r,index)=><Route key={index} exact path={r.path} component={r.component} />)}
            </Switch>
        </Router>
       </>
        );
}

export default Routes;