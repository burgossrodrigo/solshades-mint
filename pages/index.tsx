/** @jsxImportSource theme-ui */
import type { NextPage } from "next"
import Head from "next/head"
import { Container, Grid, Typography } from "@material-ui/core"
import dynamic from "next/dynamic"
import { Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const WalletProviderSection = dynamic(
  () => import("../components/WalletProviderSection/WalletProviderSection"),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  return (
    <div sx={{padding: "0 1.6rem",}}>
      <Head>
        <title>Sol Shades Minting Page</title>
        <meta
          name="description"
          content="Solshades official minting page! Get your unique NFT now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


          <Container>
            <Grid container style={{alignItems: "center", justifyContent: "center"}}>
              <Grid item>
                <a href="#">
                  <img width={45} height={45} src="/images/logo.png" />
                </a>
              </Grid>
              <Grid item>
              <Typography variant="h1">Solshades</Typography>
              </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container  style={{alignItems: "center", justifyContent: "center", marginBottom: '15vh'}} >
            <Grid item xs={12} sm={6} md={12} lg={3} xl={3}>
              <img src="https://ipfs.io/ipfs/QmUQbKp97qc1mcfEMdAPU5fVtsdPZrygHTgoGMvbtxqw1B" width={500} height={500} />
                  <Typography variant="h4">The first wearable NFT on the Solana Blockchain.</Typography>
            </Grid>
            <Grid item xs={3} sm={6} md={12} lg={3} xl={3}>
              <img src="https://ipfs.io/ipfs/QmXcH4UFHE7Vzyv4cnPFUvP3biQtyfMpwbadMaSTQ4JDqH" width={500} height={500} />
              <Typography variant="h4"> 7 Style. 350 1/1 shades per style. 2,450 total shade.</Typography>
            </Grid>
            <Grid item xs={3} sm={6} md={12} lg={3} xl={3}>
              <img src="https://ipfs.io/ipfs/QmUqqjS927cyraYfeZbhfKhL9bZ8RLUkR1qksTsPufekiF" width={500} height={500} />
                  <Typography variant="h4">The first wearable NFT on the Solana Blockchain.</Typography>
            </Grid>            
          </Grid>  
        </Container>
        <Container maxWidth="md">
          <hr sx={{margin: "1.6rem 0"}} />
          <WalletProviderSection />
        </Container>
    </div>
  )
}

export default Home
