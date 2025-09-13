import classes from "./ProductCard.module.css";

import favSrc from "../../assets/icons/favorite.svg";

type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const formatPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
}).format;

function ProductCard({
    image,
    title,
    description,
    category,
    price,
}: ProductCardProps) {
    return (
        <div className={classes.productCard}>
            <button className={classes.addToFavorite}>
                <img src={favSrc} alt="" />
            </button>
            <img src={image} alt="" />
            <div className={classes.info}>
                <h3>{title}</h3>

                <p className={classes.description}>{description}</p>

                <p className={classes.category}>{category}</p>

                <div className={classes.row}>
                    <p className={classes.price}>{formatPrice(price)}</p>
                    <button className={classes.addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
