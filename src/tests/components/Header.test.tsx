import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { customRender, getHeader, getNavItems } from '../test-utils';

describe('Header', () => {
    test('renders headline, nav items, and nav items navigate to expected pages', async function () {
        customRender();
        const navItems = getNavItems();
        expect(navItems).toHaveLength(2);

        expect(within(getHeader()).getByText('ML With TensorFlow', { exact: false })).toBeInTheDocument();
        expect(getNavItems()[0]).toHaveTextContent('Linear Regression');
        expect(getNavItems()[1]).toHaveTextContent('Logistic Regression');

        // Select the "Linear Regression" nav item
        userEvent.click(getNavItems()[0]);
        await waitFor(() => {
            expect(screen.getByTestId('linear-regression-page')).toBeInTheDocument();
        });

        // Header nav items updates
        expect(getNavItems()).toHaveLength(2);
        expect(getNavItems()[0]).toHaveTextContent('Home');
        expect(getNavItems()[1]).toHaveTextContent('Logistic Regression');
        // Select the "Logistic Regression" nav item
        userEvent.click(getNavItems()[1]);
        await waitFor(() => {
            expect(screen.getByTestId('logistic-regression-page')).toBeInTheDocument();
        });

        // Header nav items updates
        expect(getNavItems()).toHaveLength(2);
        expect(getNavItems()[0]).toHaveTextContent('Home');
        expect(getNavItems()[1]).toHaveTextContent('Linear Regression');
        // Select the "Home" nav item
        userEvent.click(getNavItems()[0]);
        await waitFor(() => {
            expect(screen.getByTestId('home-page')).toBeInTheDocument();
        });
        // Header nav items updates
        expect(getNavItems()).toHaveLength(2);
        expect(getNavItems()[0]).toHaveTextContent('Linear Regression');
        expect(getNavItems()[1]).toHaveTextContent('Logistic Regression');
    });

    // TODO: how to resize the window
    test.skip('drawer opens and closes', async function () {
        // render
        customRender();
        // import { resizeWindow } from '@testing-library/jest-dom';
        // resizeWindow(760, 1024);
        expect(true).toBe(true);
        //
    });
});
