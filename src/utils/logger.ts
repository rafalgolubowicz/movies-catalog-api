import pino from "pino";
import pinoPretty from "pino-pretty";

const logger = pino(pinoPretty());

export default logger;
