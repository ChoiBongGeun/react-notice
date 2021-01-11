import React,{Component} from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import {Fingerprint} from '@material-ui/icons'
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
          id:window.sessionStorage.getItem("id"),
          password:'',
          username:window.sessionStorage.getItem("username"),
          email:'',
          message: null
        }
      }
      componentDidMount(){
        if(!window.sessionStorage.getItem("id")){
          document.location.href = "/";
          alert("잘못된 접근")
        }
      }
     
      checkpw = (e) => {
        e.preventDefault();
    
        let user = {
            id:this.state.id,
            password:this.state.password,
        }
        ApiService.loginuser(user)
        .then( res => {
        if(res.data=="fail"){
            alert("비번이 틀렸습니다")
        }
        else{
            window.sessionStorage.setItem('email', res.data.email)
            this.props.history.push('/userinfo');
          
        }
        })
    
        .catch(err => {
          console.log('reloadUserList() Error!', err);
        })
    }

      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    
    
      content = () => {
        this.props.history.push('/main');
      }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="확인을 위해 한번만 입력해주세요" type="password"name="password" value={this.state.password} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                        <Grid>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.checkpw}>수정</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.content}>취소</Button>
                        </Grid>
                    </Grid>
                    </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(adduser);