import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const login = () => {
  document.location.href = "/"
}
const mycontent = () => {
  document.location.href = "/mycontent"
}
const main = () => {
  document.location.href = "/main"
}
const logout = () => {
  window.sessionStorage.clear();
  document.location.href = "/"
}
const myinfo = () => {
  document.location.href = "/check"
}
const NavBar = () => {
  if(!window.sessionStorage.getItem("id")){
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={style}>
            content
          </Typography>
          <Button color="inherit" onClick={login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
  else{
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={style}>
          <Button color="inherit" onClick={main}>게시판</Button>
          </Typography>
          <Button color="inherit" onClick={mycontent}>내글</Button>
          <Button color="inherit" onClick={myinfo}>{window.sessionStorage.getItem("username")}</Button>
          <Button color="inherit" onClick={logout}>logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}

const style = {
  flexGrow: 1
}

export default NavBar;