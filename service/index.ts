import {merge} from 'ramda'
import handleEndpoint from './handleEndpoint'
import {profileCustomHeaders, handleProfileEndpoint} from './handleProfileEndpoint'
import handleRecommendationsEndpoint from './handleRecommendationsEndpoint'
import paths from './paths'
import {buildResolvers, ResolverError} from 'vtex-graphql-builder'
import handlePaymentTokenEndpoint from './handlePaymentTokenEndpoint'

import axios from 'axios'
axios.interceptors.response.use(response => response, function (error) {
  if (error.response) {
    throw new ResolverError(error.response.data, error.response.status)
  }
  throw error
})

Promise = require('bluebird')

const facadeHeaders = {accept: 'application/vnd.vtex.search-api.v0+json'}

export default buildResolvers({
  Query: {
    search: async ({data, root, cookie}, {account, workspace}, originalReq) => {
      // Handle the `book` query here and return the results as {data}.
      const result = await axios.post('https://search.oppuz.com/opz/api/search/v2', {"text":"camisas", "token": "57c9ea8af3f1d3657bc210d1"})
      console.log(result.data)
      return {data: result.data}
    },
  },
})
