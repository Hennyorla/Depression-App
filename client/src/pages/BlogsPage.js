import Blogs from "../components/blogsComponent/Blogs";

const BlogsPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <Blogs />
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default BlogsPage;
