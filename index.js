const server =  require('./api/src/app');

const PORT = 3000;

server.listen( PORT, ()=>{
    console.log(`Puerto ${PORT}`);    
})