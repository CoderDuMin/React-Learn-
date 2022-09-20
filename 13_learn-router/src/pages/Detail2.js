import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location)
    return (
      <div>
        <h3>用户详情2{this.props.location.search}</h3>
      </div>
    )
  }
}
