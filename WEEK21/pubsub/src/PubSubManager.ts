import { createClient, RedisClientType } from "redis";


export class PubSubManager {
    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscriptions: Map<string, string[]>;

    private constructor() {
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscriptions = new Map();
    }

    public static getInstance(): PubSubManager {
        if(!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    public userSubscribe(userId: string, stock: string) {
        if(!this.subscriptions.has(stock)){
            this.subscriptions.set(stock, []);
        }
        this.subscriptions.get(stock)?.push(userId);

        if(this.subscriptions.get(stock)?.length === 1){
            this.redisClient.subscribe(stock, (message) => {
                this.handleMessage(stock, message);
            });
            console.log(`Subscribed to Redis channel: ${stock}`);
        }
    }

    public userUnSubscribe(userId: string, stock: string) {
        // @ts-ignore
        this.subscriptions.set(stock, this.subscriptions.get(stock)?.filter((sub) => sub !== userId));

        if(this.subscriptions.get(stock)?.length === 0){
            this.redisClient.unsubscribe(stock);
            console.log(`UnSubscribed to Redis channel: ${stock}`);
        }
    }

    private handleMessage(stock: string, message: string) {
        console.log(`Message received on channel ${stock}: ${message}`);
        this.subscriptions.get(stock)?.forEach((sub) => {
            console.log(`Sending message to user: ${sub}`);
        });
    }

    public async disconnect() {
        await this.redisClient.quit();
    }

}