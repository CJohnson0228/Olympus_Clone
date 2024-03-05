import { useState, useRef } from 'react'

import { useTheme } from '../styles/ThemeProvider'
import styled from '@emotion/styled'
import gsap from 'gsap'
import Collage from '../assets/imgs/collage.jpg'
import { useGSAP } from '@gsap/react'

import { ImEllo } from 'react-icons/im'
import { LuMenu } from 'react-icons/lu'
import { LuShoppingBag } from 'react-icons/lu'
import { LuSearch } from 'react-icons/lu'


const Landing = () => {
  const ImageRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const [ isLogin, setIsLogin ] = useState<boolean>(true)
  const [ firstName, setFirstName ] = useState<string|null>(null)
  const [ lastName, setLastName ] = useState<string|null>(null)
  const [ email, setEmail ] = useState<string|null>(null)
  const [ password, setPassword ] = useState<string|null>(null)
  const [ birthday, setBirthday ] = useState<string | null>(null)
  
  const ImageBackground = styled.div({
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${Collage})`,
    backgroundRepeat: 'repeat',
    display: 'flex',
    color: theme.colors.common.white,
    fontFamily: '"Lato"'
  })

  const ColorOverlay = styled.div({
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.colors.tertiary[500] + 'ee',
  })

  const TopBar = styled.div({
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    fontSize: theme.spacing(4),
    padding: theme.spacing(1) + ' ' + theme.spacing(2),
  })

  const TopBarContainer = styled.div({
    width: '100vw',
    maxWidth: theme.breakpoints.lg,
    display: 'flex',
    justifyContent: 'space-between',
  })

  const Logo = styled.div({
    display: 'flex',
    alignItems: 'center',
  })

  const TitleGroup = styled.div({
    marginLeft: theme.spacing(2),
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: 900,
  })

  const TitleA = styled.span({
    fontSize: theme.spacing(2),
  })

  const TitleB = styled.span({
    color: theme.colors.secondary[600],
  })

  const SubtitleGroup = styled.div({
    fontSize: theme.spacing(1),
  })

  const ButtonGroup = styled.div({
    display: 'flex',
    fontSize: theme.spacing(3),
  })

  const Button = styled.div({
    padding: theme.spacing(2),
  })

  const LandingContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: `calc(100vh - ${theme.spacing(12)})`,
    width: `calc(100vw - ${theme.spacing(22)})`,
    maxWidth: theme.breakpoints.xl,
  })

  const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const LandingText = styled.div({
    width: '50%'
  })
  const LandingForm = styled.div({
    color: theme.colors.common.text,
    height: '100%',
    backgroundColor: theme.colors.common.background,
    width: '50%'
  })

  useGSAP(() => {
    gsap.to([ImageRef.current], {
      backgroundPositionX: '-1000px',
      backgroundPositionY: '1000px',
      duration: 16,
      repeat: -1,
      ease: 'linear',
    })
  })

  return (
    <ImageBackground ref={ImageRef}>
      <ColorOverlay>
        <TopBar>
          <TopBarContainer>
            <Logo>
              <ImEllo />
              <TitleGroup>
                <TitleA>SOCIAL<TitleB>SPOT</TitleB></TitleA>
                <SubtitleGroup>Social Network</SubtitleGroup>
              </TitleGroup>
            </Logo>
            <ButtonGroup>
              <Button><LuMenu /></Button>
              <Button><LuShoppingBag /></Button>
              <Button><LuSearch /></Button>
            </ButtonGroup>
          </TopBarContainer>
        </TopBar>
        <Container>
          <LandingContainer>
            <LandingText>Landing Text</LandingText>
            <LandingForm>Landing Form</LandingForm>
          </LandingContainer>
        </Container>
      </ColorOverlay>
    </ImageBackground>
  )
}

export default Landing