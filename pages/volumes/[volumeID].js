import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function VolumeDetails() {
  const router = useRouter();
  const { volumeID } = router.query;

  const volume = volumes.find(({ slug }) => slug === volumeID);

  const volumeIndex = volumes.findIndex(({ slug }) => slug === volumeID);

  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books, color } = volume;

  const VolumeContainer = styled.div`
    background-color: ${(props) => props.color};
  `;

  if (!volume) {
    return null;
  }

  return (
    <VolumeContainer style={{ fontFamily: "var(--font-family)" }} color={color}>
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
    </VolumeContainer>
  );
}
