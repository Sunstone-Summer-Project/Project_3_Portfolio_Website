const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content'
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
  