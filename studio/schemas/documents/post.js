export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'youTubeVideoId',
      title: 'YouTube Video Id',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
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
    // {
    //   name: 'body',
    //   title: 'Body Content',
    //   type: 'markdown',
    // },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'blockContent',
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'resource' } }],
    },
  ],
}
