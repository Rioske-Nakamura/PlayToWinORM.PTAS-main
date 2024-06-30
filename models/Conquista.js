const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Conquista = db.define("Conquista", {
  titulo: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  jogo_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Conquista;
