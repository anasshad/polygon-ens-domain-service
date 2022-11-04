import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";

//For web3
import { useContract, useSigner, useAccount } from "wagmi";
import Artifact from "../artifacts/contracts/Domain.sol/Domains.json";
import { Domains } from "../artifacts/contracts/contractAddress";

export default function Update() {
  const [domain, setDomain] = useState<string>("");
  const [record, setRecord] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const { isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: Domains,
    abi: Artifact.abi,
    signerOrProvider: signer,
  });

  const fetchRecord = async () => {
    try {
      const rec = await contract?.getRecord(domain);
      console.log(rec);
      setRecord(rec);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async () => {
    console.log(contract);

    try {
      const tx = await contract?.setRecord(domain, desc);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing={2} direction="column">
      <Typography variant="h5" textAlign="center" gutterBottom>
        Update Record
      </Typography>
      <TextField
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter Domain Name"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">.lit</InputAdornment>,
        }}
      />
      <div>Current Record: {record}</div>
      <Button variant="contained" onClick={fetchRecord}>
        Fetch Record
      </Button>
      <TextField
        placeholder="Enter record to change"
        onChange={(e) => setDesc(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" onClick={updateRecord}>
        Update Record
      </Button>
    </Stack>
  );
}
