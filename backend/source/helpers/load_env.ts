import * as dotenv from 'dotenv'
import * as path from 'path';
import {Production} from "./load_env.d"

export default function load_env({production}:Production): void {
    console.log("Production set to", production)
    // load environment variables if dev
    if (production !== true) {
        dotenv.config(
            {
                path: path.resolve(__dirname, "../../.env")
            }
        );
      }
    else {
        console.log("Please set production settings appropriately before enabling production")
        throw new Error('Not ready for production')
    }
}
