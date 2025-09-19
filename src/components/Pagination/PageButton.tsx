import classes from "./PageButton.module.css";

type PageButtonProps = {
    isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function PageButton({ isActive, children, ...buttonProps }: PageButtonProps) {
    let pageClass = classes.pageButton;

    if (isActive) pageClass += ` ${classes.active}`;

    return (
        <button {...buttonProps} className={pageClass}>
            {children}
        </button>
    );
}

export default PageButton;
