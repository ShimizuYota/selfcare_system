var http = require('http');

http.createServer(function(req, res) {
    if(req.method === 'GET') {
        res.end();
    } else if(req.method === 'POST') {
        var data = "";

        //POSTデータを受けとる
        req.on('data', function(chunk) {data += chunk})
            .on('end', function() {

                console.log(data);
                res.end();

            })

    }
}).listen(3000);