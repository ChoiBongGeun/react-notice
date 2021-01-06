import React, { Component } from 'react';
import ApiService from "../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          bno: '',
          title: '',
          content: '',
          writer: '',
          message: null
        }
      }

  componentDidMount(){
    this.reloadUser();
  }

  reloadUser = () => {
    ApiService.readcontent(window.localStorage.getItem("bno"))
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

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  saveUser = (e) => {
    e.preventDefault();

    let content = {
        bno: this.state.bno,
        title: this.state.title,
        content: this.state.content,
        writer: this.state.writer
    }

    ApiService.editUser(content)
      .then( res => {
        this.setState({
          message : content.writer + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Edit content</Typography>
        <form>
        <TextField type="text" placeholder="please input your title" name="title" 
fullWidth margin="normal" value={this.state.title} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your content" name="content" 
fullWidth margin="normal" value={this.state.content} onChange={this.onChange} />

            <TextField type="text" readOnly={true} placeholder="please input your writer" name="writer" 
fullWidth margin="normal" value={this.state.writer} disabled />

          <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default EditUserComponent;