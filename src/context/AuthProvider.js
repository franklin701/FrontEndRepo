import { useState, useEffect } from 'react';
import AuthContext from './auth-context';
import { auth } from '../services/firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged } from 'firebase/auth';


const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    let unsubscriber =  onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);

  
  // las variables globales a las que tenemos acceso
  const authContext = {
    currentUser,
    register,
    login,
    logout
  }
  
  return (
    <AuthContext.Provider value={authContext}>
      { props.children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;