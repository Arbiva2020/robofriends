import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hasError: false
        }
    }

    //similar to try:catch block: if anything goes bad, it will run this
    //lifecycle hook
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
  render() {
    if(this.state.hasError){
        return <h1 style={{textAlign:"center", fontWight:"200%", color:"white"}}>Oooooops.... something went wrong</h1>
    }
    return (
      this.props.children
      //"children" is whatever is wrapped inside of "errorBoundry" - 
      //i.e, the component we dont want to break the app in case
      //of crash
    )
  }
}

export default ErrorBoundry;
