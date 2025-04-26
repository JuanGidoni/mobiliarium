// __mocks__/react-router-dom.js
module.exports = {
  ...jest.requireActual("react-router-dom"),
  BrowserRouter: ({ children }) => <div>{children}</div>,
};
