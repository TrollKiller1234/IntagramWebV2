"use client";

import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ArticleIcon from '@mui/icons-material/Article';
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "@/components/ThemeProvider"; // Import the useTheme hook

export default function Navbar() {
  const [value, setValue] = React.useState<string>("/"); // Specify type for state
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toggleTheme } = useTheme(); // Access the theme toggle function

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    console.log("Navigating to:", newValue); // Debugging step
    setValue(newValue);
    if (!session && newValue !== "/auth/registracia" && newValue !== "/auth/prihlasenie" && newValue !== "/" && newValue !== "/o-mne" && newValue !== "/gdpr") {
      router.push("/auth/registracia"); // Redirect to registration if not logged in
    } else {
      router.push(newValue);
    }
  };

  // Non-authenticated navigation paths
  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O mne", value: "/o-mne", icon: <AccessibilityIcon /> },
    { label: "GDPR", value: "/gdpr", icon: <ArticleIcon />},
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Authenticated navigation paths
  const authPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladat", icon: <SearchIcon /> },
    { label: "Pridať", value: "/prispevok", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil", // Use the correct path to the profile page
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  // Decide which paths to use based on authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
          />
        ))}
      </BottomNavigation>

      {/* Theme toggle button */}
      <Box sx={{ position: 'absolute', top: -50, right: 0 }}>
        <IconButton color="inherit" onClick={toggleTheme}>
          {/* Toggle between Light and Dark Mode icons */}
          {session?.user ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}

