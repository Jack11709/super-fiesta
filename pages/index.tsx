import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>Do you know the Bagel Man?</h1>
        <div>
          <h2>Follow us on Instagram</h2>
          <a
            href="https://www.instagram.com/doyouknowthebagelman/"
            rel="no-opener noreferrer"
            target="_blank"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              height={60}
              width={60}
            />
          </a>
        </div>
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
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
`
