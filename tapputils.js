const request = require('request')
const http = require('http')
const fs = require('fs')
const md5 = require('md5')

/**
 * Check token is vaild; callback: callback(error: Error, isVaild: Boolean, description: String)
 * @param {String} usernameOrEmail 
 * @param {String} password 
 * @param {Function} callback
 */
module.exports.checkMojangSession = (usernameOrEmail, password, callback) => {
    request('https://authserver.mojang.com/authenticate', {
        method: 'POST',
        body: JSON.stringify({
            agent: {
                name: 'Minecraft',
                version: 1
            },
            username: usernameOrEmail,
            password: password
        }),
    }, (err, res, body) => {
        // callback(error: Error, isVaild: Boolean, description: String)
        if(err) { callback(err, false, undefined); return; }

        const ps = JSON.parse(body)
        
        if(ps.error !== undefined) {
            callback(undefined, false, ps.error)
            return
        }
        callback(undefined, true, 'VaildSession')
    })
}

/**
 * Download File from Internet
 * @param {String} address
 * @param {String} path
 */
module.exports.downloadFile = async function (address, path) {
    const file = fs.createWriteStream(path)
    http.get(address, function (response) {
        response.pipe(file)
    })
}


/**
 * Check File's sum and sum is matching
 * @param {String} file 
 * @param {String} sum 
 * @returns {Boolean} Returns File's sum and Sum is matching
 */
module.exports.checkSumMatch = async (file, sum) => md5(fs.readFileSync(file)) == sum