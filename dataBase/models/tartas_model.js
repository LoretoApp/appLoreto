const { Sequelize, model, DataTypes} = require('sequelize')
const dataBase = require('../services/dataBase_appLoreto')

const cakesModel = dataBase.define('tartaletas',{
  id_tartaleta: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "El nombre es obligatorio"
      }}
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "La descripcion es obligatoria",
      }}
  },
  diametro: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "El diametro es obligatorio",
      }}
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2), // 10 dígitos en total, 2 dígitos después del punto decimal
    allowNull: false,
    validate: {
      notNull: {
        msg: "El precio es obligatorio",
      }}
  },
  imagen: {
    type: DataTypes.STRING, // Tipo de dato para almacenar la ruta o enlace de la imagen
    allowNull: true // Puedes cambiarlo a "false" si deseas que la imagen sea obligatoria
  },
  estado: {
    type: DataTypes.ENUM("ACTIVO","INACTIVO"),
    allowNull: false,
    defaultValue: "ACTIVO"
  }
}, {
  timestamps: true // recordar crear columna createdAt y updatedAt // 
});

module.exports = cakesModel;