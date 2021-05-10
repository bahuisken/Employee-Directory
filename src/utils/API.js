import axios from "axios";
const BASEURL =
  "https://randomuser.me/api/?results=100&nat=us&inc=picture,name,email,phone,dob";
// eslint-disable-next-line
export default {
  search: function (query) {
    return axios.get(BASEURL);
  },
};
