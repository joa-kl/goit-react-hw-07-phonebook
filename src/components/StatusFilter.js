import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "redux/constans";
import { Button } from "./Button/Button";
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";


export const StatusFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <div >
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >
                Active
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};