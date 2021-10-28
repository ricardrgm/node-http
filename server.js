import http from 'http';
import { Transform } from 'stream';

//http.globalAgent.keepAlive = true;

const server = http.createServer()


const pongStr = new Transform({
    transform(chunk,encoding,callback){
        if (chunk.toString().includes("ping"))
        this.push('hola paola');

        callback();

    }
})

// http es un instancia de un EventEmitter
// request y response son streams
server.on('request',(request,response) => {
    //request.pipe(response);
    request.pipe(pongStr).pipe(response);
}).listen(8000);

console.log('listening on 8000');