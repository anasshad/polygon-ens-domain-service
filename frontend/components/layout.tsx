import Header from "./Header";
import { Container, Box } from "@mui/material";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
          maxWidth="sm"
        >
          {children}
        </Container>
      </main>
    </>
  );
}
