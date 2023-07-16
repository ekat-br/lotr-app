import Link from "next/link";
import { GlobalStyles } from "@/styles";
import styled from "styled-components";

export default function HomePage() {
  const VolumesHeadline1 = styled.h1`
    font-family: Lora;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    color: var(--earth, #282828);
  `;
  const VolumesIntroText = styled.p`
    align-self: stretch;
    color: var(--earth, #282828);
    font-family: Lora;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  const AllVolumesLink = styled(Link)`
    font: var(--font-body);
    color: var(--color-earth);
    text-decoration: none;
  `;

  return (
    <>
      <VolumesHeadline1>Lord of the Rings App</VolumesHeadline1>
      <VolumesIntroText>
        Hi, this is a small fanpage of the book series Lord of the Rings.
        Currently the website is still in the final polish. But you can already
        have a look around.
      </VolumesIntroText>

      <AllVolumesLink href="/volumes">Go to all volumes →</AllVolumesLink>
    </>
  );
}
