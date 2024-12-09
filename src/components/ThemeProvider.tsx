// src/components/ThemeProvider.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create a Context for managing theme state globally
const ThemeContext = createContext<any>(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for the theme, defaults to light theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load theme preference from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Create the MUI themes
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode? "#f00" : "#ffff00"
      },
    },
  });

  // Toggle theme and store the preference in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
