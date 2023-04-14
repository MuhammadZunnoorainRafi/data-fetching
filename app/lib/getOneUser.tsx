export default async function getOneUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) return undefined;

  const data = await res.json();
  return data;
}
