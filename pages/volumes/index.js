import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleRandomVolumeClick = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  const VolumesHeadline1 = styled.h1`
    font-family: Lora;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    color: var(--earth, #282828);
  `;

  const VolumesHeadline2 = styled.h2`
    color: var(--earth, #282828);
    font: var(--font-headline-2);
  `;

  const VolumesIntro = styled.div`
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    align-self: stretch;
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

  const AllVolumesContainer = styled.div`
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  `;

  const VolumesIntroImage = styled(Image)`
    box-shadow: var(--box-shadow-book);
  `;

  const VolumesIntroImageContainer = styled.ul`
    display: flex;
    padding: 0px 32px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    flex-wrap: wrap;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
      ),
      #ffffff;
  `;

  const VolumesIntroItem = styled.li`
    display: flex;
    flex-direction: column;
  `;

  const VolumesIntroLink = styled(Link)`
    font: var(--font-caption);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    text-decoration: none;
    color: var(--color-earth);
  `;

  return (
    <>
      <VolumesIntro>
        <VolumesHeadline1>The Lord of the Rings</VolumesHeadline1>
        <VolumesIntroText>{introduction}</VolumesIntroText>
      </VolumesIntro>
      <AllVolumesContainer>
        <VolumesHeadline2>All Volumes</VolumesHeadline2>
        <VolumesIntroImageContainer>
          {volumes.map(({ slug, title, cover }) => (
            <VolumesIntroItem key={slug}>
              <VolumesIntroLink href={`/volumes/${slug}`}>
                <VolumesIntroImage
                  src={cover}
                  alt={`Cover image of ${title}`}
                  width={85}
                  height={140}
                />
                {title}
              </VolumesIntroLink>
            </VolumesIntroItem>
          ))}
        </VolumesIntroImageContainer>
      </AllVolumesContainer>
    </>
  );
}
