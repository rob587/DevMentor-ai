import pdfParse from "pdf-parse/lib/pdf-parse.js";

export const extractTextFromPDF = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text;
};
