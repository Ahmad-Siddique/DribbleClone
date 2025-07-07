import TrendingDesigns from "../../featured-shots";
import CarousalCategory from "../../useable/CarousalCategory";
import BlogDesign from "../BlogDesign";


const AllBlogs = ({blogs}) => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 mt-6 text-center">
        All Blogs
      </h1>
      {/* <ServiceFilter /> */}
      <BlogDesign blogs={blogs} />
      <CarousalCategory />
    </div>
  );
};

export default AllBlogs;
