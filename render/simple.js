import React, {PropTypes} from 'react'

const SimpleComponent = ({foo}) => <p>Functional component: {foo}</p>

SimpleComponent.propTypes = {
  foo: PropTypes.string,
}

export default SimpleComponent
