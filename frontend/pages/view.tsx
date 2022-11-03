import { useEffect, useState } from "react";
import useSWR from "swr";
import { Typography, Stack } from "@mui/material";
import axios from "axios";
import { useAccount, useContract, useSigner } from "wagmi";
import { Domains } from "../artifacts/contracts/contractAddress";

//Importing components
import Card from "../components/Card";

const fetcher = (args: any) => axios.request(args).then((res) => res.data);

interface Metadata {
  description: string;
  image: string;
  length: string;
  name: string;
}

export default function View() {
  const [nfts, setNfts] = useState<Metadata[]>([]);
  const { address, isConnected } = useAccount();

  const { data, error } = useSWR(
    () =>
      isConnected
        ? {
            method: "GET",
            url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
            params: {
              chain: "mumbai",
              format: "decimal",
              token_addresses: Domains,
            },
            headers: {
              accept: "application/json",
              "X-API-Key":
                "0VoalCyiuS54d8OYx0GP7Ae9v7hykEXKNsRSPt4bnF5rY89rUFllBQTS45m5z2fb",
            },
          }
        : null,
    fetcher
  );

  useEffect(() => {
    if (!error) {
      data?.result.forEach((result: any) => {
        setNfts((prevState) => {
          const arr = prevState;
          arr[result.token_id] = JSON.parse(result.metadata);
          return arr;
        });
      });
    }
  }, [address, data]);

  return (
    <div>
      <Typography textAlign="center" variant="h5" gutterBottom>
        View Your Names
      </Typography>
      <Stack spacing={2}>
        {nfts.length !== 0 ? (
          nfts.map((nft, index) => (
            <div key={index}>
              <Card
                name={nft.name}
                description={nft.description}
                image={nft.image}
                id={index}
              />
            </div>
          ))
        ) : (
          <Typography variant="body1">
            You currently own no .lit domains. Mint one now!
          </Typography>
        )}
      </Stack>
    </div>
  );
}
