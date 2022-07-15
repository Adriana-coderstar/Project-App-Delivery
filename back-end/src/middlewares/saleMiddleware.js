const saleregisterSchema = require('../schemas/saleSchema');

module.exports = (req, res, next) => {
  const { error } = saleregisterSchema.validate(req.body);
  
  if (error) {
    // console.log(error);
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};