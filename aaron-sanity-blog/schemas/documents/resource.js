export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'resourceLink',
      title: 'Resource Link',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'resourceType' } }],
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
  ],
}
