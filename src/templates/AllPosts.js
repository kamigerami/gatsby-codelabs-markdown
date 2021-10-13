import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/Blog/Blog";
import * as styles from "./posts.module.css";
import { Link } from "gatsby";
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft";
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight";
import Layout from "../components/Layout/Layout";
const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : "/blogs/" + (currentPage - 1).toString();
  const nextPage = "/blogs/" + (currentPage + 1).toString();

  const posts = data.allMdx.edges;
  // var getPageNumberPath = null;
  const getPageNumberPath = (currentIndex) => {
    if (currentIndex === 0) {
      return "/blogs";
    }

    return "/blogs/" + (currentIndex + 1);
  };
  return (
    <Layout>
      <div className="w-full ">
        <div className="w-full bg-white backgroundImg-blog relative">
          <div className="max-w-6xl mx-auto ">
            <div className="absolute bottom-0">
              <div className="bg-white text-center md:mx-w-540 px-16 py-16 md:block hidden">
                <h1 className=" text-left text-grey-bluish text-5xl pb-4 font-bold ">
                  Bloggen
                </h1>
                <p className="text-base text-grey-dark font-normal md:text-left text-center">
                  Här skriver vi om allt mellan himmel och jord! Teknik,
                  aktiviteter och annat kul.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full px-10 md:pt-11 pb-11 pt-10 md:hidden block">
          <h1 className=" text-grey-bluish text-5xl pb-4 font-bold text-center">
            Bloggen
          </h1>
          <p className="text-base text-grey-dark font-normal md:text-left text-center">
            Här skriver vi om allt mellan himmel och jord! Teknik, aktiviteter
            och annat kul.
          </p>
        </div>
        <div className="max-w-6xl mx-auto py-28">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {posts.map((post) => {
              return (
                <Blog
                  key={post.node.frontmatter.slug}
                  date={post.node.frontmatter.date}
                  title={post.node.frontmatter.title}
                  description={post.node.frontmatter.description}
                  slug={post.node.frontmatter.slug}
                  blogImage={
                    post.node.frontmatter.og_image !== null &&
                    post.node.frontmatter.og_image.publicURL !== null
                      ? post.node.frontmatter.og_image.publicURL
                      : null
                  }
                />
              );
            })}
          </div>
        </div>
        <div className={styles.paginationWrapper}>
          <Link
            className={
              isFirst ? styles.disabledButton : styles.nextPageClassName
            }
            to={prevPage}
            rel="prev"
          >
            <span>
              <FiChevronLeft className={styles.nextPrev} />
            </span>
          </Link>
          {Array.from({ length: numPages }, (_, i) => {
            let pageNumberClassName = styles.pageNumber;
            if (currentPage === i + 1) {
              pageNumberClassName = styles.currentPageNumber;
            }

            return (
              <Link key={i + 1} to={getPageNumberPath(i)}>
                <spna
                  className={
                    pageNumberClassName
                      ? pageNumberClassName
                      : styles.paginationNumber
                  }
                >
                  {i + 1}
                </spna>
              </Link>
            );
          })}
          <Link
            className={
              isLast ? styles.disabledButton : styles.nextPageClassName
            }
            to={nextPage}
            rel="next"
          >
            <span>
              <FiChevronRight className={styles.nextPrev} />
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
        }
      }
    }
  }
`;
