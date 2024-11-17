'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    
    static associate(models) {
      
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    categoria: DataTypes.STRING,
    precoAntigo: DataTypes.INTEGER,
    precoNovo: DataTypes.INTEGER,
    desconto: DataTypes.FLOAT,
    imagem: {
      type: DataTypes.TEXT(15000), 
      allowNull: false    }
  }, {
    sequelize,
    modelName: 'Produtos',

  });
  return Produtos;
};