module.exports = {
  projects: {
    app: {
      schema: ['.cache/schema.graphql', '.cache/schema.gql'],
      documents: ['**/**/*.{graphql,js,jsx}', '.cache/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:8000/___graphql'
          }
        }
      }
    }
  }
}
