import { useFiltersState } from "../../pages/store/slices/filtersSlice";
import { createButtonsIndexArray } from "../../utils/pagination";
import PageButton from "./PageButton";
import classes from "./Pagination.module.css";

type PaginationProps = {
    totalPages: number;
    onChange?: (page: number) => void;
};

function Pagination({ totalPages, onChange }: PaginationProps) {
    const { page: activePage } = useFiltersState();

    function handleSetPage(page: number) {
        if (page === 0 || page === totalPages + 1) return;

        if (onChange) onChange(page);
    }

    return (
        <div className={classes.pagesWrapper}>
            <PageButton
                disabled={activePage === 1}
                onClick={() => handleSetPage(activePage - 1)}
            >
                Prev
            </PageButton>
            {createButtonsIndexArray(totalPages, activePage).map(
                (pageNumber) => {
                    if (typeof pageNumber === "number") {
                        return (
                            <PageButton
                                key={pageNumber}
                                isActive={pageNumber === activePage}
                                onClick={() => handleSetPage(pageNumber)}
                            >
                                {pageNumber}
                            </PageButton>
                        );
                    }

                    return <div key={Math.random()}>{pageNumber}</div>;
                }
            )}
            <PageButton
                disabled={activePage === totalPages}
                onClick={() => handleSetPage(activePage + 1)}
            >
                Next
            </PageButton>
        </div>
    );
}

export default Pagination;
