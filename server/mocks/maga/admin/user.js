/**
 * user
 * @url /user?username=123&password=123
 */
var userMap = {
    "admin":{
      "username": "admin",
      "password": "123456",
      "name": "@cname",
      "phone": "13998465335",
      "email": "@email",
      "roleid": "0099"
    },
    "student":{
      "username": "student",
      "password": "123456",
      "name": "@cname",
      "phone": "13998465335",
      "email": "@email",
      "roleid": "0099"
    },
    "teacher":{
      "username": "teacher",
      "password": "123456",
      "name": "@cname",
      "phone": "13998465335",
      "email": "@email",
      "roleid": "0099"
    },
    "super":{
      "username": "super",
      "password": "123456",
      "name": "@cname",
      "phone": "13998465335",
      "email": "@email",
      "roleid": "0099"
    },
    "dean":{
      "username": "dean",
      "password": "123456",
      "name": "@cname",
      "phone": "13998465335",
      "email": "@email",
      "roleid": "0099"
    }
  }
  module.exports = function (req) {
    var username = req.query.username;
    var password = req.query.password;
    
    console.log(username + "\t" + password);
  
    if (!username || !password) {
      return { msg: 'please with parameters username and password as ?username=123&password=123' }
    }
    
    return userMap[username];
    
  };
  