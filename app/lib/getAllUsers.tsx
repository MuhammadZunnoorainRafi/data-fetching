export const getAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    return undefined;
  }
  const data = await response.json();
  return data;
};
