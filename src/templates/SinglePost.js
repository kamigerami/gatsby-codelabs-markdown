import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout/Layout";
import SenasteInlagg from "../components/Home/SenasteInlagg";
const SinglePost = ({ data }) => {
  const blogImage =
    data.mdx.frontmatter.og_image !== null &&
    data.mdx.frontmatter.og_image.publicURL !== null
      ? data.mdx.frontmatter.og_image.publicURL
      : null;

  return (
    <Layout>
      <div>
        <div
          className="min-h-500 relative w-full backgroundImg-detail bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url(" + blogImage + ")" }}
        >
          <div className=" absolute  transform-detail bg-white md:w-2/3 w-full h-44 md:h-72 flex items-center md:px-16 px-6 md:text-left text-center md:my-16">
            <div className="  px-6 text-center">
              <h4 className="font-bold text-4xl mb-4">
                {data.mdx.frontmatter.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pb-10 pt-32 md:pt-0">
          <div className="max-w-2xl px-9 mx-auto md:pt-24 sm:pt-10">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>
        <div>
          <SenasteInlagg title="Nästa inlägg" titlecolor="#000" />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePost;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        description
        slug
        tags
        title
        og_image {
          publicURL
        }
      }
      body
    }
  }
`;
