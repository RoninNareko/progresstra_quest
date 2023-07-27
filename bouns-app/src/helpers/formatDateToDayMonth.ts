export default function formatDateToDayMonth(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so we add 1 to get the correct month
    return `${day}.${month}`;
  }