<script>
// import { GRouter, Link, currentRoute } from 'svelte-grouter'
import Home from './Home.svelte'
import Page from './RandomPage.svelte'
import {routes} from './routes';
import { Router } from 'svelte-router-spa';
// import Router from 'svelte-spa-router'

// easy not found redict but needs # based routing
// const routes = {
// 	'/': Home,
// 	'/page': Page,
// 	'*': Home
// }

</script>

<Router {routes} />