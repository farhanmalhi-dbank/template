import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Center from './center';

const dropDownButtonTestId = 'search-dropdown-button';
const dropDownDivTestId = 'search-dropdown-div';
describe('SearchDropDown', () => {
  it('should render Search dropdown', () => {
    render(
      <BrowserRouter>
        <Center />
      </BrowserRouter>
    );
    expect(screen.getByTestId(dropDownButtonTestId)).toBeInTheDocument();
  });
  it('drop down should be disable on start', () => {
    render(
      <BrowserRouter>
        <Center />
      </BrowserRouter>
    );
    expect(screen.getByTestId(dropDownButtonTestId)).toBeInTheDocument();
    expect(screen.getByTestId(dropDownDivTestId)).toHaveClass('dropdown-disable');
  });
  it('drop down should be active on button click and disappear on clicking again', async () => {
    render(
      <BrowserRouter>
        <Center />
      </BrowserRouter>
    );
    expect(screen.getByTestId(dropDownButtonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(dropDownButtonTestId));
    expect(screen.getByTestId(dropDownDivTestId)).toHaveClass('dropdown-active');
    await userEvent.click(screen.getByTestId(dropDownButtonTestId));
    expect(screen.getByTestId(dropDownDivTestId)).toHaveClass('dropdown-disable');
  });

  it('should show cross button when something is in search box', async () => {
    const searchInputTestId = 'global-search-input-test';
    render(
      <BrowserRouter>
        <Center />
      </BrowserRouter>
    );
    expect(screen.getByTestId(searchInputTestId)).toBeInTheDocument();
    await userEvent.type(screen.getByTestId(searchInputTestId), 'Test');
    expect(screen.getByTestId('close-outlined')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('close-outlined'));
    expect(screen.queryByDisplayValue('Test')).not.toBeInTheDocument();
  });

  it('should search on enter after input', async () => {
    const searchInputTestId = 'global-search-input-test';

    render(
      <BrowserRouter>
        <Center />
      </BrowserRouter>
    );
    expect(screen.getByTestId(searchInputTestId)).toBeInTheDocument();
    await userEvent.type(screen.getByTestId(searchInputTestId), 'Test{enter}');
    expect(window.location.pathname).toBe('/search-results');
  });
});
