"use client";

import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for app router
import React from "react";

export default function TermsConditions() {
  const router = useRouter();

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Ochrana osobných údajov a Podmienky používania
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
      Podmienky používania
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        1. Táto webová stránka je poskytovaná „tak, ako je“, bez akýchkoľvek záruk,
        výslovných alebo predpokladaných. Prevádzkovateľ nenesie zodpovednosť za
        žiadne chyby, technické problémy alebo výpadky stránky.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        2. Používaním tejto stránky vyjadrujete súhlas s týmito podmienkami a
        zaväzujete sa ich dodržiavať. V prípade nesúhlasu s podmienkami prestanete
        stránku používať.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        3. Používateľ je zodpovedný za všetky aktivity vykonané pod svojím
        používateľským účtom a za ochranu prihlasovacích údajov. Prevádzkovateľ
        nenesie zodpovednosť za škody spôsobené neoprávneným použitím účtu.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        4. Obsah na stránke je určený výlučne na osobné, nekomerčné použitie.
        Akékoľvek kopírovanie, distribúcia alebo úprava obsahu bez predchádzajúceho
        písomného súhlasu prevádzkovateľa je prísne zakázaná.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        5. Prevádzkovateľ nezodpovedá za žiadne škody, straty alebo ujmu spôsobenú
        používaním stránky. Používateľ súhlasí, že stránku používa na vlastné riziko.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        6. Táto stránka môže obsahovať odkazy na externé stránky. Prevádzkovateľ
        nenesie zodpovednosť za obsah, dostupnosť ani funkčnosť týchto stránok.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        7. Porušenie týchto podmienok môže viesť k pozastaveniu alebo zrušeniu
        vášho účtu bez predchádzajúceho upozornenia.  
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        8. Prevádzkovateľ si vyhradzuje právo na zmenu týchto podmienok bez
        predchádzajúceho upozornenia. Zmenené podmienky nadobúdajú účinnosť ich
        zverejnením na tejto stránke.  
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.back()} // Navigate back to the previous page
        sx={{ mt: 3 }}
      >
        SPÄŤ
      </Button>
    </Container>
  );
}
