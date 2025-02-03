"use client";

import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for app router
import React from "react";

export default function GDPRPage() {
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
        Ochrana osobných údajov (GDPR)
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        1. Prevádzkovateľ webovej stránky spracováva osobné údaje v súlade s
        platnými právnymi predpismi vrátane nariadenia GDPR (Európske všeobecné
        nariadenie o ochrane údajov).
        <br />
        2. Osobné údaje sú spracovávané výlučne na účely:
      </Typography>

      {/* Separate unordered list */}
      <ul>
        <li>Poskytovania služieb na stránke.</li>
        <li>Kontaktovania užívateľov na základe ich požiadaviek.</li>
        <li>
          Zasielania informácií o aktualizáciách alebo novinkách (so súhlasom
          používateľa).
        </li>
      </ul>

      <Typography variant="body1" sx={{ mb: 3 }}>
        3. Používateľ má právo na prístup k svojim údajom, ich opravu, výmaz,
        obmedzenie spracovania alebo prenos údajov.
        <br />
        4. Používateľ má právo podať sťažnosť dozornému orgánu v prípade
        porušenia jeho práv.
        <br />
        5. Osobné údaje nebudú zdieľané s tretími stranami, okrem prípadov
        vyžadovaných zákonom alebo so súhlasom používateľa.
        <br />
        6. Prevádzkovateľ využíva technológie na zabezpečenie ochrany osobných
        údajov, vrátane šifrovania a zabezpečených pripojení.
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Podmienky používania
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        1. Používaním tejto webovej stránky súhlasíte s týmito podmienkami.
        <br />
        2. Obsah na tejto stránke je určený výlučne na osobné použitie.
        <br />
        3. Používateľ je povinný uvádzať pravdivé informácie pri registrácii.
        <br />
        4. Prevádzkovateľ nezodpovedá za prípadné škody spôsobené nesprávnym
        používaním stránky alebo služieb.
        <br />
        5. Používateľ má právo zrušiť svoj účet a požiadať o vymazanie svojich
        údajov.
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
