import { Link } from "react-router-dom";
import blogsData from "../../../../data/blogs";

const RecentPost = () => {
  return (
    <>
      {blogsData.slice(3, 6).map((item) => (
        <div className="col-12" key={item.id}>
          <div className="d-flex items-center">
            <img className="size-65 rounded-8" src={item.img} alt="image" />

            <div className="ml-15">
              <h5 className="text-15 lh-15 fw-500">
                <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
              </h5>
              <div className="text-13 lh-1 mt-5">{item.date}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
