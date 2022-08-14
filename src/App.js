import { Switch, Link } from 'react-router-dom'
import { AboutUsComponent, ContactUsComponent, HomeComponent, NotFoundComponent } from './components';
import RouteMiddleware from './middleware/route-middleware';

function App() {
  const routes = [
    {
      path: '/',
      component: HomeComponent,
      title: 'Homepage',
      exact: true
    },
    {
      path: '/about-us',
      component: AboutUsComponent,
      title: 'About Us'
    },
    {
      path: '/contact-us',
      component: ContactUsComponent,
      title: 'Contact Us'
    },
    {
      path: '*',
      component: NotFoundComponent,
      title: 'Not Found'
    }
  ];

  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
      </ul>
      <Switch>
        {
          routes.map((route, index) => (
            <RouteMiddleware
              key={index}
              path={route.path}
              title={route.title}
              component={route.component}
              exact={route.exact}
            />
          ))
        }
      </Switch>
    </>
  );
}

export default App;
