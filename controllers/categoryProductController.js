const Category = require("../models/CategoryProducts");

exports.createCategoryProduct = async (req, res) => {
  try {
    const categoy = req.body;
    const newCategory = await Category.create(categoy);
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al crear la Categoria de Producto",
      error,
    });
  }
};

exports.getAllCategoryProducts = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.json({ category });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Hubo un error al obtener las categorias de Productos",
      });
  }
};

exports.getCategoryProductById = async (req, res) => {
  try {
    const idCategory = req.params.id;
    const category = await Category.findById(idCategory);
    res.json({ category });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al obtener la categoria de producto" });
  }
};

exports.updateCategoryProductById = async (req, res) => {
  try {
    const idCategory = req.params.id;
    const category = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      idCategory,
      category,
      { new: true }
    );
    res.json({ updatedCategory });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Hubo un error al actualizar la categoria de producto",
      });
  }
};

exports.deleteCategoryProductById = async (req, res) => {
  try {
    const idCategory = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(idCategory);
    res.json({ message: "Categoria de Productos eliminada", deletedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al eliminar la categoria de producto" });
  }
};
