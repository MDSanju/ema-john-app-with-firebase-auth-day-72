import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

// steps for authentication
// ------------------------

// Step-1: initial setup
// => firebase: create project
// => create web app
// => get configuration
// => initialize firebase
// => enable auth method

// -------------------------------------------

// Step-2: setup component
// => create login component
// => create register component
// => create route for login and register

// -------------------------------------------

// Step-3: set auth system
// 1. setup sign in method
// 2. setup sign out method
// 3. user state
// 4. special observer (useEffect(()={...}, []))
// 5. return necessary methods and states from useFirebase

// --------------------------------------------

// Step-4: create auth context hook (useAuth)
// 1. create a auth context
// 2. create context provider
// 3. set context provider context value
// 4. use auth provider
// 5. create useAuth hook

// --------------------------------------------

// step-5: create private route
// 1. create private route
// 2. set private route

// --------------------------------------------

// step-6: re-direct after login
// 1. after login re-direct user to their desired destination
