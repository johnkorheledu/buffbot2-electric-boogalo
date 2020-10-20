"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
            category: 'client'
        });
    }
    exec() {
        console.log(`${this.client.user.tag} is now online.`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lcnMvUmVhZHlMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF1QztBQUV2QyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ1YsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUE7SUFDekQsQ0FBQztDQUNKO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlbmVyfSBmcm9tICdkaXNjb3JkLWFrYWlybydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5TGlzdGVuZXIgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigncmVhZHknLHtcclxuICAgICAgICAgICAgZW1pdHRlcjogJ2NsaWVudCcsXHJcbiAgICAgICAgICAgIGV2ZW50OiAncmVhZHknLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NsaWVudCdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBpcyBub3cgb25saW5lLmApXHJcbiAgICB9XHJcbn0iXX0=