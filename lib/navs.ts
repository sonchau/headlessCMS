import { request, GraphQLClient } from 'graphql-request'

export async function getNavs() {
    const endpoint = 'https://api-ap-northeast-1.graphcms.com/v2/ckaolt0ej0mfr01z1993obz3m/master'
   
    const query = /* GraphQL */ `
      query Navs {
        navs {
            title
            link
            parent
            extend
        }
      }
    `
   
    const data = await request(endpoint, query)
    console.log('response from server', JSON.stringify(data, undefined, 2))
  }

export async function getMovies() {
    const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr'
 
    const query = /* GraphQL */ `
      query getMovie($title: String!) {
        Movie(title: $title) {
          releaseDate
          actors {
            name
          }
        }
      }
    `
   
    const variables = {
      title: 'Inception',
    }
   
    const data = await request(endpoint, query, variables)
    console.log('getMovies data', JSON.stringify(data, undefined, 2))
}

export async function getClients() {
    console.log("start");
    const graphcms = new GraphQLClient(
        "https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master"
    );

    const { products } = await graphcms.request(
        `
        { 
            products {
            slug
            name
            }
        }
        `
    );
    const response = {
        props: {
        products
        }
    };
    console.log("response", response);
  return response;
}