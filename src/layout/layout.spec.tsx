import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';

describe('Layout test', () => {
  it('should render fine', async () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
