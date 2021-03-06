import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Dictionary from './Components/Dictionary';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Socket from './Components/Socket';
import Quiz from './Components/Quiz/Quiz';
import News from './Components/News';
import Map from './Components/Map';

const Content = () => {
  const [user, setUser] = useState('');
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    Socket.on('new connection', (data) => {
      setUser(data.user);
    });

    return () => {
      Socket.off('new connection');
    };
  }, []);

  return (
    <HashRouter>
      <div>
        <Navigation user={user} isAuth={isAuth} setAuth={setAuth} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Dictionary" component={Dictionary} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/News" component={News} />
          <Route path="/Map" component={Map} />
          <Route component={Error} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Content;
