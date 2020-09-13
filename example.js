const tapp = require('./tapputils')

tapp.checkMojangSession('johanbag290@gmail.com', 'min76081205', (e, i, d) => {
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

    await tapp.downloadFile('sdfasdvs', 'fadvssf')
    await tapp.checkSumMatch('vjsvksjvsad', 'sjvdj2rf2r9d').then()
})