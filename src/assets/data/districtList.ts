const data = [
  {
    division: "dhaka",
    text: "ঢাকা",
    districts: [
      {
        districtName: "টাঙ্গাইল",
        districtCode: "37",
        seat: "৮",
      },
      {
        districtName: "কিশোরগঞ্জ",
        districtCode: "38",
        seat: "৬",
      },
      {
        districtName: "মানিকগঞ্জ",
        districtCode: "39",
        seat: "8",
      },
      {
        districtName: "ঢাকা",
        districtCode: "40",
        seat: "20",
      },
      {
        districtName: "গাজীপুর",
        districtCode: "41",
        seat: "8",
      },
      {
        districtName: "নরসিংদী",
        districtCode: "42",
        seat: "৫",
      },
      {
        districtName: "নারায়ণগঞ্জ",
        districtCode: "43",
        seat: "৫",
      },
      {
        districtName: "মুন্সীগঞ্জ",
        districtCode: "44",
        seat: "৩",
      },
      {
        districtName: "ফরিদপুর",
        districtCode: "45",
        seat: "8",
      },
      {
        districtName: "রাজবাড়ী",
        districtCode: "46",
        seat: "২",
      },
      {
        districtName: "গোপালগঞ্জ",
        districtCode: "47",
        seat: "৩",
      },
      {
        districtName: "মাদারীপুর",
        districtCode: "48",
        seat: "৩",
      },
      {
        districtName: "শরীয়তপুর",
        districtCode: "49",
        seat: "৩",
      },
    ],
  },
  {
    division: "chattogram",
    text: "চট্টগ্রাম",
    districts: [
      {
        districtName: "ব্রাহ্মণবাড়িয়া",
        districtCode: "54",
        seat: "৬",
      },
      {
        districtName: "কুমিল্লা",
        districtCode: "55",
        seat: "১১",
      },
      {
        districtName: "চাঁদপুর",
        districtCode: "56",
        seat: "৫",
      },
      {
        districtName: "লক্ষ্মীপুর",
        districtCode: "57",
        seat: "৪",
      },
      {
        districtName: "নোয়াখালী",
        districtCode: "58",
        seat: "৬",
      },
      {
        districtName: "ফেনী",
        districtCode: "59",
        seat: "৩",
      },
      {
        districtName: "চট্টগ্রাম",
        districtCode: "60",
        seat: "১৬",
      },
      {
        districtName: "কক্সবাজার",
        districtCode: "61",
        seat: "৪",
      },
      {
        districtName: "খাগড়াছড়ি",
        districtCode: "62",
        seat: "১",
      },
      {
        districtName: "রাঙামাটি",
        districtCode: "63",
        seat: "১",
      },
      {
        districtName: "বান্দরবান",
        districtCode: "64",
        seat: "১",
      },
    ],
  },
  {
    division: "khulna",
    text: "খুলনা",
    districts: [
      {
        districtName: "কুষ্টিয়া",
        districtCode: "17",
        seat: "৪",
      },
      {
        districtName: "মেহেরপুর",
        districtCode: "18",
        seat: "২",
      },
      {
        districtName: "চুয়াডাঙ্গা",
        districtCode: "19",
        seat: "২",
      },
      {
        districtName: "ঝিনাইদহ",
        districtCode: "20",
        seat: "৪",
      },
      {
        districtName: "মাগুরা",
        districtCode: "21",
        seat: "২",
      },
      {
        districtName: "নড়াইল",
        districtCode: "22",
        seat: "২",
      },
      {
        districtName: "যশোর",
        districtCode: "23",
        seat: "৬",
      },
      {
        districtName: "সাতক্ষীরা",
        districtCode: "24",
        seat: "৪",
      },
      {
        districtName: "খুলনা",
        districtCode: "25",
        seat: "৬",
      },
      {
        districtName: "বাগেরহাট",
        districtCode: "26",
        seat: "৪",
      },
    ],
  },
  {
    division: "barisal",
    text: "বরিশাল",
    districts: [
      {
        districtName: "পিরোজপুর",
        districtCode: "27",
        seat: "৩",
      },
      {
        districtName: "ঝালকাঠি",
        districtCode: "28",
        seat: "২",
      },
      {
        districtName: "বরিশাল",
        districtCode: "29",
        seat: "৬",
      },
      {
        districtName: "ভোলা",
        districtCode: "30",
        seat: "৪",
      },
      {
        districtName: "পটুয়াখালী",
        districtCode: "31",
        seat: "৪",
      },
      {
        districtName: "বরগুনা",
        districtCode: "32",
        seat: "২",
      },
    ],
  },
  {
    division: "sylhet",
    text: "সিলেট",
    districts: [
      {
        districtName: "সুনামগঞ্জ",
        districtCode: "50",
        seat: "৫",
      },
      {
        districtName: "সিলেট",
        districtCode: "51",
        seat: "৬",
      },
      {
        districtName: "মৌলভীবাজার",
        districtCode: "52",
        seat: "৪",
      },
      {
        districtName: "হবিগঞ্জ",
        districtCode: "53",
        seat: "৪",
      },
    ],
  },
  {
    division: "rajshahi",
    text: "রাজশাহী",
    districts: [
      {
        districtName: "জয়পুরহাট",
        districtCode: "9",
        seat: "২",
      },
      {
        districtName: "বগুড়া",
        districtCode: "10",
        seat: "৭",
      },
      {
        districtName: "নওগাঁ",
        districtCode: "11",
        seat: "৬",
      },
      {
        districtName: "নাটোর",
        districtCode: "12",
        seat: "৪",
      },
      {
        districtName: "চাঁপাইনবাবগঞ্জ",
        districtCode: "13",
        seat: "৩",
      },
      {
        districtName: "রাজশাহী",
        districtCode: "14",
        seat: "৬",
      },
      {
        districtName: "সিরাজগঞ্জ",
        districtCode: "15",
        seat: "৬",
      },
      {
        districtName: "পাবনা",
        districtCode: "16",
        seat: "৫",
      },
    ],
  },

  {
    division: "rangpur",
    text: "রংপুর",
    districts: [
      {
        districtName: "পঞ্চগড়",
        districtCode: "1",
        seat: "২",
      },
      {
        districtName: "ঠাকুরগাঁও",
        districtCode: "2",
        seat: "৩",
      },
      {
        districtName: "দিনাজপুর",
        districtCode: "3",
        seat: "৬",
      },
      {
        districtName: "নীলফামারী",
        districtCode: "4",
        seat: "৪",
      },
      {
        districtName: "লালমনিরহাট",
        districtCode: "5",
        seat: "৩",
      },
      {
        districtName: "রংপুর",
        districtCode: "6",
        seat: "৬",
      },
      {
        districtName: "কুড়িগ্রাম",
        districtCode: "7",
        seat: "৪",
      },
      {
        districtName: "গাইবান্ধা",
        districtCode: "8",
        seat: "৫",
      },
    ],
  },

  {
    division: "mymensingh",
    text: "ময়মনসিংহ",
    districts: [
      {
        districtName: "নেত্রকোনা",
        districtCode: "33",
        seat: "৫",
      },
      {
        districtName: "ময়মনসিংহ",
        districtCode: "34",
        seat: "১১",
      },
      {
        districtName: "শেরপুর",
        districtCode: "35",
        seat: "৩",
      },
      {
        districtName: "জামালপুর",
        districtCode: "36",
        seat: "৫",
      },
    ],
  },
];

export default data;
