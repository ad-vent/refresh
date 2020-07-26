import axios from 'axios';

const getHomeFeed = (pageNumber, limit, callback) => {
  axios({
    method: 'GET',
    url: `/api/all?page=${pageNumber}&limit=${limit}`
  }).then((res) => {
    callback(res.data);
  });
};

export default {
  getHomeFeed
}