// const express = require('express');
// const app = express();
// var port = process.env.PORT||3000;
//  app.listen(port, () => {
//    console.log('Server is up!',port);
// });
// app.use(express.static(__dirname + "index.html"));
const express = require('express');
const app = express();
const port = process.env.PORT||5000;
//const fileDirectory = path.resolve(__dirname + "index.html")
//app.use(express.static(fileDirectory));
 //app.use(express.static(__dirname + "index.html"));
app.get("*", (req, res) => {
  debugger
  res.sendFile(__dirname + '/index.html', (err) => {
    res.end();

    if (err) throw err;
  });
});
 app.listen(port, () => {
   console.log('Server is up!',port);
});
// const express = require("express");

// const app = express();
// const port = process.env.PORT || 3005;
//const path = require("index.html");
//app.use(express.static(__dirname + "index.html"));
//res.sendFile(__dirname + '/index.html');
// const fileDirectory = path.resolve(__dirname,"index.html")

// app.use(express.static(fileDirectory));

// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root: fileDirectory }, (err) => {
//     res.end();

//   //  if (err) throw err;
//   });
// });

// app.listen(port, () =>
//   console.log(`App listening at http://localhost:${port}`)
// );