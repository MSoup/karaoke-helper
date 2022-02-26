import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/users';

const router: Express = express();

// This is for logging
router.use(morgan('dev'));

// Parse request
router.use(express.urlencoded({extended: false}))

// Takes care of json data
router.use(express.json())

// API rules
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        // Allow GET only for now
        // res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

// Error handling

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The karaoke server is running on port ${PORT}`));