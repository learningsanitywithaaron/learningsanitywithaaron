export default {
  name: 'talk',
  title: 'Talk',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videoLink',
      title: 'Link to the Video',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: '4',
    },
    {
      name: 'conference',
      title: 'Conference',
      type: 'string',
    },
    {
      name: 'conferenceLink',
      title: 'Conference Link',
      type: 'string',
    },
    {
      name: 'slidesLink',
      title: 'Slides Link',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'myImage',
      title: 'My Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4,
    },
  ],
}
