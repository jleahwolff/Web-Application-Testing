import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from '../src/components/dashboard';
import * as RTL from "@testing-library/react";


test("strike btn is clicking", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/strikes/i));
});

test("ball button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/balls/i));
});

test("foul button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/fouls/i));
});

test("hit button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/hits/i));
});

test("App renders without crashing", () => {
  RTL.render(<App />);
});