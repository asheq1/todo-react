import '../../styles/TodoFilter.css'
import PropTypes from 'prop-types';

const TodoFilter = ({filter, setFilter}) => {
    return (
        <div>
            <button 
                className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                onClick={() => setFilter('All')}>All</button>
            <button
                className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`} 
                onClick={() => setFilter('Completed')}>Completed</button>
            <button 
                className={`filter-btn ${filter === 'Incomplete' ? 'active' : ''}`}
                onClick={() => setFilter('Incomplete')}>Incomplete</button>
        </div>
    );
};

TodoFilter.propTypes = {
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default TodoFilter;