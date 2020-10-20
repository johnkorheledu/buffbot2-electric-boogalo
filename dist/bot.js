"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFzQztBQUN0QyxtRUFBMEM7QUFFMUMsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUMsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFDLENBQUMsQ0FBQTtBQUN4RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rva2VuLCBvd25lcnN9IGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gJy4vY2xpZW50L0JvdENsaWVudCdcclxuXHJcbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7dG9rZW4sIG93bmVyc30pXHJcbmNsaWVudC5zdGFydCgpIl19