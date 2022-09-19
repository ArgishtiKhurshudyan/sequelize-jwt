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
    const {productId} = req.params;
    const product = await Product.findOne({
      where: {id: productId, user_id:req.user.id}
    })
    if (!product) {
      return res.status(400).json({message: "product not found"})
    }
    await  product.update(req.body)
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
    const {productId} = req.params;
    const product = await Product.findOne({
      where: {id: productId, user_id:req.user.id}
    })
    if (!product) {
      return res.status(400).json({message: "product not found"})
    }

    await product.destroy(req.body)
    return res.status(200).json({message: "product is deleted!"})
  } catch (err) {
    console.log("error", err)
  }
}

export const getProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    console.log("product", productId)
    const product = await Product.findOne({
      where:{id:productId, user_id:req.user.id},
      include:{
        model:Color,
        as:"products"
      }
    });
    const users = await User.findAll({
      attributes: {
        exclude: ["password"]
      },
      where:{id:req.user.id}
    })
    if (!product) {
      res.status(400).json({message:"product is not found"})
    }

    return res.status(200).json({products: product, users})
  } catch (err) {
    console.log("error", err)
  }
}

export const getProducts = async (req, res) => {
  try {
    const {userId} = req.params;
    console.log("user", userId)
    const product = await Product.findAll({
      include:{
        model:Color,
        as:"products"
      },
      where:{
        user_id:req.user.id
      }
    });
    const user = await User.findOne({
      attributes: {
        exclude: ["password"]
      },
      where:{id:userId}
    })
    if (!user) {
      res.status(400).json({message:"user is not found"})
    }

    return res.status(200).json({user: user, products:product})
  } catch (err) {
    console.log("error", err)
  }
}