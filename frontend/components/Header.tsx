import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Breadcrumbs, Link as MaterialLink } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1em",
      }}
    >
      <h2>🔥Lit Naming Service</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <MaterialLink
          component={Link}
          underline="hover"
          color="inherit"
          href="/"
        >
          Home
        </MaterialLink>
        <MaterialLink
          component={Link}
          underline="hover"
          color="inherit"
          href="/mint"
        >
          Mint
        </MaterialLink>
        <MaterialLink
          component={Link}
          underline="hover"
          color="inherit"
          href="/view"
        >
          View
        </MaterialLink>
        <MaterialLink
          component={Link}
          underline="hover"
          color="inherit"
          href="/update"
        >
          Update
        </MaterialLink>
      </Breadcrumbs>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
}
