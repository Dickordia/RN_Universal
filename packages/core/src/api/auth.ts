export function loginUser(username: string, password: string, onSuccess: any, onFailure: any) {
  const isValidUser = username === 'sepivtorak' || username === 'idanilov'
  const isValidCredentials = isValidUser && password === 'Portal1!';
console.log(isValidUser)
console.log(isValidCredentials)
  if (isValidCredentials) {
    onSuccess();
  } else {
    onFailure();
  }
};
