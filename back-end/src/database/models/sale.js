module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL, },
    deliveryAddress: { type: DataTypes.STRING, },
    deliveryNumber: { type: DataTypes.STRING, },
    saleDate: { type: DataTypes.DATE, },
    status: {type: DataTypes.STRING},
  }, {
    tableName: 'sales',
    createdAt: 'saleDate',
    updatedAt: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { as: 'buyer', foreignKey: 'userId' });
    Sale.belongsTo(models.User, { as: 'seller', foreignKey: 'sellerId' });

    Sale.hasMany(models.SalesProduct, { as: 'salesProducts', foreignKey: 'saleId' });
    // Sale.belongsTo(models.SalesProduct, { as: 'sale', foreignKey: 'sale_id' });
  };

  return Sale;
};