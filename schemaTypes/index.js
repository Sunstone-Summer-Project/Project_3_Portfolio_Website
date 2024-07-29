export const schemaTypes = [
    {
        name: 'author',
        type: 'document',
        title: 'Author',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name'
          },
          {
            name: 'bio',
            type: 'text',
            title: 'Bio'
          }
        ]
      },
]