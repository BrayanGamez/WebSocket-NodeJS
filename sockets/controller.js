const socketController = (socket) => {

         
    socket.on('enviar-mensaje',(payload,callback)=>
    {
        socket.broadcast.emit('enviar-mensaje',payload);
        const id=123;
        callback(id)
    })

}

module.exports = {socketController}