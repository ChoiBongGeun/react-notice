import React, { Component } from 'react';
import ApiService from "../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ReactPaginate from 'react-paginate';
class mycontent extends Component{

  constructor(props){
    super(props);

    this.state = {
      totalRecords :'',
      contents: [],
      content:[],
      message: null
    }
  }

  componentDidMount(){
    if(!window.sessionStorage.getItem("id")){
      document.location.href = "/";
      alert("잘못된 접근")
    }
    else{
    this.reloadcontentList();
    }
  }
 
  reloadcontentList = () => {
    ApiService.mycontents(window.sessionStorage.getItem("id"))
      .then( res => {
        this.setState({
           
          contents: res.data,
          totalRecords :res.data.length,
          content:res.data.slice(0,5)
        })
      })
      .catch(err => {
        console.log('reloadUserList() Error!', err);
      })
  }

  readcontent = (bno) => {
    this.props.history.push('/read?bno='+bno);
  }

  addcontent = () => {
    this.props.history.push('/add');
  }
  changePage= ({ selected: selectedPage }) => {
      this.setState({
        content:this.state.contents.slice(selectedPage*5,selectedPage*5+5)
      })
  }



  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>게시판</Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="right">writer</TableCell>
              <TableCell align="right">regdate</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.content.map( content => 
              <TableRow key={content.bno}>
                <TableCell align="center" component="th" scope="user" onClick={()=> this.readcontent(content.bno)}>{content.title}</TableCell>
                <TableCell align="right">{content.writer}</TableCell>
                <TableCell align="right">{content.regdate}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table> 
        <div algin="center">
            <ReactPaginate 
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={Math.ceil(this.state.totalRecords / 5)}
                onPageChange={this.changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />  
      </div>
      <br></br>
        <div align="right">
        <Button variant="contained" color="primary" onClick={this.addcontent}> 글쓰기 </Button>
        </div>
    </div>
      
    );
    
  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default mycontent;