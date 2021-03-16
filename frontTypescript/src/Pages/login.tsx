import React,{useState } from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { useHistory } from "react-router-dom";

const styles = (theme:any)=> ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});



const Login =()=>{
    const [id,setId]= useState('');
    const [password,setPassword] = useState('');
    let history = useHistory();

 
    return (
        <Paper style={{marginTop:'3px'}}>
        <div >
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username" label="UserID" type="text" name="id" value={id} fullWidth autoFocus required onChange={(e)=>setId(e.target.value)} />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username" label="UserPassword" type="password"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth autoFocus required/>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                </Grid>
                <Grid item>
                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary" onClick={()=>history.push('/')}>Forgot password ?</Button>
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={()=>history.push('/')}>회원가입</Button>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={()=>history.push('/')}>Login</Button>
            </Grid>
        </div>
    </Paper>


    )
}


export default withStyles(styles)(Login);