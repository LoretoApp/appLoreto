const tartasModel = require('../models/tartas_model')


// Devuelve el inventario de Tartas
const getAllTartas = async (req, res) => {
  try {
  const lista_tartas = await tartasModel.findAll();
  res.status(200).json(lista_tartas);
  // console.log(JSON.stringify(lista_tartas))
  } catch (error) {
    res.status(400).json({msg: error})
  }
}

// Crear producto tartas
const createTarta = async (req,res) => {
  const { nombre, descripcion, diametro, precio, imagen, estado} = req.body
  
  if( !nombre || !descripcion || !diametro || !precio || !estado) {
    res.status(400).json({msg: "imposible procesar la informacion, datos incompletos"})
  } else {
  await tartasModel.create({
    nombre: nombre,
    descripcion: descripcion,
    diametro: diametro,
    precio: precio,
    imagen: imagen,
    estado: estado
  })
  res.status(200).json({msg: `El producto: ${nombre}, fue creado correctamente`})
  console.log(`tartaleta ${nombre} creada correctamente`)
  }
};

// actualizar producto segun id
const updateTarta = async (req, res) => {
  const idConsultada = await req.params.id

  const tartaId = await tartasModel.findAll({ where: {id_tartaleta: idConsultada } })
  if( tartaId.length > 0 ){
    const { nombre, descripcion, diametro, precio, imagen, estado} = req.body
  await tartasModel.update({ 
    nombre: nombre,
    descripcion: descripcion,
    diametro: diametro,
    precio: precio,
    imagen: imagen,
    estado: estado
  }, { where:{ id_tartaleta: idConsultada }})
    res.status(200).json({msg: "registro actualizado correctamente"})
    console.log('registro actualizado correctamente')
  } else {
    res.status(400).json({msg: `No se encontro el registro con id: ${idConsultada}`})
    console.log('no se encontro el registro')
  }
}


module.exports = {
  createTarta,
  updateTarta,
  getAllTartas
}