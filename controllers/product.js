import {Product, User, Color} from '../models';

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      user_id: req.user.id,
    });
    const productTobeAssignColors = await Product.findOne({
      where: {
        id: product.id
      },
      include: {
        model: Color,
        as: 'products'
      }
    })
    await productTobeAssignColors.addProducts(req.body.colors, {through: 'ProductColors'})
    // await productTobeAssignColors.setProducts(req.body.colors, { through: 'ProductColors' } ) // many to many update
    // await productTobeAssignColors.removeProducts(req.body.colors, { through: 'ProductColors' } ) // many to many delete

    return res.status(200).json({message: "product is created!", data: product})
  } catch (err) {
    console.log("error", err)
    res.status(500).json({
      message: 'Something went wrong!'
    })
  }
};

export const updateProduct = async (req, res) => {
  try {
    await User.findOne()
    let product = await Product.findOne()

    await Product.update(req.body, {
      where: {id: product.id}
    });
    return res.status(200).json({message: "product is updated!"})
  } catch (err) {
    console.log("error", err)
    res.status(500).json({
      message: 'Something went wrong!'
    })
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let x = await Product.destroy({
      where: {id: req.params.id}
    })
    return res.status(200).json({message: "product is deleted!"})
  } catch (err) {
    console.log("error", err)
  }
}

export const getProducts = async (req, res) => {
  try {
    let products = await Product.findAll();
    let users = await User.findAll({
      attributes: {
        exclude: ["password"]
      }
    })
    return res.status(200).json({products: products, users})
  } catch (err) {
    console.log("error", err)
  }
}