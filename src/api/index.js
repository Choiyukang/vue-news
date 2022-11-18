import axios from 'axios';

const config ={
    baseUrl:'https://api.hnpwa.com/v0/',
}

async function fetchNewsList(){
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchAskList(){
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList(){
    try {
        const response = await axios.get(`${config.baseUrl}jobs/1.json`);
        return response;
    } catch (error) {
        console.log(error);        
    }
}

async function fetchUserInfo(userName){
    try {
        const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchCommentItem(itemId){
    try {
        const response = await axios.get(`${config.baseUrl}item/${itemId}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async function fetchList(pageName){
     try {
      const response = await await axios.get(
        `${config.baseUrl}${pageName}/1.json`
      );   
      return response;
    } catch (error) {
        console.log(error);
    } 
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
};