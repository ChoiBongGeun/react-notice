import React from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class login extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          id:'',
          password:'',
          message: null
        }
      }
      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    
    
      forgotuser = () => {
        this.props.history.push('/forgot');
      }
    
      adduser = () => {
        this.props.history.push('/adduser');
      }
      loginuser = (e) => {
        e.preventDefault();
    
        let user = {
            id: this.state.id,
            password: this.state.password
            
        }
        ApiService.loginuser(user)
        .then( res => {
            if(res.data=="fail"){
                alert("아이디 또는 비번이 틀렸습니다")
              }
            else{
            window.sessionStorage.setItem('id', res.data.id)
            window.sessionStorage.setItem('username', res.data.username)
            alert("환영합니다"+ window.sessionStorage.getItem('id'))
            document.location.href = "/main"
            }
        })
        .catch( err => {
          console.log('saveUser() 에러', err);
        });
    
      }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="UserID" type="text" name="id" value={this.state.id} fullWidth autoFocus required onChange={this.onChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="UserPassword" type="password"name="password" value={this.state.password} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary" onClick={this.forgotuser}>Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.adduser}>회원가입</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.loginuser}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(login);