import { Link } from 'react-router-dom';
const Meal = (props) => {
    const { strMeal, idMeal, strMealThumb } = props;
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="card-content">
                    <span className="card-title truncate">{strMeal}</span>
                </div>
                <div className="card-action">
                    <Link to={`/meal/${idMeal}`}>Watch reciepe</Link>
                </div>
            </div>
        </div>
    );
};

export default Meal;
