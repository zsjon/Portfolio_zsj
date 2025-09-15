import { describe, expect, test } from 'vitest';

describe('Random Tests', () => {
    test('Random test example', () => {
        expect(Math.random()).toBeLessThan(1);
    });
});