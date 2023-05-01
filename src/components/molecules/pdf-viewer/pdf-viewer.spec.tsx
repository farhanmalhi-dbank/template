import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PdfViewer from './pdf-viewer';
import { usePdf } from '@mikecousins/react-pdf';

const mockImage = { name: 'testImg', link: 'www.link.com/test.pdf', value: null, type: 'application/pdf' };

jest.mock('@mikecousins/react-pdf', () => ({
  usePdf: jest.fn()
}));

describe('PdfViewer', () => {
  beforeEach(() => {
    (usePdf as jest.Mock).mockImplementation(() => ({
      pdfDocument: {
        numPages: 5
      },
      page: 1
    }));
  });

  afterEach(() => {
    (usePdf as jest.Mock).mockReset();
  });

  it('renders loading message when pdfDocument is not available', async () => {
    (usePdf as jest.Mock).mockImplementation(() => ({
      pdfDocument: undefined
    }));
    const { findAllByTestId } = render(<PdfViewer file={mockImage} />);
    const spinners = await findAllByTestId('pdf-spinner');
    expect(spinners.length).toBeGreaterThan(0);
    spinners.forEach((spinner) => {
      expect(spinner).toBeVisible();
    });
  });

  it('renders canvas and navigation when pdfDocument is available', async () => {
    const { findByTestId } = render(<PdfViewer file={mockImage} />);
    const canvas = await findByTestId('canvas');
    expect(canvas).toBeInTheDocument();
    const previousButton = await findByTestId('test-prev-btn');
    expect(previousButton).toBeInTheDocument();
    const nextButton = await findByTestId('test-next-btn');
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates through pages using the previous and next buttons', async () => {
    const { findByTestId } = render(<PdfViewer file={mockImage} />);
    const previousButton = await findByTestId('test-prev-btn');
    const nextButton = await findByTestId('test-next-btn');
    expect(previousButton).toHaveAttribute('disabled');
    fireEvent.click(nextButton);
    expect(previousButton).not.toHaveAttribute('disabled');
    fireEvent.click(previousButton);
    expect(previousButton).toHaveAttribute('disabled');
  });
});
