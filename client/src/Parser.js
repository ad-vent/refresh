import axios from 'axios';

const getHomeFeed = (pageNumber, limit, callback) => {
  axios({
    method: 'GET',
    url: `/api/all?page=${pageNumber}&limit=${limit}`
  }).then((res) => {
    callback(res.data);
  });
};

const getUserFeed = (username, pageNumber, limit, callback) => {
  axios({
    method: 'GET',
    url: `/api/${username}?page=${pageNumber}&limit=${limit}`
  }).then((res) => {
    callback(res.data);
  });
};

const getTotalLikes = (username, callback) => {
  axios({
    method: 'GET',
    url: `/api/${username}/likes`
  }).then((res) => {
    callback(res.data);
  });
};

export default {
  getHomeFeed,
  getUserFeed,
  getTotalLikes
}