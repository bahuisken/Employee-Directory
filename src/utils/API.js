import axios from "axios";
const APIURL =
  "https://randomuser.me/api/?results=100&nat=us&inc=picture,name,email,phone,dob,login";
// eslint-disable-next-line
export default {
  search: function (query) {
    return axios.get(APIURL);
  },
};
