import {merge} from 'ramda'
import {buildResolvers, ResolverError} from 'vtex-graphql-builder'
import axios from 'axios'

axios.interceptors.response.use(response => response, function (error) {
  if (error.response) {
    throw new ResolverError(error.response.data, error.response.status)
  }
  throw error
})

Promise = require('bluebird')

export default buildResolvers({
  Query: {
    search: async ({data, root, cookie}, {account, workspace}, originalReq) => {
      // Handle the `book` query here and return the results as {data}.
      const result = await axios.post('https://search.oppuz.com/opz/api/search/v2', {"text":"camisas", "token": "57c9ea8af3f1d3657bc210d1"})
      return {data: result.data}
    },
  },
})
