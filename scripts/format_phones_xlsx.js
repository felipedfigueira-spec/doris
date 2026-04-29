const fs   = require("fs");
const XLSX = require("xlsx");

const inputFile  = "C:\\Users\\FelipeFigueira\\Desktop\\doris\\docs\\envios whats formatado.csv";
const outputFile = "C:\\Users\\FelipeFigueira\\Desktop\\doris\\docs\\envios whats formatado.xlsx";

// Read formatted CSV
const content = fs.readFileSync(inputFile, "utf-8");
const lines   = content.split(/\r?\n/).filter(l => l.trim());

const rows = lines.map(line => line.split(";"));

// Build worksheet manually so we can force text format on cols D (3) and E (4)
const ws = {};
const phoneCols = new Set([3, 4]);

rows.forEach((row, r) => {
  row.forEach((cell, c) => {
    const addr = XLSX.utils.encode_cell({ r, c });
    if (r > 0 && phoneCols.has(c) && cell && cell.trim()) {
      // Force text: type "s" (string) prevents any numeric conversion
      ws[addr] = { t: "s", v: cell.trim() };
    } else {
      ws[addr] = { t: "s", v: cell };
    }
  });
});

ws["!ref"] = XLSX.utils.encode_range({
  s: { r: 0, c: 0 },
  e: { r: rows.length - 1, c: Math.max(...rows.map(r => r.length)) - 1 }
});

// Set column widths for readability
ws["!cols"] = [
  { wch: 38 }, // Email
  { wch: 28 }, // First Name
  { wch: 8  }, // Lead source
  { wch: 18 }, // Mobile
  { wch: 18 }, // Phone
  { wch: 8  }, // Opt_in
  { wch: 20 }, // Confirmed time
  { wch: 10 }, // Agreed
  { wch: 12 }, // Opt-in type
];

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Leads");

XLSX.writeFile(wb, outputFile);
console.log("XLSX gerado em: " + outputFile);
console.log("Linhas: " + rows.length);
