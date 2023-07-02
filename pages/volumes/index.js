import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "@/lib/data";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link href={`/volumes/${getRandomElement(volumes).slug}`}>
        Show a random volume
      </Link>
    </>
  );
}
