import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cart from './components/Home/Cart';
import Home from './components/Home/Home';
import Navbar from './components/Misc/Navbar';

function Router(){
    return(
        <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                </Switch>
        </BrowserRouter>
    )
}

export default Router;