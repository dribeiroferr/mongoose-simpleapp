const Joi = require('joi');

exports.validateDateRange = (dateRange) => {
  const schema = Joi.object({
    country: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().required()
  });

  return schema.validate(dateRange);
};