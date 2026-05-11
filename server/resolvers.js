export const resolvers = {
  Query: {
    jobs: () => {
        return {
            title: 'Software Engineer',
            id: '1',
            description: 'We are looking for a Software Engineer to join our team.',
        }
    },
  }
}