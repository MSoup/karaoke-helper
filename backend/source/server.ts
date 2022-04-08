import http from 'http';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import express, {Express} from 'express';

// routes
import authRoute from "./routes/auth";

const router: Express = express();

// Logging
router.use(morgan('tiny'));
// Parse requests
router.use(express.urlencoded({extended: false}))
// Parse JSON
router.use(express.json())
// Cookies
router.use(cookieParser())
// API rules
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        // Allow GET only
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

// import all routes
router.use("/auth", authRoute)

// Error handling

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
    next()
});

/** Server */
const httpServer = http.createServer(router);
const PORT = 6060;
httpServer.listen(PORT, () => console.log(`The karaoke server is running on port ${PORT}`));