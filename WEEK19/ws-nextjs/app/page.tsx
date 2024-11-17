"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function page() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080/hello");
    newSocket.onopen = () => {
      console.log("Connection established");
      newSocket.send("Hello Server!");
    };
    newSocket.onmessage = (message) => {
      console.log("Message received:", message.data);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return <>hi there</>;
}
