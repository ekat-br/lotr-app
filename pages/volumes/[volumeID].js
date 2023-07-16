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

  if (!volume) {
    return <div>Volume not found.</div>;
  }

  const VolumeContainer = styled.div`
    display: flex;
    padding: 48px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
  `;

  const VolumeDetailContainer = styled.div`
    display: flex;
    padding: 24px 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: ${(props) => props.color};
  `;

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

  const VolumesIntro = styled.div`
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    align-self: stretch;
  `;

  const BookList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    list-style: none;
  `;
  const BookTitle = styled.p`
    font: var(--font-title);
    color: var(--color-clouds);
  `;

  const BookCaption = styled.p`
    font: var(--font-caption);
    color: var(--color-clouds);
  `;

  const AllVolumesLink = styled(Link)`
    font: var(--font-body);
    color: var(--color-earth);
    text-decoration: none;
  `;

  const VolumeLinkCaptionItalic = styled.div`
    font: var(--font-caption--italic);
    color: var(--color-earth);
    text-decoration: none;
  `;
  const VolumeLinkCaption = styled.div`
    font: var(--font-caption);
    color: var(--color-earth);
  `;

  const PrevLink = styled(Link)`
    text-decoration: none;
    text-align: right;
  `;

  const NextLink = styled(Link)`
    text-decoration: none;
    text-align: right;
  `;

  const NextVolumeNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
  `;

  const PrevVolumeNav = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  `;

  const VolumeNavigation = styled.div`
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  `;

  return (
    <VolumeContainer style={{ fontFamily: "var(--font-family)" }} color={color}>
      <AllVolumesLink href="/volumes">← All Volumes</AllVolumesLink>
      <VolumesIntro>
        <VolumesHeadline1>{title}</VolumesHeadline1>
        <VolumesIntroText>{description}</VolumesIntroText>
      </VolumesIntro>

      <VolumeDetailContainer color={color}>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li
              key={title}
              style={{
                fontFamily: "var(--font-family)",
              }}
            >
              <BookCaption>{ordinal}</BookCaption>{" "}
              <BookTitle>{title}</BookTitle>
            </li>
          ))}
        </BookList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        ></Image>
      </VolumeDetailContainer>
      <VolumeNavigation>
        <PrevVolumeNav>
          {previousVolume ? (
            <PrevLink href={`/volumes/${previousVolume.slug}`}>
              <VolumeLinkCaptionItalic>
                ← Previous Volume{" "}
              </VolumeLinkCaptionItalic>
              <VolumeLinkCaption>{previousVolume.title} </VolumeLinkCaption>
            </PrevLink>
          ) : null}
        </PrevVolumeNav>
        <NextVolumeNav>
          {nextVolume ? (
            <NextLink href={`/volumes/${nextVolume.slug}`}>
              <VolumeLinkCaptionItalic>Next Volume →</VolumeLinkCaptionItalic>{" "}
              <VolumeLinkCaption>{nextVolume.title} </VolumeLinkCaption>
            </NextLink>
          ) : null}
        </NextVolumeNav>
      </VolumeNavigation>
    </VolumeContainer>
  );
}
