/* istanbul ignore file */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, FallBackComponent } from './components';
import Dashboard from './pages/dashboard/dashboard';
import LayoutComponent from './layout/layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route
            path="/"
            element={
              <ErrorBoundary FallbackComponent={FallBackComponent}>
                <Dashboard />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
