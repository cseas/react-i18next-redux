import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./ui";
import { ErrorBoundary, ReduxProvider, TranslationsWrapper } from "./wrappers";

/* React.lazy only supports default exports
 * https://reactjs.org/docs/code-splitting.html#named-exports
 */
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Counter = lazy(() => import("./Counter"));

declare global {
  interface Window {
    SERVER_DATA: any;
  }
}

export function App() {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <TranslationsWrapper>
          <Router>
            <Navbar />
            <Suspense fallback={<div>"Loading.."</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/counter" component={Counter} />
              </Switch>
            </Suspense>
          </Router>
        </TranslationsWrapper>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
