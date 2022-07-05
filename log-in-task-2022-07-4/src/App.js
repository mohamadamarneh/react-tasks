import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Count from './component/count';
import Header from './header';
import Log from './login';
import { AuthProvider , AuthContext } from './authContext';

export function App() {
  const authContext = useContext(AuthContext);
console.log(authContext)
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
