
const ProductCardShimmer = () => {
  return (
    <div className="m-10  flex flex-wrap justify-center">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="h-[350px] w-[350px] m-5 p-5 bg-gray-300 gap-5 rounded-md flex flex-col animate-pulse"
        />
      ))}
    </div>
  );
};

export default ProductCardShimmer;