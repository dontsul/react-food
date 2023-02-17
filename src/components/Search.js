import { useState } from 'react';

const Search = ({ cb = Function.Prototype }) => {
    console.log(cb);
    const [value, setValue] = useState('');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    value={value}
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="btn"
                    style={{ position: 'absolute', top: '0', right: '0' }}
                    onClick={() => {
                        handleSubmit();
                        console.log(handleSubmit);
                    }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
