import classes from "./SearchBox.module.css";

import { useSearchParams } from "react-router";
import { useAppDispatch } from "../../pages/store/store";
import { setSearch } from "../../pages/store/slices/filtersSlice";

function SearchBox() {
    const dispatch = useAppDispatch();
    const [, setSearchParams] = useSearchParams();

    function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!event.target) return;

        // Get data from form
        const fd = new FormData(event.target as HTMLFormElement);
        const { search } = Object.fromEntries(fd.entries()) as {
            search: string;
        };

        // Set Filter
        dispatch(setSearch(search));

        // Set URL
        setSearchParams((prevSearchParams) => {
            if (search) {
                prevSearchParams.set("search", search);
                return prevSearchParams;
            }

            prevSearchParams.delete("search");
            return prevSearchParams;
        });
    }

    return (
        <form className={classes.form} onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="Enter product title..."
                name="search"
            />
            <button>Search</button>
        </form>
    );
}

export default SearchBox;
