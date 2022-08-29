const path = require('path')
const fs = require('fs')

const __PATHDESCARGAS__ = path.join('/home','agusestrada','Downloads')
const archivosDescargados = fs.readdirSync(__PATHDESCARGAS__)

//Carpeta de destino
const picFolder = path.join('/home','agusestrada','Pictures')
const vidFolder = path.join('/home','agusestrada','Videos')
const docFolder = path.join('/home','agusestrada','pdf')

for (let i = 0; i < archivosDescargados.length; i++) {
    const oldPath = path.join(__PATHDESCARGAS__,archivosDescargados[i])

    if (path.extname(archivosDescargados[i]) == '.pdf') {
        const newPath = path.join(docFolder,archivosDescargados[i])
        fs.renameSync(oldPath,newPath)
    } else if(path.extname(archivosDescargados[i]) == '.mp4' || archivosDescargados[i] == '.mov' || archivosDescargados[i] == '.avi'){
        const newPath = path.join(vidFolder,archivosDescargados[i])
        fs.renameSync(oldPath,newPath)
    }else if(path.extname(archivosDescargados[i]) == '.jpg' || path.extname(archivosDescargados[i]) == '.jpeg' || path.extname(archivosDescargados[i]) == '.png'){
        const newPath = path.join(picFolder,archivosDescargados[i])
        fs.renameSync(oldPath,newPath)
    }
}



