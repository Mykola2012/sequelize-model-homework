const _ = require('lodash');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhoneInst = await Phone.create(body);
    const preparedPhone = _.omit(createdPhoneInst.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  console.log('first');
};

module.exports.getPhoneById = async (req, res, next) => {
  console.log('first');
};

module.exports.updatePhone = async (req, res, next) => {
  console.log('first');
};

module.exports.updateOrCreatePhone = async (req, res, next) => {
  console.log('first');
};

module.exports.deletePhone = async (req, res, next) => {
  console.log('first');
};
