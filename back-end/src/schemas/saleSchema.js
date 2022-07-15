const Joi = require('joi');

module.exports = Joi.object({
  userId: Joi.number().integer().positive().strict()
.required()
.empty()
.messages({
    'any.required': '400|"userId" is required',
    'number.base': '400|"userId" must be a number',
    'number.empty': '400|"userId" is not allowed to be empty',
    'number.integer': '400|"userId" must be an integer',
  }),
  sellerId: Joi.number().integer().positive().strict()
.required()
.empty()
.messages({
  'any.required': '400|"sellerId" is required',
  'number.base': '400|"sellerId" must be a number',
  'number.empty': '400|"sellerId" is not allowed to be empty',
  'number.integer': '400|"sellerId" must be an integer',
  }),
  totalPrice: Joi.number().required().empty()
.messages({
    'any.required': '400|"totalPrice" is required',
    'number.base': '400|"totalPrice" must be a number',
    'number.empty': '400|"totalPrice" is not allowed to be empty',
    }),
  deliveryAddress: Joi.string().max(100).required().empty()
.messages({
    'any.required': '400|"deliveryAddress" is required',
    'string.base': '400|"deliveryAddress" must be a string',
    'string.empty': '400|"deliveryAddress" is not allowed to be empty',
    'string.max': '400|"deliveryAddress" must not be greather than 100',
    }),
  deliveryNumber: Joi.number().required().empty()
.messages({
    'any.required': '400|"deliveryNumber" is required',
    'number.base': '400|"deliveryNumber" must be a number',
    'number.empty': '400|"deliveryNumber" is not allowed to be empty',
    }),
  cart: Joi.array().items(Joi.object({
    id: Joi.number().integer().positive().strict()
.required()
.empty()
.messages({
    'any.required': '400|"id" is required',
    'number.base': '400|"id" must be a number',
    'number.empty': '400|"id" is not allowed to be empty',
    'number.integer': '400|"id" must be an integer',
  }),
  quantity: Joi.number().integer().positive().strict()
.required()
.empty()
.messages({
    'any.required': '400|"quantity" is required',
    'number.base': '400|"quantity" must be a number',
    'number.empty': '400|"quantity" is not allowed to be empty',
    'number.integer': '400|"quantity" must be an integer',
  }),
  })).min(1).messages({
    'array.empty': '400|"carts" is not allowed to be empty',
    'array.base': '400|"carts" must be an array',
    'array.min': '400|"carts" must contain at least 1 items',
  }),
});