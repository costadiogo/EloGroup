import React from 'react';
import { Switch } from 'react-router-dom';
import Leads from '../pages/Leads';
import LeadsList from '../pages/LeadsList';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import PrivateRoute from './routes';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} isClosed={false} />
      <PrivateRoute exact path="/leads" component={Leads} isClosed={false} />
      <PrivateRoute
        exact
        path="/list-leads"
        component={LeadsList}
        isClosed={false}
      />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
