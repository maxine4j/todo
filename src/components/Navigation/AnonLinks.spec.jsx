import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AnonLinks from './AnonLinks';

describe('AnonLinks', () => {
    it('should render the anon navigation links', () => {
        const dom = render(<MemoryRouter><AnonLinks /></MemoryRouter>);

        expect(dom.getByText('Sign Up')).toBeInTheDocument();
        expect(dom.getByText('Sign In')).toBeInTheDocument();
    })
})