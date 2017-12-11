import StateRouter from 'abstract-state-router';
import makeSvelteStateRenderer from 'svelte-state-renderer';

const renderer = makeSvelteStateRenderer();
const stateRouter = StateRouter(renderer, document.querySelector('main'));

// Store current route and params?
stateRouter.on('stateChangeEnd', (route, parameters) => {
  console.log(route, parameters);
});

export default stateRouter;
