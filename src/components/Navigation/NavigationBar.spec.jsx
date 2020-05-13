import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import { MemoryRouter } from 'react-router-dom';


describe('NavigationBar', () => {
    it('should render all the navigation links', () => {
        const dom = render(<MemoryRouter><NavigationBar /></MemoryRouter>);

        expect(dom.getByText('Home')).toBeInTheDocument();
        expect(dom.getByText('Sign Up')).toBeInTheDocument();
        expect(dom.getByText('Sign In')).toBeInTheDocument();
    });
});