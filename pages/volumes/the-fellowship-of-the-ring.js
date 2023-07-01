import { volumes } from "@/resources/lib/data";
import Link from "next/link";
export default function Book1() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link>← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .description
        }
      </p>
      <ul></ul>
    </>
  );
}
