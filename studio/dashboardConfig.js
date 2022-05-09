export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6278b76c6b4b2b63c44a74ad',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n9at148c',
                  apiId: '0379ece9-bb69-4fda-bd38-d309bcc9d0bf'
                },
                {
                  buildHookId: '6278b76d762cc16c06450039',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xyjk575x',
                  apiId: '39040b26-c0b2-4ba8-829c-e559ed953cb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alstudio93/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xyjk575x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
