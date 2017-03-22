import Simple from './simple'
import Nested from './nested'
import css from './style.css'
import less from './styleLess.less'
import sass from './styleSass.scss'
import React, {Component} from 'react'
import classNames from 'classnames/bind'
import Placeholder from 'vtex.render-runtime/components/Placeholder.js'

const cx = classNames.bind({...css, ...less, ...sass})

//eslint-disable-next-line
class HelloWorld extends Component {
  render () {
    return (
      <div>
        <span className={cx('font-size', 'font-color', 'black-bg')}>
          Supporting CSS, Less, and Sass!
        </span>
        <h3 className="theme">Theme CSS</h3>
        <h3 className={cx('css')}>CSS Module</h3>
        <h3 className={cx('less')}>LESS Module</h3>
        <h3 className={cx('sass')}>SASS Module</h3>
        <Placeholder id="center">
          <Simple foo="Center configured in code" />
        </Placeholder>
        <Placeholder id="button">
          <button>Hello!</button>
        </Placeholder>
        <Placeholder id="footer">
          <Nested />
        </Placeholder>
      </div>
    )
  }
}

export default HelloWorld
