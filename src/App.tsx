import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Fragment } from 'react';
import { DefaultLayout, PrivateLayout } from './layouts';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Layout;
          const Page = route.component;
          const MainPrivateLayout = route.privateRoute ? PrivateLayout : Fragment;

          if (route.layout === null) {
            Layout = Fragment;
          } else if (route.layout === undefined) {
            Layout = DefaultLayout;
          } else {
            Layout = route.layout;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainPrivateLayout>
                  <Layout>
                    <Page />
                  </Layout>
                </MainPrivateLayout>
              }
            >
              {Array.isArray(route.children) &&
                route.children.map((childRoute, index) => {
                  const ChildPrivateLayout = childRoute.privateRoute ? PrivateLayout : Fragment;
                  const props = childRoute.privateRoute ? { excludeFooter: true, excludeHeader: true } : {};
                  const SubPage = childRoute.component;
                  return (
                    <Route
                      key={index}
                      path={childRoute.path}
                      element={
                        <ChildPrivateLayout {...props}>
                          <SubPage />
                        </ChildPrivateLayout>
                      }
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
