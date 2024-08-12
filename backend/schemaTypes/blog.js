const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'metadesc',
        type: 'string',
        title: 'Meta Description'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'H1', value: 'h1' },
              { title: 'H2', value: 'h2' },
              { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
              { title: 'Bullet', value: 'bullet' },
              { title: 'Numbered', value: 'number' },
            ],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'URL',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'image',
            options: { hotspot: true }, // Enables the ability to crop and focus on images
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                options: {
                  isHighlighted: true, // Makes this field easily accessible
                },
              },
            ],
          },
        ],
      },
      
      {
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
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true, // Enables the ability to crop and focus on images
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                options: {
                  isHighlighted: true, // Makes this field easily accessible
                },
              },
            ],
          },
         
        ],
      },









      
      {
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{type: 'author'}]
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15,
          calendarTodayLabel: 'Today'
        }
      }
    ]
  };
  
  export default blog;
  