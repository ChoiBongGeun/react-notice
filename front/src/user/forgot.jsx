import React,{Component} from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Face,Email,AccountCircle} from '@material-ui/icons'
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
          pwid:'',
          password:'',
          pwusername:'',
          pwemail:'',
          idusername:'',
          idemail:'',
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
    
      forgotpw = (e) => {
        e.preventDefault();
    
        let user = {
            id:this.state.pwid,
            username:this.state.pwusername,
            email:this.state.pwemail

        }
    
        ApiService.forgotpw(user)
        .then( res => {
            if(res.data=="fail"){
                alert("잘못된 접근입니다")
              }
            else{
            alert("pw는"+res.data.password)
            document.location.href = "/"
            }
        })
        .catch( err => {
          console.log('saveUser() 에러', err);
        });
    
      }
      forgotid = (e) => {
        e.preventDefault();
    
        let user = {
            username:this.state.idusername,
            email:this.state.idemail

        }
    
        ApiService.forgotid(user)
        .then( res => {
            if(res.data=="fail"){
                alert("잘못된 접근입니다")
              }
            else{
            alert("id는"+res.data.id)
            document.location.href = "/"
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
                <div className={classes.margin} style ={{width: "45%",float:"left"}}>
                <h2 algin="center">비번이 생각안나시나요?</h2>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="UserID" type="text" name="pwid" value={this.state.pwid} fullWidth autoFocus required onChange={this.onChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="text"name="pwusername" value={this.state.pwusername} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="email" type="text"name="pwemail" value={this.state.pwemail} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.forgotpw}>비번찾기</Button>
                    </Grid>
                </div>
                <div className={classes.margin} style ={{width: "45%",float:"right"}}>
                <h2 algin="center">아이디가 생각안나시나요?</h2>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                        <AccountCircle />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="text"name="idusername" value={this.state.idusername} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="email" type="text"name="idemail" value={this.state.idemail} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.forgotid}>아이디 찾기</Button>
                    </Grid>
                </div>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.login}>취소</Button>
                    </Grid>
            </Paper>
        
            
        );
    }
}

export default withStyles(styles)(adduser);