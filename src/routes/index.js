import stateRouter from '../services/router';
import auth from '../services/auth';
import App from '../components/App/App.html';
import Dashboard from '../components/Dashboard/Dashboard.html';
import Child from '../components/Child/Child.html';
import SignIn from '../components/SignIn/SignIn.html';
import FormValidation from '../components/demos/FormValidation/FormValidation.html';

const routes = () => {
  stateRouter.addState({
    name: 'signIn',
    route: '/signIn',
    template: SignIn,
    resolve(data, parameters, callback) {
      auth.clear();
      callback();
    },
  });

  stateRouter.addState({
    name: 'app',
    route: '/app',
    template: App,
    resolve(data, parameters, callback) {
      if (auth.getToken()) {
        callback();
      } else {
        callback.redirect('signIn');
      }
    },
  });

  stateRouter.addState({
    name: 'app.dashboard',
    route: '/dashboard',
    template: Dashboard
  });

  stateRouter.addState({
    name: 'app.dashboard.child',
    route: '/child',
    template: Child
  });

  stateRouter.addState({
    name: 'app.formValidation',
    route: '/formValidation',
    template: FormValidation
  });

  stateRouter.on('routeNotFound', (route, parameters) => {
    console.log('routeNotFound', route, parameters);
  });

  stateRouter.on('stateChangeStart', (route, parameters) => {
    console.log('stateChangeStart', route, parameters);
  });

  stateRouter.on('stateChangeEnd', (route, parameters) => {
    console.log('stateChangeEnd', route, parameters);
  });

  stateRouter.on('stateError', (route, parameters) => {
    console.log('stateError', route, parameters);
  });

  stateRouter.evaluateCurrentRoute('signIn');
};

export default routes;
