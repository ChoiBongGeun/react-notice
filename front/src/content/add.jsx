import React, { Component } from 'react';
import ApiService from "../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class add extends Component{

  constructor(props){
    super(props);

    this.state = {
        title: '',
        content: '',
        writer: window.sessionStorage.getItem('id'),
      message: null
    }

  }
  componentDidMount(){
    if(!window.sessionStorage.getItem("id")){
      document.location.href = "/";
      alert("잘못된 접근")
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  savecontent = (e) => {
    e.preventDefault();

    let content = {
        title: this.state.title,
        content: this.state.content,
        writer: this.state.writer,
    }

    ApiService.addcontent(content)
    .then( res => {
        this.setState({
          message: content.name + '님이 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        this.props.history.push('/main');
    })
    .catch( err => {
      console.log('saveUser() 에러', err);
    });

  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Add content</Typography>
        <form style={formContainer}>
         
            <TextField type="text" placeholder="please input your title" name="title" fullWidth margin="normal" value={this.state.title} onChange={this.onChange} />

            <TextField placeholder="please input your content" name="content" fullWidth margin="normal" value={this.state.content} onChange={this.onChange} />

            <TextField placeholder="please input your writer" name="writer" fullWidth margin="normal" value={this.state.writer} disabled/>

          <Button variant="contained" color="primary" onClick={this.savecontent}>저장</Button>

        </form>
      </div>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
}

const style = {
  display: 'flex', 
  justifyContent: 'center'
}

export default add;