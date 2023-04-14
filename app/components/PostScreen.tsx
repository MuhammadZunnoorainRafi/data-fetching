type userId = {
  id: string;
};

const getUserPosts = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  return res.json();
};

async function PostScreen({ id }: userId) {
  const allPosts: Post[] = await getUserPosts(id);
  return (
    <div>
      {allPosts.map((post) => {
        return (
          <div
            key={post.id}
            className="p-2  border-2 divide-y-2 divide-slate-700 border-opacity-0 hover:border-opacity-100 border-slate-400  bg-slate-200 space-y-1 rounded-sm mb-2"
          >
            <h1 className="font-bold text-slate-900 text-lg">{post.title}</h1>
            <p className="text-slate-800 font-semibold">
              User Id : {post.userId}
            </p>
            <p className="text-slate-700 text-sm">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostScreen;
