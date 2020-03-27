import React from 'react';
import Home from './view/containers/Home';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

//https://reacttraining.com/react-router/web/example/custom-link
function Router() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {document.title = 'mewc'}
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div >
    );
}


export default Router;
