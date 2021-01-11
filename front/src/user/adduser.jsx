import React,{Component} from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Face, Fingerprint,Email,AccountCircle} from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class adduser extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          id:'',
          password:'',
          username:'',
          email:'',
          message: null
        }
      }
      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    
    
      login = () => {
        this.props.history.push('/');
      }
      forgotuser = () => {
        this.props.history.push('/forgot');
      }
    
      saveuser = (e) => {
        e.preventDefault();
    
        let user = {
            id:this.state.id,
            password:this.state.password,
            username:this.state.username,
            email:this.state.email

        }
        
        ApiService.checkuser(user) 
        .then( res => {
            if(res.data=="success"){
                alert("id 중복입니다")
            }
            else{
                ApiService.adduser(user)
                this.props.history.push('/');
          }
          })
          .catch(err => {
            console.log('reloadUserList() Error!', err);
          })
          
    
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
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="text"name="username" value={this.state.username} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="email" type="text"name="email" value={this.state.email} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary" onClick={this.forgotuser}>이미 가입했는데 비번 또는 아이디가 생각 안나시나요?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.saveuser}>가입</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.login}>취소</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(adduser);