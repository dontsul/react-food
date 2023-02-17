import { Link } from 'react-router-dom';

const Category = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title truncate">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 50)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div>
    );
};

export default Category;
