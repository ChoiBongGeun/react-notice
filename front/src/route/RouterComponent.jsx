import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import main from "../content/main";
import read from "../content/read";
import add from "../content/add";
import update from "../content/update";
const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={main} />
            <Route path="/read" component={read} />
            <Route exact path="/add" component={add} />
            <Route path="/update" component={update} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;