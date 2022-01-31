import Layout from 'components/layout'
import Container from 'components/container'
import QuickIntro from 'components/quick-intro'


export default function Home(): JSX.Element {
  const avatarURL = '/images/avatar.jpg'
  const greeting = 'Hey, I\'m Sampath'
  const caption = 'Software Engineer'
  const introLines: string[] = [
    'I hail from 90s India',
    'I Code, watch Anime & read Manga',
    'I like Orange & Black'
  ]
  const postScript = 'P.S: Read One-Piece'

  return (
    <Layout>
      <Container>
        <QuickIntro
          avatarUrl={avatarURL}
          greeting={greeting}
          caption={caption}
          introLines={introLines}
          postScript={postScript}
        />
      </Container>
    </Layout>
  )
}

