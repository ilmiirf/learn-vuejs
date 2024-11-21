import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/HomePage.vue'),
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import('../views/Project1/TodoList.vue'),
  },
  {
    path: '/random-quote-generator',
    name: 'RandomQuoteGenerator',
    component: () => import('../views/Project2/RandomQuoteGenerator.vue'),
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Project3/AmazingCalculator.vue'),
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: () => import('../views/Project4/AccordionComponent.vue'),
  },
  {
    path: '/form-validation',
    name: 'FormValidation',
    component: () => import('../views/Project5/FormValidation.vue'),
  },
  {
    path: '/password-generator',
    name: 'PasswordGenerator',
    component: () => import('../views/Project6/PasswordGenerator.vue'),
  },
  {
    path: '/progress-steps',
    name: 'ProgressSteps',
    component: () => import('../views/Project7/ProgressSteps.vue'),
  },
  {
    path: '/dad-jokes',
    name: 'DadJokes',
    component: () => import('../views/Project8/DadJokes.vue'),
  },
  {
    path: '/github-user-search',
    name: 'GithubUserSearch',
    component: () => import('../views/Project9/GithubUserSearch.vue'),
  },
  {
    path: '/wiki-clone',
    name: 'WikiClone',
    component: () => import('../views/Project10/WikiClone.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
