import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import { Preloader } from '../components/Preloader';
import MealList from '../components/MealList';

const CategoryPage = () => {
    const { name } = useParams();
    const { goBack } = useHistory();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getFilteredCategories(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className="btn" onClick={goBack}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
};

export default CategoryPage;
