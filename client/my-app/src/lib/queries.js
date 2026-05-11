import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function fetchJobs() {
    const query = gql `
        query {
            jobs {
                id
                title
                company {
                    name
                }
            }
        }
    `;  
    const {jobs } = await client.request(query);
    return jobs;
}


