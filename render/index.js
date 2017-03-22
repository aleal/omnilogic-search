import React, {Component, PropTypes} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import classNames from 'classnames/bind'
import style from './style.scss'

const cx = classNames.bind(style)

//eslint-disable-next-line
class HelloWorld extends Component {
  render () {
    const {data, loading} = this.props
    return (
      <div className={cx('sass')}>
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
  search {
    total
    results {
      name
    }
  }
}
`

export default graphql(query)(HelloWorld)
