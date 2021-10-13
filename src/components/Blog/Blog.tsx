import React from "react";
import {Link} from "gatsby";
const Blog = ({key, date, title, description, blogImage, slug}) => {
  return (
    <>
      <div className="px-6 md:px-3 mb-44 z-10 h-96 md:h-702 transform transition-all hover:scale-105  relative">
        <Link to={`/blogs/${slug}`} key={key}>
          <div className=" md:max-w-392 bg-white  shadow-lg rounded-lg">
            <img
              src={blogImage}
              alt={slug}
              className="rounded-t-lg w-full object-cover h-72"
            />
            <div className="px-6 flex flex-col">
              <p className="pt-4 pb-3 font-normal text-xs text-grey-normal">
                {date}
              </p>
              <h4 className="pb-2 font-semibold text-2xl truncate text-grey-normal ">
                {title}
              </h4>
              <p className="font-normal text-base pb-20 line-clamp">{description}</p>
              <div className='relative'>
              <div className="absolute bottom-4 right-0">
                <Link to={`/blogs/${slug}`}>
                  <div className="flex justify-end">
                    <Link
                      to={`/blogs/${slug}`}
                      className="font-title font-normal md:bg-white md:text-black-dark bg-grey-blue text-white sm:px-4 py-1.5 cursor-pointer hover:shadow-xl px-7 pt-1 pb-1 mb-2 justify-center rounded-full flex items-center border md:border-grey-normal transition-all hover:bg-grey-normal hover:text-white"
                    >
                      Läs mer
                    </Link>
                  </div>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blog;
