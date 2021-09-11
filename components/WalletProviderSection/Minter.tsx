/** @jsxImportSource theme-ui */
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import React from "react"
import { Button, Flex, Spinner, Text } from "theme-ui"
import Countdown from "react-countdown"
import { Typography } from "@material-ui/core"

import useCandyMachine from "../../hooks/useCandyMachine"
import useMinter from "../../hooks/useMinter"

type Props = {}

const MintButton = (props: Props) => {
  const wallet = useWallet()
  const { candyMachine } = useCandyMachine()
  const { isLoading, logs, mint, status } = useMinter()

  const goLiveDate = candyMachine?.data.goLiveDate
    ? new Date(candyMachine?.data.goLiveDate.toNumber() * 1000)
    : null

  const isMintingReady =
    goLiveDate && goLiveDate.getTime() < new Date().getTime()

  const itemsRemaining =
    candyMachine?.data?.itemsAvailable?.toNumber() -
    candyMachine?.itemsRedeemed?.toNumber()

  return (
    <div>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Mint it</Typography>
        <WalletMultiButton />
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Typography variant="h5">
          Candy machine address:{" "}
          <Typography>{process.env.NEXT_PUBLIC_CANDY_MACHINE_ADDRESS}</Typography>
        </Typography>
        {wallet.publicKey ? (
          <Typography variant="h6">
            Wallet address: <Typography>{wallet.publicKey.toString()}</Typography>
          </Typography>
        ) : null}
        <p>
          Network:{" "}
          <Typography variant="h6">
            {process.env.NEXT_PUBLIC_CONNECTION_NETWORK}&nbsp;
            {`https://api.${process.env.NEXT_PUBLIC_CONNECTION_NETWORK}.solana.com/`}
          </Typography>
        </p>
        <br />
        <p>
          Go live date:{" "}
          <Typography variant="h6">{goLiveDate ? goLiveDate.toLocaleString() : "Not set"} </Typography>
        </p>
        <p>
          Countdown:{" "}
          <Typography variant="h6">
            {goLiveDate && isMintingReady ? (
              "Minting started already!"
            ) : goLiveDate ? (
              <Countdown date={goLiveDate?.getTime()} daysInHours={true} />
            ) : (
              "Live date not set"
            )}
          </Typography>
        </p>
      </Flex>
      <Flex
        sx={{
          margin: "3.2rem 0",
          gap: ".8rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            gap: ".8rem",
          }}
        >
          {isLoading && <Spinner size={16} strokeWidth={2} />}
          <Text>{status}&nbsp;</Text>
        </Flex>
        <Button
          onClick={wallet.publicKey ? () => mint() : () => false}
          disabled={!wallet.publicKey || !!isLoading}
          title="Mint one token"
        >
          {wallet.publicKey
            ? itemsRemaining
              ? "Mint one token now!"
              : "Sold out!"
            : "Connect your wallet first"}
        </Button>
        {candyMachine?.data?.price ? (
          <Typography variant="h6">
            Mint price:{" "}
            {candyMachine?.data?.price?.toNumber() / LAMPORTS_PER_SOL} SOL
          </Typography>
        ) : null}
        {itemsRemaining ? (
          <Typography variant="h6">{itemsRemaining} mints remaining</Typography>
        ) : null}
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {logs.map((log, i) => (
          <Text className="log" key={i}>
            <Typography variant="h6">info</Typography>{" "}
            <Text dangerouslySetInnerHTML={{ __html: log }} />
          </Text>
        ))}
      </Flex>
    </div>
  )
}

export default MintButton
