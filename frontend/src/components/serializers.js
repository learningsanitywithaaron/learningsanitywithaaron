import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import urlBuilder from '@sanity/image-url'
import { zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const urlFor = source =>
  urlBuilder({ projectId: '3nl4otsb', dataset: 'production' }).image(source)

const serializers = {
  types: {
    myImage: props => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
        <figcaption>add caption</figcaption>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      </figure>
    ),

    // below to log out prop values inside sanity block inside gatsby
    // code: props => <pre>{JSON.stringify(props, null, 2)}</pre>,
    // basic code
    // code: props => (
    //   <pre>
    //     <code>{props.node.code}</code>
    //   </pre>
    // ),
    // below shows code but with no syntax highlighting
    // code: props => (
    //   <pre>
    //     <SyntaxHighlighter language={props.node.language}>
    //       {props.node.code}
    //     </SyntaxHighlighter>
    //   </pre>
    // ),
    // but we need to check to make sure for GraphQL that we never get undefined values and if we do return null
    code: ({ node = {} }) => {
      const { code, language } = node
      let myCodeOutput

      if (!code) {
        return null
      }
      if (language === 'sh') {
        myCodeOutput = `$ ${code}`
      } else {
        myCodeOutput = code
      }

      switch (language) {
        case 'sh':
          return (
            <section className='terminal'>
              <div className='fakeMenu'>
                <div className='fakeButtons fakeClose'></div>
                <div className='fakeButtons fakeMinimize'></div>
                <div className='fakeButtons fakeZoom'></div>
              </div>
              <div className='fakeScreen'>
                <p className='line1'>{myCodeOutput}</p>
              </div>
            </section>
          )
          break
        case 'other':
          return <button>other</button>
          break
        default:
          return (
            <SyntaxHighlighter language={language || 'text'} style={zenburn}>
              {myCodeOutput}
            </SyntaxHighlighter>
          )
      }
    },
  },
}

export default serializers
