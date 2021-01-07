import React, { Component } from 'react';
import ApiService from "../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class update extends Component{

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
    this.reloadcontent();
  }

  reloadcontent = () => {
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
        console.log('reloadcontent() Error!', err);
      })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  savecontent = (e) => {
    e.preventDefault();

    let content = {
        bno: this.state.bno,
        title: this.state.title,
        content: this.state.content,
        writer: this.state.writer
    }

    ApiService.editcontent(content)
      .then( res => {
        this.setState({
          message : content.writer + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('savecontent() 에러', err);
      })
  }
  list = () => {
    window.localStorage.removeItem("bno");
    this.props.history.push('/');
  }


  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Edit content</Typography>
        <form>
        <TextField type="text" placeholder="please input your title" name="title" fullWidth margin="normal" value={this.state.title} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your content" name="content" fullWidth margin="normal" value={this.state.content} onChange={this.onChange} />

            <TextField type="text" readOnly={true} placeholder="please input your writer" name="writer" fullWidth margin="normal" value={this.state.writer} disabled />


        </form>
        <div align="right">
          <Button variant="contained" color="primary" onClick={this.savecontent}>저장</Button>
          <Button variant="contained" color="primary" onClick={this.list}>목록</Button>
        </div>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default update;