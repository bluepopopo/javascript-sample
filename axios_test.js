const axios = require("axios");
var FormData = require("form-data");

var fs = require("fs");
var data = fs.createReadStream("/Users/shawn/Desktop/package.json");

var formdata = new FormData();
formdata.append("file", data);

// 注意：不能使用如下的header配置，否则服务器端会一直报错， Required request part \'file\' is not present
// 得使用 formdata.getHeaders()
let config = {
  headers: {
    "Content-Type": "multipart/form-data=;boundary=x"
  }
};

axios
  .post("http://47.98.189.185:10003/api/file/img", formdata, {
    headers: formdata.getHeaders()
  })
  .then(res => {
    console.log('status code =['+res.status+']');
    console.log('文件路径为 ['+res.data+']')
  })
  .catch(res => {
    console.log(res);
  });
