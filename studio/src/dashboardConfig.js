export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6019385029c6b67cce6c6de4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2jrg756q',
                  apiId: 'de18fea1-3355-4b39-8bd6-b81281d6e251'
                },
                {
                  buildHookId: '601938508363b4766d04fe50',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-41fm9ehb',
                  apiId: '26beb96f-8447-4003-abce-a2ad14fee1dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmerrywest/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-41fm9ehb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
