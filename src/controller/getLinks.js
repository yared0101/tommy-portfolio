import axios from "axios";
import { path } from "./config";


async function getLinks(filter={}) {
  var result = {return: 0,msg: "Error",data:[]};

  // console.log('testt: ',filter);
  let formData = new FormData();
  formData.append('filter',JSON.stringify(filter));

  await axios.post(path.api+'/pages/getLinks.php',formData,{withCredentials:true})
  .then((res) => {
    if(res) {
      result.return = res.data.return;
      result.msg = res.data.msg;
      result.data = res.data.data;
      // result.data = res.data.data.sort((a,b) => b.time - a.time);
    }

    // console.log("db:",res.data);
  })
  .catch((err) => {
    console.log('Network Error!');
  })

  return result;
}

export default getLinks;