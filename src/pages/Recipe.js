import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h2>Category: {recipe.strCategory}</h2>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
                            <iframe
                                width="727"
                                height="409"
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                title={recipe.strMeal}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={goBack}>
                Go back
            </button>
        </>
    );
};

export default Recipe;
