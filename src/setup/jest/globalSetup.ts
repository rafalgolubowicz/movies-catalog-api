import { MOCK_DATA, TEST_DB_FILE } from "./consts";
import { writeFile } from "./helpers";

const setup = async (): Promise<void> => {
  // It should be done before each test, but for this project purposes, it could be done once before all tests.
  await writeFile(TEST_DB_FILE, MOCK_DATA);
};

export default setup;
