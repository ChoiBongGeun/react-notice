import React from "react"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import login from '../Pages/login'



const Routers = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component= {login} />
                    <Redirect  path ="*" to ="/" />

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routers;
