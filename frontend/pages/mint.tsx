import { useState, useCallback } from "react";
import {
  Paper,
  Stack,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Typography,
} from "@mui/material";

//For web3
import { useContract, useSigner, useAccount } from "wagmi";
import Artifact from "../artifacts/contracts/Domain.sol/Domains.json";
import { Domains } from "../artifacts/contracts/contractAddress";

export default function Mint() {
  const [domain, setDomain] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [price, setPrice] = useState("0.00");
  const { isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: Domains,
    abi: Artifact.abi,
    signerOrProvider: signer,
  });

  const fetchPrice = useCallback(async () => {
    const price = await contract?.getPrice(domain);
    console.log(price / 10 ** 18);

    setPrice(price.toString());
  }, [domain]);

  const handleMint = async () => {
    setLoading(true);
    try {
      let tx = await contract?.register(domain, {
        value: price,
      });
      await tx.wait();
      await contract?.setRecord(domain, desc);
      await tx.wait();
      console.log("Successfully Minted: ", tx);
      setDomain("");
      setDesc("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography textAlign="center" variant="h5" gutterBottom>
        Mint New Name
      </Typography>
      <Paper elevation={3}>
        <Stack p={5} spacing={2}>
          <TextField
            variant="outlined"
            placeholder="Your domain"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">.lit</InputAdornment>
              ),
            }}
            onChange={(e) => {
              setDomain(e.target.value);
            }}
            onBlur={fetchPrice}
          />
          <TextField
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            variant="outlined"
          />
          <Typography variant="caption">
            Price: {parseInt(price) / 10 ** 18}
          </Typography>

          {loading ? (
            <CircularProgress style={{ margin: "10px auto" }} color="success" />
          ) : (
            <Button onClick={handleMint} variant="contained">
              Mint
            </Button>
          )}
        </Stack>
      </Paper>
    </div>
  );
}
