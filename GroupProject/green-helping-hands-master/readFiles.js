const fs = require('fs')

writeJson = (path, gardenGrid, cb) => {
    fs.writeFile(path, JSON.stringify(gardenGrid, null, 2), cb)
}

readJson = (path, cb) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) cb(err)
        else cb(null, JSON.parse(data))
    })
}

module.exports = {
    writeJson,
    readJson
}