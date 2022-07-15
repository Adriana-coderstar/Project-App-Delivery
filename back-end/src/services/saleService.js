const Sequelize = require('sequelize');

const { Sale, SalesProduct, Product, User } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const createSale = async (obj) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
    cart, status = 'Pendente' } = obj;
    // console.log('OBJ', obj);

  const result = await sequelize.transaction(async (t) => {
    const sale = await Sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    }, { transaction: t });

    await Promise.all(cart.map((c) => SalesProduct.create(
      { saleId: sale.id, productId: c.id, quantity: c.quantity }, { transaction: t },
    )));

    return ({ code: 201, sale });
  });

  return result;
};

const getSales = async (id, role) => {
  console.log('role', role);
  const params = role === 'customer' ? 'userId' : 'sellerId'; 
  console.log('paramns', params);
  const sales = await Sale.findAll({ 
    where: { [params]: id },
    include: [{ 
      model: Product,
      as: 'products',
      attributes: { exclude: ['urlImage'] },
      through: { attributes: ['quantity'] }, 
    }],
  });

  return { code: 200, sales };
};

const getSale = async (id) => {
  const sale = await Sale.findOne({ 
    where: { id },
    include: [
      { 
        model: Product,
        as: 'products',
        attributes: { exclude: ['urlImage'] },
        through: { attributes: ['quantity'] }, 
      },
      {
        model: User,
        as: 'seller',
        attributes: { exclude: ['password'] },
      },
    ],
  });

  return { code: 200, sale };
};
const saleUpdate = async (id, status) => {
  const sale = await Sale.findOne({
    where: { id },
  });
  console.log(sale);

  if (!sale) return { code: 404, message: 'Not Found' };

  await sale.update({ status }, { where: { id } });
  console.log('update');

  return { code: 200, message: 'Alteração feita com sucesso' };
};

module.exports = {
  createSale,
  getSales,
  getSale,
  saleUpdate,
};