export function NumberToMonth(number: number): string {
  const map: { [key: number]: string } = {
    0: "Januari",
    1: "Februari",
    2: "Mars",
    3: "April",
    4: "Maj",
    5: "Juni",
    6: "Juli",
    7: "Augusti",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "December",
  };

  return map[number];
}
