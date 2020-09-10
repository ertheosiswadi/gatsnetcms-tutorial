import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <Helmet><script src={"/test.js"}/></Helmet>
        <script src={"/assets/js/vendor/jquery-3.3.1.min.js"}/>
        <script src={"/assets/js/vendor/vendor.min.js"}/>
        <script src={"/assets/js/plugins/plugins.js"}/>

        {/* <script
  dangerouslySetInnerHTML={{
    __html: `
            var name = 'world';
            console.log('Hello ' + name);
        `,
  }}
/> */}
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
