import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import RegisterAndLogin from './pages/register-login/register-login.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}
unsubscribeFromAuth=null

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef=await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        })
      })
    }
    
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={RegisterAndLogin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
