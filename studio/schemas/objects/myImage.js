import React from 'react'

const preview = (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default {
  name: 'myImage',
  title: 'My Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  // preview: {
  //   component: preview,
  // },
  fields: [
    {
      name: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
      title: 'Alternative Text',
      description:
        'Add short 1-2 sentences describing image - important for SEO and accessibility',
    },
  ],
}
