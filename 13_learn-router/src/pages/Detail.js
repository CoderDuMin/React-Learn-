import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h3>用户详情:{this.props.match.params.id}</h3>
      </div>
    )
  }
}
