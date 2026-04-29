const fs = require("fs");

function formatPhone(phone) {
  if (!phone || !phone.trim()) return phone;
  let s = phone.trim();

  // Scientific notation: "2,49929E+11" or "4.91767E+12"
  if (/[Ee][+\-]\d+/.test(s)) {
    try {
      const normalized = s.replace(",", ".");
      const num = Math.round(parseFloat(normalized));
      s = num.toString();
    } catch (e) {
      return phone;
    }
  }

  const hasPlus = s.startsWith("+");
  const digits = s.replace(/\D/g, "");
  if (!digits) return phone;

  if (hasPlus) return "+" + digits;

  const n = digits.length;
  if (n >= 12 && digits.startsWith("55")) return "+" + digits; // Brazil CC already present
  if (n >= 12) return "+" + digits;                             // other country code
  return "+55" + digits;                                        // assume Brazil
}

const inputFile  = "C:\\Users\\FelipeFigueira\\Desktop\\doris\\docs\\envios whats.csv";
const outputFile = "C:\\Users\\FelipeFigueira\\Desktop\\doris\\docs\\envios whats formatado.csv";

const content = fs.readFileSync(inputFile, "utf-8");
const lines   = content.split(/\r?\n/);

let changed = 0, sciCount = 0;

const result = lines.map((line, i) => {
  if (i === 0 || !line.trim()) return line;
  const cols = line.split(";");
  [3, 4].forEach(col => {
    if (cols[col] && cols[col].trim()) {
      const original = cols[col];
      if (/[Ee][+\-]\d+/.test(original)) sciCount++;
      const formatted = formatPhone(original);
      if (formatted !== original) changed++;
      cols[col] = formatted;
    }
  });
  return cols.join(";");
});

fs.writeFileSync(outputFile, result.join("\n"), "utf-8");

console.log("Total de linhas processadas : " + (lines.length - 1));
console.log("Campos alterados            : " + changed);
console.log("Notacoes cientificas        : " + sciCount);
console.log("Arquivo salvo em            : " + outputFile);
