/** @jsxImportSource theme-ui */
import type { NextPage } from "next"
import Head from "next/head"
import { Container, Flex } from "theme-ui"
import dynamic from "next/dynamic"

const WalletProviderSection = dynamic(
  () => import("../components/WalletProviderSection/WalletProviderSection"),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  return (
    <div
      sx={{
        padding: "0 1.6rem",
      }}
    >
      <Head>
        <title>Sol Shades Minting Page</title>
        <meta
          name="description"
          content="Solshades official minting page! Get your unique NFT now!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        sx={{
          position: "sticky",
          height: "9rem",
          alignItems: "center",
        }}
      >
        <Container>
          <Flex
            sx={{
              justifyContent: "space-between",
              padding: "1.6rem 0",
            }}
          >
            <Flex
              sx={{
                verticalAlign: "middle",
                fontSize: "2.2rem",
                alignItems: "center",
                justifyContent: "center",
                width: "5rem",
                height: "5rem",
              }}
            >
              <a href="#">
                <img src="/images/logo.png" />
              </a>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <main>
        <Container>
          <header
            sx={{
              marginBottom: "6.4rem",
            }}
          >
            <h1>Solshades</h1>
            <p>
              The first wearable NFT on the Solana Blockchain. 7 Style, 350 1/1
              shades per style, 2,450 total shades. Read more about the project{" "}
              <a href="#">here</a>
            </p>
          </header>
          <hr
            sx={{
              margin: "1.6rem 0",
            }}
          />

          <WalletProviderSection />
        </Container>
      </main>
    </div>
  )
}

export default Home
