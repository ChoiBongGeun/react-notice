import React, { Component } from 'react';
import ApiService from "../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class UserListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount(){
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers()
      .then( res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('reloadUserList() Error!', err);
      })
  }

  readcontent  = (bno) => {
    window.localStorage.setItem("bno", bno);
    this.props.history.push('/read/'+bno);
  }

  addUser = () => {
    this.props.history.push('/add');
  }

  render(){

    return(
      <div>
        <Typography variant="h4" style={style}>content List</Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">writer</TableCell>
              <TableCell align="right">regdate</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map( user => 
              <TableRow key={user.bno}>
                <TableCell component="th" scope="user" onClick={()=> this.readcontent(user.bno)}>{user.title}</TableCell>
                <TableCell align="right">{user.writer}</TableCell>
                <TableCell align="right">{user.regdate}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <br></br>
        <div align="right">
        <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
        </div>
      </div>
      
    );
    
  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default UserListComponent;