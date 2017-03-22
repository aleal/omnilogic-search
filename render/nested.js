import React, {PropTypes} from 'react'
import Placeholder from 'vtex.render-runtime/components/Placeholder.js'

export default function NestedComponent ({title}) {
  return (
    <div>
      <p>{title || 'Title'}</p>
      <Placeholder id="nested" >
        <p>No default component on nested</p>
      </Placeholder>
    </div>
  )
}

NestedComponent.propTypes = {
  title: PropTypes.string,
}
