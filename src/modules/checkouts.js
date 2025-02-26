const checkouts = [
  { score: 170, combinations: "T20, T20, Bull" },
  { score: 167, combinations: "T20, T19, Bull" },
  { score: 164, combinations: "T20, T18, Bull" },
  { score: 161, combinations: "T20, T17, Bull" },
  { score: 160, combinations: "T20, T20, D20" },
  { score: 158, combinations: "T20, T20, D19" },
  { score: 157, combinations: "T20, T19, D20" },
  { score: 156, combinations: "T20, T20, D18" },
  { score: 155, combinations: "T20, T19, D19" },
  { score: 154, combinations: "T20, T18, D20" },
  { score: 153, combinations: "T20, T19, D18" },
  { score: 152, combinations: "T20, T20, D16" },
  { score: 151, combinations: "T20, T17, D20" },
  { score: 150, combinations: "T20, T18, D18" },
  { score: 149, combinations: "T20, T19, D16" },
  { score: 148, combinations: "T20, T20, D14" },
  { score: 147, combinations: "T20, T17, D18" },
  { score: 146, combinations: "T20, T18, D16" },
  { score: 145, combinations: "T20, T15, D20" },
  { score: 144, combinations: "T20, T20, D12" },
  { score: 143, combinations: "T20, T17, D16" },
  { score: 142, combinations: "T20, T14, D20" },
  { score: 141, combinations: "T20, T19, D12" },
  { score: 140, combinations: "T20, T20, D10" },
  { score: 139, combinations: "T19, T14, D20" },
  { score: 138, combinations: "T20, T18, D12" },
  { score: 137, combinations: "T20, T19, D10" },
  { score: 136, combinations: "T20, T20, D8" },
  { score: 135, combinations: "25, T20, Bull" },
  { score: 134, combinations: "T20, T14, D18" },
  { score: 133, combinations: "T20, T17, D12" },
  { score: 132, combinations: "25, T19, Bull" },
  { score: 131, combinations: "T20, T13, D16" },
  { score: 130, combinations: "T20, 20, Bull" },
  { score: 129, combinations: "19, T20, Bull" },
  { score: 128, combinations: "T20, 18, Bull" },
  { score: 127, combinations: "T20, 17, Bull" },
  { score: 126, combinations: "T19, 19, Bull" },
  { score: 125, combinations: "25, T20, D20" },
  { score: 124, combinations: "T20, 14, Bull" },
  { score: 123, combinations: "T19, 16, Bull" },
  { score: 122, combinations: "T18, 18, Bull" },
  { score: 121, combinations: "T20, 11, Bull" },
  { score: 120, combinations: "T20, 20, D20" },
  { score: 119, combinations: "T19, 12, Bull" },
  { score: 118, combinations: "T20, 18, D20" },
  { score: 117, combinations: "T20, 17, D20" },
  { score: 116, combinations: "T20, 16, D20" },
  { score: 115, combinations: "T20, 15, D20" },
  { score: 114, combinations: "T20, 14, D20" },
  { score: 113, combinations: "T19, 16, D20" },
  { score: 112, combinations: "T20, 20, D16" },
  { score: 111, combinations: "T19, 14, D20" },
  { score: 110, combinations: "T20, 10, D20" },
  { score: 109, combinations: "T20, 17, D16" },
  { score: 108, combinations: "T20, 16, D16" },
  { score: 107, combinations: "T19, 10, D20" },
  { score: 106, combinations: "T20, 14, D16" },
  { score: 105, combinations: "T20, 13, D16" },
  { score: 104, combinations: "T20, 12, D16" },
  { score: 103, combinations: "T19, 6, D20" },
  { score: 102, combinations: "T20, 10, D16" },
  { score: 101, combinations: "T20, 9, D16" },
  { score: 100, combinations: "T20, D40" },
  { score: 99, combinations: "T19, 10, D16" },
  { score: 98, combinations: "T20, D19" },
  { score: 97, combinations: "T19, D20" },
  { score: 96, combinations: "T20, D18" },
  { score: 95, combinations: "T19, D19" },
  { score: 94, combinations: "T18, D20" },
  { score: 93, combinations: "T19, D18" },
  { score: 92, combinations: "T20, D16" },
  { score: 91, combinations: "T17, D20" },
  { score: 90, combinations: "T18, D18" },
  { score: 89, combinations: "T19, D16" },
  { score: 88, combinations: "T16, D20" },
  { score: 87, combinations: "T17, D18" },
  { score: 86, combinations: "T18, D16" },
  { score: 85, combinations: "T15, D20" },
  { score: 84, combinations: "T20, D12" },
  { score: 83, combinations: "T17, D16" },
  { score: 82, combinations: "Bull, D16" },
  { score: 81, combinations: "T19, D12" },
  { score: 80, combinations: "T20, D10" },
  { score: 79, combinations: "T19, D11" },
  { score: 78, combinations: "T18, D12" },
  { score: 77, combinations: "T19, D10" },
  { score: 76, combinations: "T20, D8" },
  { score: 75, combinations: "T17, D12" },
  { score: 74, combinations: "T14, D16" },
  { score: 73, combinations: "T19, D8" },
  { score: 72, combinations: "T16, D12" },
  { score: 71, combinations: "T17, D10" },
  { score: 70, combinations: "T18, D8" },
  { score: 69, combinations: "T19, D6" },
  { score: 68, combinations: "T20, D4" },
  { score: 67, combinations: "T17, D8" },
  { score: 66, combinations: "T14, D12" },
  { score: 65, combinations: "25, D20" },
  { score: 64, combinations: "T16, D8" },
  { score: 63, combinations: "T13, D12" },
  { score: 62, combinations: "T10, D16" },
  { score: 61, combinations: "T15, D8" },
  { score: 60, combinations: "20, D20" },
  { score: 59, combinations: "19, D20" },
  { score: 58, combinations: "18, D20" },
  { score: 57, combinations: "17, D20" },
  { score: 56, combinations: "16, D20" },
  { score: 55, combinations: "15, D20" },
  { score: 54, combinations: "14, D20" },
  { score: 53, combinations: "13, D20" },
  { score: 52, combinations: "12, D20" },
  { score: 51, combinations: "11, D20" },
  { score: 50, combinations: "18, D16" },
  { score: 49, combinations: "17, D16" },
  { score: 48, combinations: "16, D16" },
  { score: 47, combinations: "15, D16" },
  { score: 46, combinations: "14, D16" },
  { score: 45, combinations: "13, D16" },
  { score: 44, combinations: "12, D16" },
  { score: 43, combinations: "11, D16" },
  { score: 42, combinations: "10, D16" },
  { score: 41, combinations: "9, D16" },
  { score: 40, combinations: "D20" },
  { score: 39, combinations: "7, D16" },
  { score: 38, combinations: "D19" },
  { score: 37, combinations: "5, D16" },
  { score: 36, combinations: "D18" },
  { score: 35, combinations: "3, D16" },
  { score: 34, combinations: "D17" },
  { score: 33, combinations: "1, D16" },
  { score: 32, combinations: "D16" },
  { score: 31, combinations: "15, D8" },
  { score: 30, combinations: "D15" },
  { score: 29, combinations: "13, D8" },
  { score: 28, combinations: "D14" },
  { score: 27, combinations: "11, D8" },
  { score: 26, combinations: "D13" },
  { score: 25, combinations: "9, D8" },
  { score: 24, combinations: "D12" },
  { score: 23, combinations: "7, D8" },
  { score: 22, combinations: "D11" },
  { score: 21, combinations: "5, D8" },
  { score: 20, combinations: "D10" },
  { score: 19, combinations: "3, D8" },
  { score: 18, combinations: "D9" },
  { score: 17, combinations: "1, D8" },
  { score: 16, combinations: "D8" },
  { score: 15, combinations: "7, D4" },
  { score: 14, combinations: "D7" },
  { score: 13, combinations: "5, D4" },
  { score: 12, combinations: "D6" },
  { score: 11, combinations: "3, D4" },
  { score: 10, combinations: "D5" },
  { score: 9, combinations: "1, D4" },
  { score: 8, combinations: "D4" },
  { score: 7, combinations: "3, D2" },
  { score: 6, combinations: "D3" },
  { score: 5, combinations: "1, D2" },
  { score: 4, combinations: "D2" },
  { score: 3, combinations: "1, D1" },
  { score: 2, combinations: "D1" },
];

export default checkouts;
