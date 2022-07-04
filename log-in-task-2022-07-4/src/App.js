import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Count from './component/count';
import Header from './component/header';
import Log from './component/login';
import { AuthProvider , AuthContext } from './component/authContext';

export function App() {
  const authContext = useContext(AuthContext);
console.log(authContext);
  return (
    <div>
      
      <Header />
      {authContext.auth.email ? <div ><h2>welcome Home</h2><Count /></div> : <Log />}
    </div>

  );
}
function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )


}
 export default AppWithStore;
