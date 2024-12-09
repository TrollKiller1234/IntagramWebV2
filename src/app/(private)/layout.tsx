import React from "react";  


import Watchdog from "../../components/WatchDog";

export default function PrivateLayout({children} : {children: React.ReactNode }) {
    return <Watchdog>{children} </Watchdog>
}