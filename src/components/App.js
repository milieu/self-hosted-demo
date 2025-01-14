import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TodoMvcWrapper from './todomvc/index';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

const REPO_NAME = "self-hosted-demo";

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
      <Interactive
        as="a"
        href="https://github.com/rafrex/spa-github-pages"
        style={s.repoLink}
        {...s.link}
      >Original credits go to https://github.com/rafrex/spa-github-pages</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path=`/` component={Home} />
        <Route path=`/self-hosted-demo/` component={Home} />
        <Route path=`/example` component={ExampleComponent} />
        <Route path=`/contact-backend-server` component={TodoMvcWrapper} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
          (with some additions from Meredith)
      </div>
    </div>
  );
}
