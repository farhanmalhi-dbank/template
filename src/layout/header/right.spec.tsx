import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Right from './right';

describe('header right component', () => {
  it('it should render right component and call logout() onclick', async () => {
    render(
      <BrowserRouter>
        <Right />
      </BrowserRouter>
    );

    expect(await screen.getByText('Temporary')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('logout-outlined'));

    expect(window.location.pathname).toBe('/');
  });
});
