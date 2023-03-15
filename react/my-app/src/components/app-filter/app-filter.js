import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="buttton">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-btn-outline-light"
                type="buttton">
                    На повышение
            </button>
            <button 
                className="btn btn-btn-outline-light"
                type="buttton">
                    З/П больше 1000$
            </button>

        </div>
    )
}

export default AppFilter