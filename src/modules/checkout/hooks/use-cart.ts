import { useCallback } from "react";
import { useCartStore } from "../store/use-cart-store"


export const useCart = (tenantSlug: string) => {
    const {
        // getCartByTenant,
        // addProduct,
        // removeProduct,
        // clearCart,
        // clearAllCarts,
    } = useCartStore();
    
    const getCartByTenant = useCartStore((state) => state.getCartByTenant);
    const addProduct = useCartStore((state) => state.addProduct);
    const removeProduct = useCartStore((state) => state.removeProduct);
    const clearCart = useCartStore((state) => state.clearCart);
    const clearAllCarts = useCartStore((state) => state.clearAllCarts);

    const productIds = getCartByTenant(tenantSlug);

    const toggleProduct = useCallback((productId: string) => {
        if (productIds.includes(productId)) {
            removeProduct(tenantSlug, productId);
        } else {
            addProduct(tenantSlug, productId);
        }
    }, [addProduct, removeProduct]);

    const isProductInCart = (productId: string) => {
        return productIds.includes(productId);
    };

    const clearTenantCard = () => {
        clearCart(tenantSlug);
    };

    return {
        productIds,
        addProduct: (productId: string) => addProduct(tenantSlug, productId),
        removeProduct: (productId: string) => removeProduct(tenantSlug, productId),
        clearCart: clearTenantCard,
        clearAllCarts,
        toggleProduct,
        isProductInCart,
        totalItems: productIds.length,
    };
};