export const resolvers = {
  Query: {
    jobs: () => {
        return [
            {
                id: '1',
                title: 'Software Engineer',
                description: 'We are looking for a Software Engineer to join our team.',
                company: {
                    id: '1',
                    name: 'Google',
                    description: 'A great company to work for.'
                }
            },
            {
                id: '2',
                title: 'Product Manager',
                description: 'We are looking for a Product Manager to join our team.',
                company: {
                    id: '2',
                    name: 'Facebook',
                    description: 'A great company to work for.'
                }
            }
        ];
    },
  }
}