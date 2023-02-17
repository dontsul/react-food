import Meal from './Meal';

const MealList = ({ meals }) => {
    return (
        <div className="list">
            {meals.map((meal) => {
                return <Meal key={meal.idMeal} {...meal} />;
            })}
        </div>
    );
};

export default MealList;
