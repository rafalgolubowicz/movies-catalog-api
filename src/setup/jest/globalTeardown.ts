import { TEST_DB_FILE } from "./consts";
import { deleteFile } from "./helpers";

const teardown = async (): Promise<void> => {
  await deleteFile(TEST_DB_FILE);
};

export default teardown;
