import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
const SenasteInlagg = ({ title, titlecolor }) => {
  var settings = {
    150: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  const slidePerView = 3;

  const data = useStaticQuery(graphql`
    query LatestPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
              tags
              description
              og_image {
                publicURL
              }
            }
            id
          }
        }
      }
    }
  `);
  const posts = data !== undefined ? data.allMdx.edges : "";

  return (
    <div className=" w-full">
      <div className="max-w-7xl mx-auto  pt-20 pb-10">
        <div className="w-full flex items-center justify-center mb-10">
          <h1
            className="font-title font-black text-center md:text-left text-3xl md:text-5xl"
            style={{ color: titlecolor }}
          >
            {title}
          </h1>
        </div>

        <Swiper spaceBetween={10} slidesPerView={3} breakpoints={settings}>
          {posts.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mx-0 pb-20 z-10 relative px-2 transition-all transform hover:scale-105 ">
                  <Link to={`/blogs/${post.node.frontmatter.slug}`}>
                    <div className="md:max-w-392 bg-white rounded-lg">
                      <div className="w-full">
                        {" "} 
                        <img
                          src={
                            post.node.frontmatter.og_image !== null
                              ? post.node.frontmatter.og_image.publicURL
                              : null
                          }
                          alt={post.node.frontmatter.slug}
                          className="w-full h-72 rounded-t-lg object-cover"
                        />
                      </div>
                      <div className="px-6 flex flex-col">
                        <p className="font-title pt-4 pb-3 font-normal text-xs text-grey-normal">
                          {post.node.frontmatter.date}
                        </p>
                        <h4 className="font-title pb-2 font-semibold text-2xl truncate text-grey-normal ">
                          {post.node.frontmatter.title}
                        </h4>
                        <p className="font-title font-normal text-base pb-6 textTruncate">
                          {post.node.frontmatter.description}
                        </p>
                        <div className="pt-6">
                          <Link to={`/blogs/${post.node.frontmatter.slug}`}>
                            <div className="flex justify-end">
                              <a
                                href="/"
                                className="font-title font-normal md:bg-white md:text-black-dark bg-grey-blue  text-white sm:px-4 py-1.5 cursor-pointer hover:shadow-xl px-7 pt-1 pb-1 mb-2 justify-center rounded-full flex items-center border md:border-grey-normal transition-all hover:bg-grey-normal hover:text-white"
                              >
                                Läs mer
                              </a>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SenasteInlagg;
