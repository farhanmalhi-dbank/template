import { render } from '@testing-library/react';
import { SkeletonInput, SkeletonButton, SkeletonAvatar } from '.';

describe('All Skeleton types should render fine', () => {
  it('should render the Skeleton Input fine ', () => {
    const { container } = render(<SkeletonInput active={true} />);
    const skeleton = container.querySelector('div');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('ant-skeleton');
    expect(skeleton?.firstChild).toHaveClass('ant-skeleton-input');
  });

  it('should render the Skeleton Button fine ', () => {
    const { container } = render(<SkeletonButton />);
    const skeleton = container.querySelector('div');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('ant-skeleton');
    expect(skeleton?.firstChild).toHaveClass('ant-skeleton-button');
  });

  it('should render the Skeleton Avatar fine ', () => {
    const { container } = render(<SkeletonAvatar />);
    const skeleton = container.querySelector('div');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('ant-skeleton');
    expect(skeleton?.firstChild).toHaveClass('ant-skeleton-avatar');
  });
});
