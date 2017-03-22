import React, {Component, PropTypes} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import classNames from 'classnames/bind'
import sass from './styleSass.scss'

const cx = classNames.bind(sass)

//eslint-disable-next-line
class HelloWorld extends Component {
  render () {
    const {data, loading} = this.props
    return (
      <div>
        {loading && 'loading'}
        {data && JSON.stringify(data)}
      </div>
    )
  }
}

HelloWorld.propTypes = {
  data: PropTypes.object,
}

export const query = gql`
query {
  product {
    name
  }
}
`

export default graphql(query)(HelloWorld)
