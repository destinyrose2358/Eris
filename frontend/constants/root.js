let api_root;
let api_ws_root;
switch (process.env.NODE_ENV) {
    case "production":
        api_root = 'http://erisapp.herokuapp.com';
        api_ws_root = 'wss://erisapp.herokuapp.com/cable';
        break;
    case "development":
        api_root = 'http://localhost:3000';
        api_ws_root = 'ws://localhost:3000/cable';
        break;
}
export const API_ROOT = api_root;
export const API_WS_ROOT = api_ws_root;
export const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};