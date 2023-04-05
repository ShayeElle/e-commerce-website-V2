import React from 'react';
import '../styles/filter.css';

const FilterEx = (props) => {
  return (
    <div className='filter'> 
      <div className='filter-result'>{props.count} Products</div>
      <div className='filter-sort'> 
        Order:{" "}
        <select value={props.sort} onChange={props.sortProducts}>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className='filter-category'>
        Filter:{" "}
        <select value={props.category} onChange={props.categoryFilterHandler}>
          <option value=""> All</option>
          <option value="Weights"> Weights </option>
          <option value="Machines"> Machines </option>
          <option value="Accessories"> Accessories </option>
        </select>
      </div>
    </div>
  );
};

export default FilterEx;
