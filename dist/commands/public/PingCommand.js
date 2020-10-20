"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            category: 'public',
            description: {
                context: 'Check the latency of the ping to the Discord API',
                usage: 'ping',
                examples: [
                    'ping'
                ]
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        return message.util.send(`${this.client.ws.ping}`);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvcHVibGljL1BpbmdDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXdDO0FBR3hDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxrREFBa0Q7Z0JBQzNELEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUVmLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0I7UUFDeEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDdEQsQ0FBQztDQUNKO0FBbkJELDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwaW5nJywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3BpbmcnXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwdWJsaWMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ0NoZWNrIHRoZSBsYXRlbmN5IG9mIHRoZSBwaW5nIHRvIHRoZSBEaXNjb3JkIEFQSScsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogJ3BpbmcnLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAncGluZydcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT57XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGAke3RoaXMuY2xpZW50LndzLnBpbmd9YClcclxuICAgIH1cclxufSJdfQ==