const tapp = require('./tapputils')

tapp.checkMojangSession('johanbag290@gmail.com', process.env.MINECRAFT_PASSWORD, (e, i, d) => {
    if(e !== undefined) {
        console.error(e)
        return
    }

    if(d == 'ForbiddenOperationException') {
        console.log(d)
        return
    }

    if(d == 'VaildSession') {
        console.log('vaild')
        return
    }

    console.log('idk')

    tapp.downloadFile('https://www.learningcontainer.com/bfd_download/sample-text-file/', 'HELLO.txt')
    console.log(tapp.checkSumMatch('HELLO.txt', 'A50ABFA4C1936B1AD71C0331F3808562'))
})