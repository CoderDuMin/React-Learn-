import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      books:[
        {
          name:'aa',
          price:15
        },
        {
          name:'bb',
          price:15
        },
        {
          name:'cc',
          price:15
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          <h2>没有Fragment</h2>
        </div>
        <Fragment key={'key'}>
          <h2>有Fragment</h2>
        </Fragment>
        {/* Fragment短语法 */}
        < >
          <h2>Fragment短语法</h2>
        </>
        {
          this.state.books.map(item=>{
            return (
              <Fragment key={item.name}>
                <h2>{item.name}-{item.price}</h2>
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}
