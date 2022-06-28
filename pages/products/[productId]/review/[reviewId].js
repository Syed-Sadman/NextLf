import { useRouter } from "next/router";

function ReviewId() {
  const router = useRouter(); /// useRouter() hook returns a router object. We need to access router query from this

  const { reviewId, productId } = router.query;

  return (
    <>
      <h1>
        This is a review for {reviewId} and {productId} page
      </h1>

      <h1>git contribute issue </h1>
    </>
  );
}

export default ReviewId;
