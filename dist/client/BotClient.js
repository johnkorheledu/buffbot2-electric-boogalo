"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, '..', 'listeners')
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, '..', 'commands'),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType\`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType\`cancel\` to cancel the command...`,
                    timeout: 'Took too long.',
                    ended: 'Exceeded maximum amount of commands',
                    cancel: 'This command has been cancelled',
                    retries: 3,
                    time: 3e4
                },
                otherwise: ''
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBOEU7QUFFOUUsK0JBQTJCO0FBQzNCLHNDQUEwQztBQWMxQyxNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUEyQi9DLFlBQW1CLE1BQWtCO1FBQ2pDLEtBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUE7UUE1QkMsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNoRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQ2hELENBQUMsQ0FBQTtRQUNLLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw2Q0FBNkM7b0JBQ3JHLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw2Q0FBNkM7b0JBQ3JHLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLEtBQUssRUFBRSxxQ0FBcUM7b0JBQzVDLE1BQU0sRUFBRSxpQ0FBaUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCO1lBQ0QsaUJBQWlCLEVBQUUsZUFBTTtTQUM1QixDQUFDLENBQUE7UUFLRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDVixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNNLEtBQUssQ0FBQyxLQUFLO1FBQ2QsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEMsQ0FBQztDQUNKO0FBaERELDRCQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJ1xyXG5pbXBvcnQgeyBVc2VyLCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcydcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ2Rpc2NvcmQtYWthaXJvJyB7XHJcbiAgICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXJcclxuICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlclxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgICB0b2tlbj86IHN0cmluZ1xyXG4gICAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICAgIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnNcclxuICAgIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsICcuLicsICdsaXN0ZW5lcnMnKVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsICcuLicsICdjb21tYW5kcycpLFxyXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxyXG4gICAgICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcclxuICAgICAgICBoYW5kbGVFZGl0czogdHJ1ZSxcclxuICAgICAgICBjb21tYW5kVXRpbDogdHJ1ZSxcclxuICAgICAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICAgICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICAgICAgYXJndW1lbnREZWZhdWx0czoge1xyXG4gICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGVcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGVcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICdUb29rIHRvbyBsb25nLicsXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogJ0V4Y2VlZGVkIG1heGltdW0gYW1vdW50IG9mIGNvbW1hbmRzJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbDogJ1RoaXMgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxsZWQnLFxyXG4gICAgICAgICAgICAgICAgcmV0cmllczogMyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdGhlcndpc2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXHJcbiAgICB9KVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByb2Nlc3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXQoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKVxyXG4gICAgfVxyXG59Il19