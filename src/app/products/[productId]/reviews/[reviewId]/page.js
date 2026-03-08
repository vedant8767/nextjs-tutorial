export const generateMetadata = async ({ params }) => {
  const { productId, reviewId } = await params;
  return {
    title: `Product ${productId} Review ${reviewId}`,
  };
};

const page = async ({ params }) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review Page for Product {productId} and review {reviewId}
    </div>
  );
};

export default page;
