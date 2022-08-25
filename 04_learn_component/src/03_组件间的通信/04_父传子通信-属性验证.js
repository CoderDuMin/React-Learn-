import React,{Component} from 'react'
//类型检查库
import PropTypes from 'prop-types';

function Cpn(props){
  return (
    <h2>{props.name+'-'+props.age+'-'+props.height}</h2>
  )
}
Cpn.propTypes = {
  name:PropTypes.any,
  age:PropTypes.number
}
class ChildCpn extends Component{
  render(){
    return (
      <h2>{this.props.name+this.props.age}</h2>
    )
  }
}
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age:PropTypes.number
};
export default function App() {
  return (
    <div>
      <Cpn name={'aaa'} age={18} height={1.88} />
      <br/>
      <ChildCpn name={'why'} age={16} />
    </div>
  )
}
