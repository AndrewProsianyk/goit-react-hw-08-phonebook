import { useEffect, Suspense, lazy } from 'react';
// import shortid from 'shortid';
import { connect, useDispatch,useSelector } from 'react-redux';
import AppBar from './AppBar/AppBar'
import { Switch, Redirect } from 'react-router';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import authSelectors from './redux/auth/auth-selectors';
import authOperations from '../src/redux/auth/auth-operations';
import './App.module.css'

const HomeView = lazy(() => import('./Views/HomeView'));
const RegistrationView = lazy(() => import('./Views/RegistrationView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const ContactsView = lazy(() => import('./Views/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.loadUser());
  }, [dispatch]);

  return (
    <>
      {isLoadingUser ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>LOADING</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
                <RegistrationView />
              </PublicRoute>
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView/>
              </PrivateRoute>
              <PublicRoute>
                <Redirect to="/" />
              </PublicRoute>
            </Suspense>
          </Switch>
        </div>
      )}
      </>
  );
};

export default connect()(App);
