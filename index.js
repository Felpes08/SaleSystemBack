const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routesCliente = require ('./src/routes/routesCliente');
const routesProdutos = require ('./src/routes/routesProdutos');
const routesPedidos = require ('./src/routes/routesPedidos');
const cors = require('cors');
 
app.use(express.json());
 
app.use(cors());
 
app.use('/sistema', routesCliente);

app.use('/sistema', routesProdutos);

app.use('/sistema', routesPedidos);
 
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});
 
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});
 
sequelize.sync({ force: false }).then(() => {
    const port = 3003;
    app.set("port", process.env.PORT || port);
    const server = http.createServer(app);
    server.listen(process.env.PORT || port);
});
