interface UserProfileProps {
  params: Promise<{ id: string }>;
}

export default async function UserProfile({ params }: UserProfileProps) {
  const { id } = await params; //  await the params

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">Profile Page</h1>
      <p className="text-4xl">
        Profile Page of
        <span className="p-2 ml-2 bg-orange-500 rounded-2xl text-black">{id}</span>
      </p>

      <hr />
    </div>
  );
}
