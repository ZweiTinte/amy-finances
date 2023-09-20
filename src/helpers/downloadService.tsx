export function sanitizeCSV(
  text: string,
  char: string = ";",
  replacement: string = ","
): string {
  return text.split(char).join(replacement);
}

export function download(
  filename: string,
  headers: string[],
  data: DownloadItem[]
): void {
  const csvData =
    headers.join(";") +
    "\n" +
    data
      .map((item) => {
        const row: string[] = [];
        headers.forEach((head) => {
          row.push(
            sanitizeCSV(item[head[0].toLowerCase() + head.substring(1)])
          );
        });
        return row.join(";");
      })
      .join("\n");
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csvData)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
