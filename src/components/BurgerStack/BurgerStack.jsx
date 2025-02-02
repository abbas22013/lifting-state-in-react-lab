// src/components/BurgerStack/BurgerStack.jsx


const BurgerStack = (props) => {
  const { ingredients, onRemoveFromBurger } = props;

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onRemoveFromBurger(ingredient)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;