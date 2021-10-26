const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activities', {

        /*  id: {
             type: DataTypes.UUID,
             allowNull: false,
             primaryKey: true
         },
  */
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false
        },

        timeLapse: {
            type: DataTypes.STRING,
            allowNull: false
        },

        seasson: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        },

    },
        {
            // timestamps: false
            timestamps: true,
            createdAt: 'Creado',
            updatedAt: 'Actualizado'
        }
    );
};
