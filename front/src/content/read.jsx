import React, { Component } from 'react';
import ApiService from "../ApiService";


import Button from '@material-ui/core/Button'

import { TextField } from '@material-ui/core';


class read extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          bno: this.props.location.search.split("=")[1],
          title: '',
          content: '',
          writer: '',
          message: null
        }
      }
    
      componentDidMount(){
        this.reloadUserList();
      }
  
     
      reloadUserList = () => {
        ApiService.readcontent(this.state.bno)
          .then( res => {
            let content = res.data;
            this.setState({
                bno: content.bno,
                title: content.title,
                content: content.content,
                writer: content.writer
            })
          })
          .catch(err => {
            console.log('reloadUserList() Error!', err);
          })
      }
  
    
      modify = (bno) => {
        this.props.history.push('/update?bno='+bno);
      }
      remove = (bno) => {
        ApiService.deletecontent(bno)
        document.location.href = "/"
      }
      list = () => {
        this.props.history.push('/');
      }
    
  render(){

    return(
        <div>
        <form>
            <TextField type="text" name="username" readOnly={true} fullWidth margin="normal" value={this.state.title} disabled />

            <TextField placeholder="Edit your first name" name="firstName" fullWidth margin="normal" value={this.state.content} disabled />

            <TextField placeholder="Edit your last name" name="lastName" fullWidth margin="normal" value={this.state.writer} disabled />

        </form>
        <div align="right">
          <Button variant="contained" color="primary" onClick={()=> this.modify(this.state.bno)}>수정</Button>
          <Button variant="contained" color="primary"onClick={()=> this.remove(this.state.bno)}>삭제</Button>
          <Button variant="contained" color="primary" onClick={this.list}>목록</Button>
        </div>
      </div>
    );
    
  }

}


export default read;