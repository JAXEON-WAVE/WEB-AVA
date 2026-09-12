const http= require('http');
const servidor = http.createServer((req, res)=>{
res.writeHead (200, {'Content-Type':'text/plain'});
res.end('HOLA MUNDO');
});
servidor.listen(3000, () => {
console.log('Servidor contenido en http://localhost:3000')
});
