import {getNavs, getMovies, getClients} from '../../lib/navs'
import { request } from 'graphql-request'

describe("Test  Navs", () => {

    // test("should make  requet to get getMovies", async () => {
    //     const navs = getClients()
    //     console.log('navs', navs)
    //   expect(1).toEqual(1)
    //   //console.log('expectOutput', expectOutput)
    // });

  //   test("should make direct test", async () => {
  //     const query = `{
  //       Movie(title: "Inception") {
  //         releaseDate
  //         actors {
  //           name
  //         }
  //       }
  //     }`
       
  //     request('https://api.graph.cool/simple/v1/movies', query).then(
  //       (data) => {
  //         console.log('data from server', data, 'query', query)
  //         expect(1).toEqual(1)
  //       }).catch((error) => console.error(error))

  //   //expect(1).toEqual(2)

  //   //console.log('expectOutput', expectOutput)
  // });
    test("should make  requet to get navigation", async () => {

      const navs = getMovies().catch((error) => console.error(error))
      console.log('navs', navs)
    expect(1).toEqual(2)
    //console.log('expectOutput', expectOutput)
  });
   
});