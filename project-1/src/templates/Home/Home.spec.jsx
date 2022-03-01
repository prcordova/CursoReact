import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('<Home/>', () => {
  it('should render Home page', () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts = ('))
    debug();
  });
});
