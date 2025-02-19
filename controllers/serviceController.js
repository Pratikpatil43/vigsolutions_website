const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.createService = async (req, res) => {
  const { title, description, price } = req.body;
  const imageUrl = req.file ? req.file.path : "";
  const service = await Service.create({ title, description, price, imageUrl });
  res.json(service);
};
