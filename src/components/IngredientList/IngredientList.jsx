// src/components/IngredientList/IngredientList.jsx


const IngredientList = (props) => {
  const { ingredients, onAddToBurger } = props;       // Extract data from props

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onAddToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;