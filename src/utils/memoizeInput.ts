export const memoizeInput = (userInput: string) => {
  window.localStorage.setItem('input', userInput);
}

export const getMemoizedInput = () => {
  return window.localStorage.getItem('input')
}
