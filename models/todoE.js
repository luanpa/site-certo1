
/// cria no banco de dados essa tabela

module.exports = (sequelize, DataTypes) => {
    const todoE = sequelize.define("todoE", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
           type: DataTypes.STRING,
           allowNull: false
        },
        horario: {
          type: DataTypes.STRING,
          allowNull: false
        },
        requisitos: {
          type: DataTypes.STRING,
          allowNull: false
        },
        beneficio: {
          type: DataTypes.STRING,
          allowNull: false
        },
        localizacao: {
          type: DataTypes.STRING,
          allowNull: false
},
    });
    return todoE;
};
/// test hj
