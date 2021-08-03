import * as React from "react"
import styled from "styled-components"

import TopComponent from "../../components/TopComponent"
import Text, { TextSizes, TextWeights } from "../../components/Text"

const FooterSection = styled.section`
  background-color: rgba(209, 151, 255, 0.13);
`

const FooterContainer = styled.div`
  margin: -48px 107px 24px 107px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  grid-column-gap: 18px;
`

const LinkContainer = styled.div`
  margin-bottom: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: var(--c-black);

  :hover {
    color: var(--c-pink);
  }
`

const FooterLinksContainer = styled.div``
const FooterAboutContainer = styled.div``
const FooterSupportContainer = styled.div``

const FooterHeaderContainer = styled.div`
  margin-bottom: 39px;
`

const FooterContentContainer = styled.div``

const EmailContainer = styled.div`
  margin-top: 27px;
`

export default function Footer() {
  return (
    <FooterSection>
      <TopComponent>
        <FooterContainer>
          <FooterLinksContainer>
            <FooterHeaderContainer>
              <Text weight={TextWeights.BOLD}>QUICK LINKS</Text>
            </FooterHeaderContainer>
            <FooterContentContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Home
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    What we do
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    News
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Contact
                  </Text>
                </Link>
              </LinkContainer>
            </FooterContentContainer>
          </FooterLinksContainer>
          <FooterSupportContainer>
            <FooterHeaderContainer>
              <Text weight={TextWeights.BOLD}>SUPPORT</Text>
            </FooterHeaderContainer>
            <FooterContentContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Help center
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Discussions
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Contact
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Blog
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    FAQ
                  </Text>
                </Link>
              </LinkContainer>
            </FooterContentContainer>
          </FooterSupportContainer>
          <FooterAboutContainer>
            <FooterHeaderContainer>
              <Text weight={TextWeights.BOLD}>ABOUT DEFISTARTER</Text>
            </FooterHeaderContainer>
            <FooterContentContainer>
              <LinkContainer>
                <Link href="#">
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    1337 Stallman Drive Muh Freedomsville, 3141592
                  </Text>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <EmailContainer>
                  <Link href="#">
                    <Text
                      size={TextSizes.EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      E: julio@frctls.com T: 0800 420 420 420
                    </Text>
                  </Link>
                </EmailContainer>
              </LinkContainer>
            </FooterContentContainer>
          </FooterAboutContainer>
        </FooterContainer>
      </TopComponent>
    </FooterSection>
  )
}

Footer.propTypes = {}
