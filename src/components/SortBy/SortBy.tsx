import {
    setSortBy,
    type SortByType,
} from "../../pages/store/slices/filtersSlice";
import { useAppDispatch } from "../../pages/store/store";

function SortBy() {
    const dispatch = useAppDispatch();

    function handleSortBy(event: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setSortBy(event.target.value as SortByType));
    }

    return (
        <select onChange={handleSortBy}>
            <option value="default">Default</option>
            <option value="a-z">A-z</option>
            <option value="z-a">Z-a</option>
            <option value="price-high">Prise ↑</option>
            <option value="price-low">Price ↓</option>
        </select>
    );
}

export default SortBy;
