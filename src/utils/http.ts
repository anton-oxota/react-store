const URL_BASE = "https://api.escuelajs.co/api/v1";

type ProductCategory = {
    id: number;
    name: string;
    image: string;
    slug: string;
};

export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: ProductCategory;
    images: string[];
};

export async function getAllProducts(): Promise<Product[]> {
    const response = await fetch(`${URL_BASE}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
}
