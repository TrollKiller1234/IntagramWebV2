"use client"

import { Container, Typography, Button, Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function NonAuthHomeView() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        textAlign: "center",
        px: 3,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          p: 4,
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Vitajte na našej platforme!
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Pripojte sa k našej komunite, zdieľajte svoje príspevky a objavujte obsah od ostatných používateľov. 
          Registráciou získate plný prístup k profilom, komentárom a ďalším funkciám.
        </Typography>

        {/* Registration Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => router.push("/auth/registracia")}
          sx={{ mt: 2 }}
        >
          Registrujte sa teraz
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
          Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            color="error"
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#E1306C" }} // Instagram pink color
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
