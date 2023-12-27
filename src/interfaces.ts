interface Product {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;  
}

type ProductCreate = Omit<Product, "id" | "createdAt" | "updatedAt">;

type ProductUpdate = Partial<ProductCreate>;

interface ErrorMsg{
    error: string;
}

interface SuccessfulMsg{
    message: string;
}

interface ProductMethods {
    createProduct(data: ProductCreate): Product;

    getProducts(): Product[];

    getOneProduct(productId: number): Product | ErrorMsg;

    updateProduct(productId: number, data: ProductUpdate): Product | ErrorMsg;

    deleteProduct(productId:number): SuccessfulMsg | ErrorMsg;
}

export {Product, ProductCreate, ProductUpdate, ErrorMsg, ProductMethods, SuccessfulMsg}