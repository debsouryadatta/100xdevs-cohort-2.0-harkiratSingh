import { gameInstance } from "./GameManager";

export const startLogger = () => {
    setInterval(() => {
        gameInstance.logState();
    }, 5000);
}
