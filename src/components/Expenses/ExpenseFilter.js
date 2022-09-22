import "./ExpenseFilter.css";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../store/filteredYearSlice";

function ExpenseFilter() {
  const filteredYear = useSelector((state) => state.filteredYear.value);
  const dispatch = useDispatch();

  const changeSelectHandler = (event) => {
    dispatch(update(parseInt(event.target.value)));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={changeSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
