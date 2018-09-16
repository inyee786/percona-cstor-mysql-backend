const express = require("express");
const router = express();
const http = require('request');




// var options = {
//     url: `http://${process.argv[6]}:5656/latest/volumes/`,
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// };
// console.log(options);

for(i=0;i<process.argv.length;i++){
    console.log(process.argv[i]);
}
var options1 = {
    url: `http://maya-apiserver-service.openebs:5656/latest/volumes/`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
// http.get(options1, function (err, resp, body) {
//     if (err) {
//         console.log("this is volume erro namespaces ");
//     } else {
//         data = JSON.parse(body);
//         console.log(JSON.stringify(data.items));
//         console.log("this is volume lis http");
//         console.log(data);
//     }
// });

// router.get('/volume', (req, res) => {

//     var options = {
//         url: `http://${process.argv[6]}:5656/latest/volumes/`,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'namespace': `${process.argv[5]}`
//         }
//     };

//     http.get(options, function (err, resp, body) {
//         if (err) {
//             //   reject(err);
//             console.log(err);
//             console.log("this is volume erro namespaces ");
//         } else {
//             data = JSON.parse(body);
//             console.log(data);
//             //   numberOfrepo = JSON.parse(body).length;
//             console.log("this is volume lis http");
//             //    console.log(resp);
//             console.log("this is volume lis http");
//         }
//         // console.log(body +' this is body1')
//         res.status(200).json({ data });
//     });

// });
module.exports = router;