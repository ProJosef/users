import Link from "next/link";

async function getUsers() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");

  return req.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-wrap items-center gap-6 p-24">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-700 p-8">
          <Link href={`/${user.id}`}>
            <h1>{user.name}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
}
