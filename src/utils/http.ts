const URL_BASE = "https://api.escuelajs.co/api/v1";

export type ProductCategory = {
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

export async function getAllCategories(): Promise<ProductCategory[]> {
    const response = await fetch(`${URL_BASE}/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data;
}
