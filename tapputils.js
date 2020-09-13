const request = require('request')

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