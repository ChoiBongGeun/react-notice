import axios from 'axios';

const USER_API_BASE_URL1 = "http://localhost:8080/content";

class ApiService {
  fetchcontents(){
    return axios.get(USER_API_BASE_URL1);
  }
  readcontent(bno){
    return axios.get(USER_API_BASE_URL1+ '/read/' + bno);
  }
  

  deletecontnet(bno){
    return axios.delete(USER_API_BASE_URL1 + '/' + bno);
  }
  
  addcontent(content){
    return axios.post(USER_API_BASE_URL1, content);
  }

  editcontent(content){
    return axios.put(USER_API_BASE_URL1 + '/' + content.bno, content)
  }

}

export default new ApiService();
