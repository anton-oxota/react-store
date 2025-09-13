import classes from "./ProductCard.module.css";

import favSrc from "../../assets/icons/favorite.svg";
import type { Product } from "../../utils/http";

const formatPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
}).format;

function ProductCard({ images, title, description, category, price }: Product) {
    return (
        <div className={classes.productCard}>
            <button className={classes.addToFavorite}>
                <img src={favSrc} alt="" />
            </button>
            <img src={images[0]} alt="" />
            <div className={classes.info}>
                <h3>{title}</h3>

                <p className={classes.description}>{description}</p>

                <p className={classes.category}>{category.name}</p>

                <div className={classes.row}>
                    <p className={classes.price}>{formatPrice(price)}</p>
                    <button className={classes.addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
