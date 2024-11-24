// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/login.vue'; // Update with your actual path
import LandingPage from './components/landing.vue'; // Correct path for LandingPage
import AboutPage from './components/about.vue';  // Update with your actual path
import LivePage from './components/live.vue'; // Update with your actual path
import RegisterPage from './components/register.vue'; // Update with your actual path
import ContactPage from './components/contact.vue';  // Update with your actual path
import VoterComponent from '@/components/voters.vue'; // Adjust the path as necessary
import DetailsPage from '@/components/details.vue';


const routes = [
  { path: '/', component: LoginPage }, // Login page route
  { path: '/landing', component: LandingPage }, // Set LandingPage as the default route
  { path: '/about', component: AboutPage }, // About page route
  { path: '/live', component: LivePage }, // Live nomination page route
  { path: '/register', component: RegisterPage }, // Register page route
  { path: '/contact', component: ContactPage }, // Result page route
  { path: '/voters', component: VoterComponent }, // Result page route
  { path: '/details', component: DetailsPage }, //
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
