import Food from '../Model/mealsModel.js'; 

export const createFoodItem = async (req ,res) => {
  try {
    const newFood = await Food.create({
      id: req.id,
      name:req.name,
      image: req.image,
      description: req.description,
      ingredients: req.ingredients,
      calories: req.calories,
      cuisine: req.cuisine
    });
    return res.send(newFood)
  } catch (error) {
    console.error('Error creating food item:', error);
    return res.send(`Error`);
  }
};


export const getAllFoodItems = async (req ,res) => {
  try {
    const foodItems = await Food.find();
    return res.send(foodItems)
  } catch (error) {
    return res.send(`Error`);
  }
};


export const updateFoodItem = async (req ,res) => {
  try {
    const updatedFood = await Food.findOneAndUpdate({ id: req.id }, update, { new: true });
   return res.send(updateFoodItem)
  } catch (error) {
    return res.send(`Error`);
  }
};


export const deleteFoodItem = async (req ,res) => {
  try {
    const deletedFood = await Food.findOneAndDelete({ id: req.id });
    return res.send(`successfully deleted`)
  } catch (error) {
    return res.send(`Error`);
  }
};


