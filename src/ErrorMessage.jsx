import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
)
ccsac
export default ErrorMessage
