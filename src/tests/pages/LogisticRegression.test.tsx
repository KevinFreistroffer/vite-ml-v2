import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { customRender, getNavItems } from '../test-utils';
import userEvent from '@testing-library/user-event';
import 'jest-dom/extend-expect';

describe('Logistic Regression page', () => {
    // test Logistic Regression page is rendered
    test('renders the Logistic Regression page', () => {
        customRender();
        // const header = getHeader();
        const navItems = getNavItems();
        expect(navItems).toHaveLength(2);
        expect(navItems[0]).toHaveTextContent('Home');
        expect(navItems[1]).toHaveTextContent('Linear Regression');
        userEvent.click(navItems[0]);
        expect(screen.getByTestId('logistic-regression-page')).toBeInTheDocument();
    });
});
