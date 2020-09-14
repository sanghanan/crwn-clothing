import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import RegisterAndLogin from './pages/register-login/register-login.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {
unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser}=this.props;
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef=await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
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
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={RegisterAndLogin}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
