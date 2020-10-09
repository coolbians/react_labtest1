var fs = require('fs')
var dir = './Logs'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.readFile('./Logs', 'utf8', function (err, data) {
    if(err) {
        console.log(err)
    }
    console.log(data)
})


