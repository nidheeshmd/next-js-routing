//[productId].js or [productId] folder name, this name is for dynamic routing
//eg: http://localhost:3001/product/101
import { useRouter } from 'next/router';

function ProductDetail(){
    const router = useRouter();
    const productId = router.query.productId;
    return <h1>Details about product: { productId }</h1>
}

export default ProductDetail;