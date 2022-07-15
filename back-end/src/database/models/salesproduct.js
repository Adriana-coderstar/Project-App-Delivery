module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      onUpdate: 'CASCADE',
      allowNull: false,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'product_id',
      allowNull: false,
      onUpdate: 'CASCADE',
    },
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  // SalesProduct.associate = (models) => {
  //   SalesProduct.belongsTo(models.Product, { as: 'products', foreignKey: 'id' });
  //   SalesProduct.belongsTo(models.Sale, { as: 'sales', foreignKey: 'id' });
  // };

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
  }

  return SalesProduct;
};