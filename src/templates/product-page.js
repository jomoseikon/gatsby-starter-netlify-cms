import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import { FaFilePdf } from 'react-icons/fa';

import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";
import "./product-page.css"

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
  main,
  
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro.blurbs} /> 
<div className="columns is-mobile is-multiline" >
<div className="column is-12 column-header">
<div className="tbl__wrap">
 <br />
<table className="table is-striped tbl__inner">
  <tr>
    <td colSpan={2}>●経営者、自治体、議会、各種団体などの会員で構成</td>
  </tr>
  <tr>
    <td colSpan={2}>●毎月1回（8月休会）昼食後に多彩な講師を迎えて講演会を開催（代理出席も可能）</td>
  </tr>
  <tr>
    <td colSpan={2}>●経済誌「プレジデント」（月2回）お届け</td>
  </tr>
  <tr>
    <td>●年会費</td>
    <td>72,000円&emsp;</td>
  </tr>
  <tr>
    <td>●会場</td>
    <td>前橋市内</td>
  </tr>
  <tr>
    <td>●問い合わせ</td>
    <td>群馬政経懇話会事務局（上毛新聞社営業局事業部内）<br />
  TEL: 027-254-9955&emsp;FAX: 027-254-9906（平日&emsp;9:00〜17:00）</td>
  </tr>
</table>
</div>
</div>
</div>
<br />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <a href={`/seikon2024.pdf`} target="_blank" rel="noreferrer" style={{ fontSize:'1.3rem', fontWeight: '400', display:'block', color:'#4d9ef5'}}><FaFilePdf />&emsp;PDF ダウンロード</a><br /><br />
                    <Link className="btn" to="https://jomo-news-form.spiral-site.com/discussion">
                        入会申込みフォーム
                      </Link>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  attachments: PropTypes.shape({
    publicURL: PropTypes.string,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
        }
        

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  },
`;
