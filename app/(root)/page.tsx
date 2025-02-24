import React from "react";

const users = [
  {
    id: 1,
    name: "Musawir Raji",
    email: "musawir.raji@gmail.com",
    address: "207 Main St",
  },
  {
    id: 2,
    name: "Raji Roqeeb",
    email: "example@rajiroqeeb.com",
    address: "189 Main St",
  },
  {
    id: 3,
    name: "Saphire Doe",
    email: "example@saphiredoe.com",
    address: "200 Main St",
  },
  {
    id: 4,
    name: "Atoyebi Joshua",
    email: "example@jatoy.com",
    address: "90 Main St",
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const page = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query?.toLowerCase()),
  );

  return (
    <section className="flex-1 mt-5 ">
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="bg-dark-200 border border-gray-600 flex items-center justify-between p-4 rounded-[10px] mb-4"
        >
          <div>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.address}</p>
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded-[10px] text-white">
            View
          </button>
        </div>
      ))}
    </section>
  );
};

export default page;
