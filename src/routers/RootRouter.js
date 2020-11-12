import React from 'react';
import {Switch, Route, } from 'react-router-dom';

import One from '../pages/One';
import Two from '../pages/Two';
import Three from '../pages/Three';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';



function RootRouter() {
    return(
        <Switch>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route path='/1'>
                <One />
            </Route>
            <Route path='/2'>
                <Two />
            </Route>
            <Route path='/3'>
                <Three />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default RootRouter;