import { useRouter } from "next/router";

function ProductId() {
  const router = useRouter(); /// useRouter() hook returns a router object. We need to access router query from this

  const productId = router.query.productId;

  return (
    <>
      <h1>This is the product {productId} page</h1>
    </>
  );
}

export default ProductId;
