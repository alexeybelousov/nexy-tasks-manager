import React from 'react';
import { Redirect } from 'react-router-dom';

import { CORE_PATH, USERS_PATH, TASKS_PATH } from './routingConstants';

import UsersPage from '../../modules/users/UsersPage';
import TasksPage from '../../modules/tasks/TasksPage';

export const CORE_ROUTES = [
  {
    path: CORE_PATH,
    component: () => <Redirect to={{ pathname: TASKS_PATH }} />,
    exact: true,
  },
  {
    path: USERS_PATH,
    component: UsersPage,
  },
  {
    path: TASKS_PATH,
    component: TasksPage,
  },
];
