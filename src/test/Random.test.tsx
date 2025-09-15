import {render, screen } from "@testing-library/react";
import Random from "./random.tsx";
import { describe, expect, test } from "vitest";

describe('Random Components', () => {
    test('Renders Correctly', () => {
        render(<Random/>);
        screen.debug();
        const element = screen.getByText(/random/i);
        expect(element).toBeInTheDocument();
    })

})
