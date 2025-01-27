// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useState } from "react";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function SignUpView() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* GDPR and Terms of Service Links */}
      <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
        Prečítajte si{" "}
        <Link href="/gdpr" passHref legacyBehavior>
          <MuiLink underline="hover" sx={{ cursor: "pointer" }}>
            GDPR
          </MuiLink>
        </Link>{" "}
        a{" "}
        <Link href="/podmienky" passHref legacyBehavior>
          <MuiLink underline="hover" sx={{ cursor: "pointer" }}>
            Podmienky používania
          </MuiLink>
        </Link>
        .
      </Typography>

      {/* Initial Button */}
      {!isButtonClicked && (
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => setIsButtonClicked(true)}
          sx={{ mb: 2 }}
        >
          Kliknite sem, ak súhlasíte s podmienkamy GDPR a iné.
        </Button>
      )}

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        disabled={!isButtonClicked} // Disable until button is clicked
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Google
      </Button>
    </Container>
  );
}



      // {/* Facebook Sign Up */}
      // <Button
      //   variant="outlined"
      //   fullWidth
      //   startIcon={<FacebookIcon />}
      //   sx={{ mb: 4 }}
      // >
      //   Registrovať sa účtom Facebook
      // </Button>

      // {/* Divider */}
      // <Divider sx={{ width: "100%", mb: 2 }}>
      //   <Typography variant="body2">alebo</Typography>
      // </Divider>

      // {/* Email */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Email"
      //   type="email"
      //   variant="outlined"
      //   required
      //   defaultValue="your@email.com"
      // />

      // {/* Password */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Password"
      //   type="password"
      //   variant="outlined"
      //   required
      //   defaultValue="******"
      // />

      // {/* Checkbox */}
      // <FormControlLabel
      //   control={<Checkbox color="primary" />}
      //   label="Chcem dostávať novinky na email"
      //   sx={{ mt: 2 }}
      // />

      // {/* Sign Up Button */}
      // <Button
      //   variant="contained"
      //   fullWidth
      //   size="large"
      //   sx={{ mt: 2, mb: 1 }}
      // >
      //   Registrovať
      // </Button>