import {User} from '../models'


export const updateUser = async (req, res) => {
  try {
    let x = await User.update(req.body, {
      where: {id: req.params.id},
    })
    res.status(200).json({message: "user has been updated!", data: x})
  } catch (err) {
    throw err
  }
};

export const deleteUser = async (req, res) => {
  try {
    let x = await User.destroy({
      where: {id: req.params.id},
    })
    res.status(200).json({message: "user has been deleted!", data: x})
  } catch (err) {
    throw err
  }
};