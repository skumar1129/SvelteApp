<script>
import Home from './Home.svelte'
import Page from './RandomPage.svelte'
// import {routes} from './routes';
// import { Router } from 'svelte-router-spa';
import Router from 'svelte-spa-router'

// easy not found redict but needs # based routing
const routes = {
	'/': Home,
	'/page/:pick': Page,
	'*': Home
}

</script>

<Router {routes} />