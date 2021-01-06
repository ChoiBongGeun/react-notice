import axios from 'axios';

const USER_API_BASE_URL1 = "http://localhost:8080/content";

class ApiService {
  fetchUsers(){
    return axios.get(USER_API_BASE_URL1);
  }
  readcontent(bno){
    return axios.get(USER_API_BASE_URL1+ '/read/' + bno);
  }
  
  loginuser(user){
    return axios.post(USER_API_BASE_URL1,user);
  }

  deleteUser(bno){
    return axios.delete(USER_API_BASE_URL1 + '/' + bno);
  }
  
  addUser(user){
    return axios.post(USER_API_BASE_URL1, user);
  }

  editUser(user){
    return axios.put(USER_API_BASE_URL1 + '/' + user.bno, user)
  }

}

export default new ApiService();
