// let devConfig = require('./default.js');
import {default as devConfig} from './default.js';

let proConfig = {
    devEnv: true,
    port: 5389,
    apiPort:5389,
    apiHost:"http://127.0.0.1",
    sslModel: false,
    uploadPath:'/../../static/img/'
}
let disConfig = Object.assign({}, devConfig, proConfig);

export default disConfig;