import * as dotenv from 'dotenv'
import path from 'path'

export default function load_env(production: boolean = false): void {
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
    }
}
