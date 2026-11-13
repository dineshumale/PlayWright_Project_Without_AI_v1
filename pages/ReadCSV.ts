import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';

export function ReadCSV(): {

    email: string;
    password: string;
    expectedResults: string;
}[] {
    const fileContent = readFileSync(
        './TestData/LoginData.csv',
        'utf-8'
    );

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });

    return records;
}
