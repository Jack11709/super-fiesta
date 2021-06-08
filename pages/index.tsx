import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>Do you know the Bagel Man?</h1>
        <h2>Coming Soon</h2>
      </HomeContent>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/splash.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #4f4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomeContent = styled.div`
  height: 65%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
