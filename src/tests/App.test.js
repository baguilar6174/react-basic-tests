import { render } from "@testing-library/react";
import App from "../App";
import React from 'react'

describe('Test in react component App', () => {
    
    test('should show message "Hi, I am Bryan"', () => {
        const greeting = 'Hi, I am Bryan';
        const { getByText } = render( <App greeting={greeting}/> );
        expect( getByText(greeting) ).toBeInTheDocument();
    });
    
})
