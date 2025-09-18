import {
    setSortBy,
    type SortByType,
} from "../../pages/store/slices/filtersSlice";
import { useAppDispatch } from "../../pages/store/store";
import Dropdown from "../UI/Dropdown/Dropdown";

export type Option<V> = { value: V; label: string };

const dropdownArray: Option<SortByType>[] = [
    { value: "default", label: "Default" },
    { value: "a-z", label: "A-z" },
    { value: "z-a", label: "Z-a" },
    { value: "price-high", label: "Prise ↑" },
    { value: "price-low", label: "Price ↓" },
];

function SortBy() {
    const dispatch = useAppDispatch();

    function handleSortBy(option: Option<string>) {
        dispatch(setSortBy(option.value as SortByType));
    }

    return (
        <Dropdown options={dropdownArray} onSelect={handleSortBy} />

        // <select onChange={handleSortBy}>
        //     <option value="default">Default</option>
        //     <option value="a-z">A-z</option>
        //     <option value="z-a">Z-a</option>
        //     <option value="price-high">Prise ↑</option>
        //     <option value="price-low">Price ↓</option>
        // </select>
    );
}

export default SortBy;
