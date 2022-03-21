import * as dotenv from 'dotenv'
import * as path from 'path';

export default function load_env({production}): void {
    console.log("Production set to", production)
    // load environment variables if dev
    if (production !== true) {
        dotenv.config(
            {
                path: path.resolve(__dirname, "../../.env")
            }
        );
      }
    else if (production === false) {
        console.log("Please set production settings appropriately before enabling production")
        throw 'Not ready for production'
    }
    else {
        throw 'Please pass in parameters in the form of {production: true/false}'
    }
}
