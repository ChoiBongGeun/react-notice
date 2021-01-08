import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import main from "../content/main";
import mycontent from "../content/mycontent";
import read from "../content/read";
import add from "../content/add";
import update from "../content/update";
import login from "../user/login";
import adduser from "../user/adduser";
import forgot from "../user/forgot";
import userinfo from "../user/userinfo";
import check from "../user/check";
import changepw from "../user/changepw";



const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component= {login} />
            <Route exact path="/adduser" component= {adduser} />
            <Route exact path="/forgot" component= {forgot} />
            <Route exact path="/userinfo" component= {userinfo} />
            <Route exact path="/check" component= {check} />
            <Route path="/mycontent" component= {mycontent} />
            <Route exact path="/main" component={main} />
            <Route path="/read" component={read} />
            <Route exact path="/add" component={add} />
            <Route path="/update" component={update} />
            <Route path="/changepw" component={changepw} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;