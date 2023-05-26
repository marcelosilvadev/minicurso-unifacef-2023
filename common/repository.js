const { NotFound } = require("../server/errors");
class Repository {
  constructor(model) {
    this.model = model;
  }

  async findAll(query, populates, sort) {
    return await this.model
      .find(query ? Object.assign(query, { isDeleted: false }) : { isDeleted: false })
      .populate(populates)
      .sort(sort ? sort : { createdAt: "descending" });
  }

  async findById(id, populates) {
    const model = await this.model.findById(id).populate(populates);
    if (model && model.isDeleted) {
      return;
    }
    return model;
  }

  async create(model) {
    return await model.save();
  }

  async update(id, document) {
    document.updatedAt = new Date().toISOString();

    const options = {
      runValidators: true,
      new: true,
      omitUndefined: true,
    };

    const result = await this.model.findOneAndUpdate(
      { _id: id },
      document,
      options
    );

    return result;
  }

  async delete(id) {
    const document = {};
    document.isDeleted = true;
    document.deletedAt = new Date().toISOString();
    
    const result = await this.model.findOneAndUpdate({ _id: id }, document);

    if (!result) {
      throw new NotFound(`${this.model.modelName} não encontrado`);
    }

    return result;
  }
}

module.exports = Repository;
