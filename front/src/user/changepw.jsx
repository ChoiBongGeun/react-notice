import React,{Component} from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Fingerprint} from '@material-ui/icons'
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
            password:'',
            newpw:'',
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
            id:window.sessionStorage.getItem("id"),
            password:this.state.password,
        }
        ApiService.loginuser(user)
        .then( res => {
        if(res.data=="fail"){
            alert("비번이 틀렸습니다")
        }
        else{
            let user = {
                id:window.sessionStorage.getItem("id"),
                password:this.state.newpw,
            }
            ApiService.changepw(user)
            window.sessionStorage.clear();
            document.location.href = "/"
          
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
                            <TextField id="username" label="지금 비밀번호를 적어주세요" type="password"name="password" value={this.state.password} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="새로운 비밀번호를 적어주세요" type="password"name="newpw" value={this.state.newpw} onChange={this.onChange} fullWidth autoFocus required/>
                        </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
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