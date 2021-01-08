import axios from 'axios';

const USER_API_BASE_URL1 = "http://localhost:8080/content";
const USER_API_BASE_URL = "http://localhost:8080/user";

class ApiService {
  fetchcontents(){
    return axios.get(USER_API_BASE_URL1);
  }
  mycontents(writer){
    return axios.get(USER_API_BASE_URL1+'/' + writer);
  }
  readcontent(bno){
    return axios.get(USER_API_BASE_URL1+ '/read/' + bno);
  }
  
  deletecontent(bno){
    return axios.delete(USER_API_BASE_URL1 + '/' + bno);
  }
  
  addcontent(content){
    return axios.post(USER_API_BASE_URL1, content);
  }

  editcontent(content){
    return axios.put(USER_API_BASE_URL1 + '/' + content.bno, content)
  }
  loginuser(user){
    return axios.post(USER_API_BASE_URL+'/login', user);
  }
  adduser(user){
    return axios.post(USER_API_BASE_URL+'/adduser', user);
  }
  forgotid(user){
    return axios.post(USER_API_BASE_URL+'/forgotid', user);
  }
  forgotpw(user){
    return axios.post(USER_API_BASE_URL+'/forgotpw', user);
  }
  checkuser(user){
    return axios.post(USER_API_BASE_URL+'/checkuser', user);
  }
  updateuser(user){
    return axios.put(USER_API_BASE_URL+'/updateuser', user);
  }
  changepw(user){
    return axios.put(USER_API_BASE_URL+'/updatepw', user);
  }
  deleteuser(id){
  return axios.delete(USER_API_BASE_URL+'/'+id);
  }

}

export default new ApiService();
