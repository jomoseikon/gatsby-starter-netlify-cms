import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import "./FullWidthImage.css"
export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top center",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          justifySelf:"center",
          position:"relative",
        }}
      >
        {img?.url ? (
          <img
            //src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
            gridRow:"1 / -1",
              //gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
              backgroundSize:"cover",
              background:"url(/img/home-jumbotron.jpg)",
              //backgroundImage:"linear-gradient(to right bottom, rgba(68,182,255, .8) rgba(86,67,250, .8)) url(/img/home-jumbotron.jpg)",
              backgroundPosition:"top center",
              zIndex:0
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt="business"
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridRow:"1 / -1",
              //gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
              backgroundSize:"cover",
              background:"url(/img/home-jumbotron.jpg)",
              //backgroundImage:"linear-gradient(to right bottom, rgba(68,182,255, .8) rgba(86,67,250, .1)) url(/img/home-jumbotron.jpg)",
              backgroundPosition:"top center",
              zIndex:0
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt="business"
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              //gridArea: "1/1",
              //width: "580px",
              position: "absolute",
              display: "grid",
              //top:"35%",
              //left:"50%",
              //transform:"translate(-50%, -50%)",
              // This centers the other elements inside the hero component
              justifySelf:"center",
            }}
          >
            {/* Any content here will be centered in the component */}
              <img src="/img/seikei_title.svg" 
          alt="群馬政経懇話会"
          style={{
            width:"600px",
            marginTop: "3rem",
            gridRow:"1 / -1"
          }}/>
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255,0)",
                  backgroundColor: "rgba(255, 68, 0,0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  zIndex:"q",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-1-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255,0)",
                  backgroundColor: "rgba(255, 68, 0,0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  letterSpacing:"20px",
                }}
                >
                {title}
              </h1>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
