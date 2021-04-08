import React from 'react';


class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      authorized: false,
      input: '',
      counter: 3
    }
}


  checkAuthorize(){
    if(this.props.user.password === this.state.input){
      this.setState({authorized: true})
    }else{
      // alert('ENTER THE RIGHT PASSWORD!!!')
      this.setState({counter: this.state.counter - 1})
      console.log(this.state.counter)
      if(this.state.counter === 1){
        
        // document.querySelector('.btn').disabled = true
        // document.querySelector('.form-control').disabled = true
       this.enableInput();

      }
    }
  }

  enableInput = () => {
    setTimeout(() => {
    this.setState({counter: 3})
    }, 2000);
  }


  render() {
    
let login = (
  <div className="card">
        <form className="form-inline" action='#' onSubmit={this.checkAuthorize.bind(this)}>
          <div className="form-group">
            <input type="password" className="form-control mx-sm-3" placeholder="Password" onChange={e => this.setState({input: e.target.value})} />
            <button type="submit" className="btn btn-primary" disabled={this.state.counter === 0 ? true : false}>Submit</button>
          </div>
        </form>
      </div>
);

let contact = (

  <div className="card">
        <div className="top">
                <h2 className="name">{this.props.user.name}</h2>
                <img className="circle-img" src={this.props.user.imgURL} alt={this.props.user.name}/>
                
                
            </div>

            <div className="bottom">
            <p>Email: {this.props.user.mail}</p>
                <p>Phone Number: {this.props.user.phone}</p>
            </div>


  </div>

);

return (
  <div id="authorization">
    <h1>{this.state.authorized ? 'Contact Profile' : 'Enter the Password!'}</h1>
    
    {this.state.authorized ? contact : login}
     
  </div>
)
  }
}


export default Login;