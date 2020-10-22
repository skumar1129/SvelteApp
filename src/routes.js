import Home from './Home.svelte';
import RandomPage from './RandomPage.svelte';

// need npm run start for routes to work
// routes.js
export const routes = [
    // Simple static route
    {
        name: '/',
        component: Home
    },
    // Route with dynamic path parameter
    {
        name: 'page/:id',
        component: RandomPage
    }
    //need 404.html page for not founds
]


