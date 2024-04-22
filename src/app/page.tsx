import Link from "next/link";
import { db } from "~/server/db";
 
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/ef6580b2-3a9b-4cf8-948d-3e654bb9319b-wiw8j4.jpg",
  "https://utfs.io/f/5e2d09da-5293-43f3-9096-fa448f675649-3cz4s0.jpg",
  "https://utfs.io/f/a34351a7-726d-4679-a2e5-97933a0a2c7d-3cz4sv.jpg",
  "https://utfs.io/f/a5ecffb2-439f-4058-ac27-17f62c38f36a-3cz4tq.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const post = await db.query.posts.findMany();

  console.log(post);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> {
        post.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))
      }
      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
        </div>
        ))
      }
      </div>
    </main>
  );
}
