import StateRouter from 'abstract-state-router';
import makeSvelteStateRenderer from 'svelte-state-renderer';
import sausage from 'sausage-router';
import makeRouter from 'hash-brown-router';

const renderer = makeSvelteStateRenderer();
const stateRouter = StateRouter(renderer, document.querySelector('main'), {
  pathPrefix: '',
  router: makeRouter(sausage())
});

// Store current route and params?
stateRouter.on('stateChangeEnd', (route, parameters) => {
  console.log(route, parameters);
});

export default stateRouter;
