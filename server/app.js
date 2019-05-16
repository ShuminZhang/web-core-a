const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const mockjs = require('express-mockjs');

var url=require('url');
var fs=require('fs');
var mine=require('./mocks/mine').types;
var mock=require('./mocks/tpss');

const app = express();
const PORT = 8000;

function restful(req,res){
  var pathname = url.parse(req.url).pathname;
  var realPath = path.join(".", pathname);
  console.log('real path is ' + realPath);
  fs.exists(realPath, function (exists) {
    if (!exists) {
      var mockResponse = mock.getResponse(req);
      if (mockResponse) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(mockResponse));
        res.end();
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("This request URL " + pathname + " was not found on this server.");
        res.end();
      }
    } else {
      fs.readFile(realPath, "binary", function (err, file) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end(err);
        } else {
          var contentType = mine[ext] || "text/plain";
          res.writeHead(200, {'Content-Type': contentType});
          res.write(file, "binary");
          res.end();
        }
      });
    } 
  });
}

// default options
app.use(fileUpload());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))
app.get('/',(req,res)=>res.send('Hello Express Server Root!'))
app.use('/maga',mockjs(path.join(__dirname,'mocks/maga')))
app.get('/tpss/*',restful);

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (Object.keys(req.files).length == 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  // 这里提交的文件表单名称为 file
  sampleFile = req.files.file;

  // 为文件名打一个时间戳，保证不重名
  const filename = (new Date().getTime()) + sampleFile.name;

  uploadPath = path.join(__dirname, 'uploads', filename);

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

  res.send({default: path.join('uploads', filename)})
  });
});

app.post('/upload/content', function(req, res) {
  console.log(req.body)
  res.send(req.body)
})

app.listen(PORT, function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});