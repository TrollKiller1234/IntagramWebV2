import { Container, Typography, Box, IconButton, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export const metadata = { title: "O mne | ZoskaSnap" };

export default function About() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: 5,
        p: 4,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Profile Picture */}
      <Avatar
        alt="Profilový obrázok"
        src="" // Make sure the image is in 'public/images/'
        sx={{ width: 120, height: 120, mb: 2, mx: "auto" }}
      />

      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        O mne
      </Typography>

      {/* About Me Text */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Ahoj! Som Max a vítam ťa na mojej stránke.  
        Rád sa venujem programovaniu.
        Študujem na SPŠE Zochova.
        Sleduj ma na sociálnych sieťach a buď v obraze s najnovším obsahom!
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <IconButton
          component="a"
          href="https://www.facebook.com/spsezochova/"
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
          href="https://www.instagram.com/spsezochova"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E1306C" }} // Instagram pink color
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}
