import { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";

type DropdownPropsType = {
    options: { value: string; label: string }[];
    onSelect?: (option: { value: string; label: string }) => void;
};

function Dropdown({ options, onSelect }: DropdownPropsType) {
    const [activeOption, setActiveOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleCloseDropdown(event: PointerEvent) {
            const target = event.target as Element;

            if (!target.matches("li")) {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", handleCloseDropdown);

        return () => {
            document.removeEventListener("click", handleCloseDropdown);
        };
    }, []);

    function toggleOpen() {
        setIsOpen((prev) => !prev);
    }

    function handleSelectOption(event: React.MouseEvent<HTMLLIElement>) {
        const liElement = event.target as HTMLLIElement;
        const selectedOptionValue = liElement.dataset.option;

        const selectedOption = options.find(
            (opt) => opt.value === selectedOptionValue
        )!;
        setActiveOption(selectedOption);
        toggleOpen();

        if (onSelect) {
            onSelect(selectedOption);
        }
    }

    return (
        <ul className={classes.dropdown}>
            <li onClick={toggleOpen}>{activeOption.label}</li>
            {isOpen && (
                <div className={classes.optionsList}>
                    {options.map(({ value, label }) => (
                        <li
                            className={
                                activeOption.value === value
                                    ? classes.active
                                    : undefined
                            }
                            onClick={handleSelectOption}
                            key={value}
                            data-option={value}
                        >
                            {label}
                        </li>
                    ))}
                </div>
            )}
        </ul>
    );
}

export default Dropdown;
