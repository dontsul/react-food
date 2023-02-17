import Category from './Category';

const CategoryList = ({ catalog }) => {
    return (
        <div className="list">
            {catalog.map((elem) => {
                return <Category key={elem.idCategory} {...elem} />;
            })}
        </div>
    );
};

export default CategoryList;
