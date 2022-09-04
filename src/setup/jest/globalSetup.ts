import { MOCK_DATA, TEST_DB_FILE } from "./consts";
import { writeFile } from "./helpers";

const setup = async (): Promise<void> => {
  await writeFile(TEST_DB_FILE, MOCK_DATA);
};

export default setup;
