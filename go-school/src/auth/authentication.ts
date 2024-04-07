export function authenticate() {
  const userStr = sessionStorage.getItem('user')
  return userStr
}
