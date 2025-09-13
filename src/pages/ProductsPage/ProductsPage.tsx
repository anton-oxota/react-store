import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductsPage.module.css";

const productCard = {
    id: 1,
    title: "Majestic Mountain Graphic T-Shirt",
    price: 44,
    description:
        "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
    category: "Clothes",

    image: "https://i.imgur.com/QkIa5tT.jpeg",
};

function ProductsPage() {
    return (
        <section className={classes.products}>
            <div className="container">
                <h1>Products Page</h1>

                <div className={classes.wrapper}>
                    <ProductCard {...productCard} />
                    <ProductCard {...productCard} />
                    <ProductCard {...productCard} />
                    <ProductCard {...productCard} />
                </div>
            </div>
        </section>
    );
}

export default ProductsPage;
