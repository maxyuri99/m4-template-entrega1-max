import { Product, ProductCreate, ProductUpdate, ErrorMsg, ProductMethods, SuccessfulMsg } from "./interfaces"

class ProductList implements ProductMethods {
    private products: Product[] = [];
    private id: number = 1;

    private verifyId(productId: number): number {
        return this.products.findIndex((product) => product.id === productId)
    }

    createProduct(data: ProductCreate): Product {
        const newProduct: Product = {
            id: this.id++,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        this.products.push(newProduct)

        return newProduct
    }

    getProducts(): Product[] {
        return this.products;
    }

    getOneProduct(productId: number): Product | ErrorMsg {
        const index = this.verifyId(productId);

        if (index === -1) {
            return { error: "No products found with this ID" }
        }

        return this.products[index]
    }

    updateProduct(productId: number, data: ProductUpdate): Product | ErrorMsg {
        const index = this.verifyId(productId);

        if (index === -1) {
            return { error: "No products found with this ID" }
        }

        const updateProduct = {
            ...this.products[index],
            ...data,
            updatedAt: new Date(),
        };

        this.products.splice(index, 1, updateProduct);

        return updateProduct
    }

    deleteProduct(productId: number): SuccessfulMsg | ErrorMsg {
        const index = this.verifyId(productId);

        if (index === -1) {
            return { error: "No products found with this ID" }
        }

        this.products.splice(index, 1)

        return { message: "Product sucessfully deleted." };
    }

}

export const productList = new ProductList();