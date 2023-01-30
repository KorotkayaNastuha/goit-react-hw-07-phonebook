
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export function Filter() {
    
const dispatch = useDispatch();
const filter = useSelector(getFilter); 
    
const handleChangeFilter = (event) => {
    dispatch(setFilter(event.currentTarget.value))
    }
    
    return <label className={css.filterLabel}>Find contacts by Name
        <input
            type="text"
            name="filter"
            onChange={handleChangeFilter}
            className={css.filterName}
            value={filter}
        ></input></label>
    
};

Filter.propTypes = {
    onFilter:PropTypes.func,
}