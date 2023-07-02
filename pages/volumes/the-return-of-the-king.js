import { volumes } from "@/resources/lib/data";
import Link from "next/link";
export default function Volume() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volume;

  if (!volume) {
    return null;
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}{" "}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
