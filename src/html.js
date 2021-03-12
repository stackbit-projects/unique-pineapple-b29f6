import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
function startSlideShow(interval) {
//var slides = $('#contain').children();
var slides = $('#contain').children().get();
console.log("0: " + slides);
slides.each(function () {
    console.log($(this));
});
for (var i = 0; i < slides.length; i++) {
    setTimeout(
        function () {
            var slide = $(slides[i]).children();
            console.log("1: " + slide);
            $('#currentImage').attr('src', slide[0].src).fadeIn(interval * 100);
            $('#slideDesc').html(slide[1].innerHTML).fadeIn(interval * 100);
        }, interval * 1000);
}
}