import React, { useState } from 'react'
import {
  Heading,
  Container,
  Button,
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useContract,
  useSigner,
} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ethers } from 'ethers'
import { Domains as CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import CONTRACT_ARTIFACT from '../artifacts/contracts/Domain.sol/Domains.json'

const Home = () => {
  const [domain, setDomain] = useState<String>('')
  const [record, setRecord] = useState<String>('')
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { data: signer, isError, isLoading } = useSigner()
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ARTIFACT.abi,
    signerOrProvider: signer,
  })

  const mintDomain = async () => {
    if (domain.length === 0) return
    try {
      let txn = await contract.register(domain, {
        value: ethers.utils.parseEther('0.1'),
      })
      const receipt = await txn.wait()
      console.log(receipt)
      if (receipt.status === 1) {
        txn = await contract.setRecord(domain, record)
        await txn.wait()
        console.log('Record set! Transaction Hash: ' + txn.hash)

        setRecord('')
        setDomain('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container padding={5} centerContent>
      <Heading>🔥 Lit Name Service</Heading>
      {isConnected ? (
        <>
          <Stack spacing={4}>
            <div> Connected to {address}</div>
            <Button
              variant="solid"
              colorScheme="teal"
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
            <InputGroup size="sm">
              <Input
                placeholder="mysite"
                onChange={(e) => setDomain(e.target.value)}
              />
              <InputRightAddon children=".lit" />
            </InputGroup>
            <Input
              placeholder="Your Domain Record"
              onChange={(e) => setRecord(e.target.value)}
            />
            <Button variant="solid" colorScheme="purple" onClick={mintDomain}>
              Mint
            </Button>
          </Stack>
        </>
      ) : (
        <Button variant="solid" colorScheme="red" onClick={() => connect()}>
          Connect Wallet
        </Button>
      )}
    </Container>
  )
}

export default Home
