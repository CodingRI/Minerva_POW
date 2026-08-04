import Papa from "papaparse";

export interface ParsedTransaction {
  date: string;
  description: string;
  vendor: string;
  amount: number;
}

export async function parseCSV(
  file: File
): Promise<ParsedTransaction[]> {

  const text = await file.text();

  return new Promise((resolve, reject) => {

    Papa.parse<ParsedTransaction>(text, {

      header: true,

      skipEmptyLines: true,

      dynamicTyping: true,

      complete(results) {

        if (results.errors.length > 0) {
          reject(results.errors);
          return;
        }

        resolve(results.data);

      },

    });

  });

}