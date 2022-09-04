import fs from "fs";

export const readFile = <T = object>(filePath: string): Promise<T> =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) reject(error);

      resolve(JSON.parse(data));
    });
  });

export const writeFile = <T extends object>(
  filePath: string,
  data: T
): Promise<void> =>
  new Promise((resolve, reject) => {
    const formattedData = JSON.stringify(data, null, 2);

    fs.writeFile(filePath, formattedData, (error) => {
      if (error) reject(error);

      resolve();
    });
  });

export const deleteFile = (filePath: string): Promise<void> =>
  new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) reject(error);

      resolve();
    });
  });
