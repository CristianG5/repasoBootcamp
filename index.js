const server =  require('./api/src/app');
const {conn} = require('./api/src/db')

const PORT = 3001;

server.listen( PORT, ()=>{
    conn.sync({force: true});
    console.log(`Puerto ${PORT}`);    
})