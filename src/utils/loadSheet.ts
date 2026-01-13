import Papa from 'papaparse';
import type { ParseResult } from 'papaparse';


const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTspFiQwhDehk_gl4vujKsYZu0rmOwCBoGz0b332bjJXlQxN2i3PBHLdEmZupW6qQ3XQMRr1mdxyuIL/pub?output=csv';

export async function loadSheet(tab: string) {
  const res = await fetch(`${SHEET_URL}&gid=${getGid(tab)}`);
  const text = await res.text();

  return new Promise<any[]>((resolve) => {
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<any>) => {
        resolve(results.data as any[]);
      },
    });
  });
}

function getGid(tab: string) {
  const map: Record<string, string> = {
    stories: '0',
    chapters: '1057945135', // replace with actual gid
  };
  return map[tab];
}
