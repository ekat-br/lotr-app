import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
export default function Volume() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
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
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      ></Image>
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
