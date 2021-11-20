const idOnline = document.querySelector("#idOnline");
const idOffline = document.querySelector("#idOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on('connect',()=>{
    idOffline.style.display = "none";
    idOnline.style.display = "";
})

socket.on('disconnect',()=>{
    idOffline.style.display = "";
    idOnline.style.display = "none";
})

socket.on('enviar-mensaje',(payload)=>
{
    console.log(payload);
});

btnEnviar.addEventListener('click',()=>
{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:"123",
        date:new Date
    }
    
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('todo ok ',id);
    });
})