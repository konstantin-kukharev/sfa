import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Authorize from './Authorize';
import { CookiesProvider } from 'react-cookie';
import { Preferences } from './types/preferences';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import { Login } from '@mui/icons-material';
import SignIn from './Authorize/SignIn';
//import { useCookies } from 'react-cookie';

//https://github.com/bendotcodes/cookies/tree/main/packages/react-cookie


//const [cookies, setCookie] = useCookies(['jwt_token']);
const AuthContext = React.createContext({});

interface IAuth {
  token: string,
  onLogin: Promise<void>,
  onLogout: void,
}

const fakeAuth = () :Promise<any>=>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

const useAuth = () :any => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  //const navigate = useNavigate();
  //const location = useLocation();

  const [token, setToken] = React.useState("");

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    
    //const origin = location.state?.from?.pathname || '/dashboard';
    //navigate(origin);
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider value={{
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();

  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }}  />;
  }

  return children;
};

export default function App(preferences: Preferences) {

  const [token, setToken] = React.useState(null);

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route index element={<></>} />
            <Route path="login" element={<SignIn/>} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
}

// function saveJWT(response) {
//   setCookie('jwt_token', response.headers.authorization, 
//       {
//           path: '/'
//       }
//   );
// }