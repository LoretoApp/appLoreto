const express = require('express');
const sequelize = require('sequelize');
const app = express();
const PORT = 3000;

const db_connection = require('./services/dataBase_appLoreto')
const tartasModel = require('./models/tartas_model')
const tartas_controller = require('./controllers/tartas_controller')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const dataBase = async () => {
  try {
  await db_connection.authenticate();
  await tartasModel.sync({force: false}); // sincronizar tablas en la base de datos // force true para ambiente de pruebas // reinicia las tablas cada vez que se reinicia el sv
  console.log('Conexion exitosa a la base de datos db_loreto');
  } catch (error) {
    console.log('Algo salio mal en la conexion a la base de daos', error)
  }
}


app.listen(3000, ()=>{
  dataBase();
  console.log(' Servidor ejecutandose en http://localhost:3000')
})



// Rutas

app.post('/create', tartas_controller.createTarta)
app.put('/update/:id', tartas_controller.updateTarta)
app.get('/showtartas', tartas_controller.getAllTartas)