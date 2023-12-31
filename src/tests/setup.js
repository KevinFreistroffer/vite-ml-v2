import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'jest-dom/extend-expect';

if (matchers) {
    expect.extend(matchers);
}

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});
