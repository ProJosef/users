import Link from "next/link";

async function getUser(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return req.json();
}

export default async function user({ params }) {
  const user = await getUser(params.user);

  return (
    <main className="min-h-screen flexcol justify-center items-center gap-6 p-24">
      <Link href={"/"}>
        <button className="my-4">Home</button>
      </Link>
      <div className="bg-gray-700 p-6 flex-col gap-24">
        <h1>Name: {user.name}</h1>
        <h3>
          Adress: {user.address.city}, {user.address.street}
        </h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>Website: {user.website}</h3>
      </div>
    </main>
  );
}
