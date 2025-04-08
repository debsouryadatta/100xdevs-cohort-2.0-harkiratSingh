import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNDMzOTdjMy01OTNkLTQwMjctYjExNC0yOTAyNGJhYjAyMTgiLCJpYXQiOjE3MzY2OTczMzB9.BxDMP3FqBsM6TrZcAGYFRA2FlmazFwQJ78mOHskatiM`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}