interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager;
    private games: Game[] = [];

    private constructor () {

    }

    public static getInstance(): GameManager {
        if(!this.instance){
            this.instance = new GameManager();
        }
        return this.instance;
    }

    public addGame(game: Game){
        this.games.push(game);
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if(game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

export const gameInstance = GameManager.getInstance();