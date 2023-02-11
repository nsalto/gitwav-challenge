import app from "./index";

import { API_PORT } from "./config/index";
import logger from "./utils/logger";

app.listen(API_PORT, () => {
    logger.info(`[SERVER] running on http://localhost:${API_PORT ?? 5001}`);
});
