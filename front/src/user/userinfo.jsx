import React,{Component} from 'react';
import ApiService from "../ApiService";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint,Email,AccountCircle} from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';
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
          email:window.sessionStorage.getItem("email"),
          message: null
        }
      }
      componentDidMount(){
        if(!window.sessionStorage.getItem("id")){
          document.location.href = "/";
          alert("잘못된 접근")
        }
        else if(!window.sessionStorage.getItem("email")){
            alert("잘못된 접근")
        }
        else{
        }
      }
     

      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    
    
      content = () => {
        window.sessionStorage.clear();
        this.props.history.push('/main');
      }
      changepw = () => {
        this.props.history.push('/changepw');
      }
    
      saveuser = (e) => {
        e.preventDefault();
    
        let user = {
            id:this.state.id,
            email:this.state.email

        }
    
        ApiService.updateuser(user)
        window.sessionStorage.removeItem("email");
        this.props.history.push('/main');
      }
      delete = () => {
        ApiService.deleteuser(this.state.id) 
        window.sessionStorage.clear();
        document.location.href = "/"
      }

    render() {
        const { classes } = this.props;
        return (
            
            <Paper className={classes.padding}>
                    <div className={classes.margin}>
                    <Typography variant="h6">메일 수정은 가능합니다</Typography>
                    
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="UserID" type="text" name="id" value={this.state.id} fullWidth autoFocus required disabled />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.changepw}>비밀번호 수정</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="text"name="username" value={this.state.username} fullWidth autoFocus required disabled/>
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
                    
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.saveuser}>수정</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.content}>취소</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.delete}>아이디삭제</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(adduser);