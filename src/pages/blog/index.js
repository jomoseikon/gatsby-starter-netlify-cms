import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/home-jumbotron.jpg')`,
            display:"grid",
          }}
        > 
          <img src="/img/seikei_title.svg" 
          alt=""
          style={{
            width:"600px",
            marginTop: "2.5rem",
          }}/>
          <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
                  boxShadow:
                    "rgba(255, 255, 255,0)",
                  backgroundColor: "rgba(255, 68, 0,0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
          >
          </h3>
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                    "rgba(255, 255, 255,0)",
                  backgroundColor: "rgba(255, 68, 0,0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  letterSpacing:"30px",
            }}
          >
            
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
