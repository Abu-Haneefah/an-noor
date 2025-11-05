import quran1 from "../assets/quranImage1.jpeg";
import quran2 from "../assets/quranImage2.jpeg";
import learner from "../assets/student_teacher.jpeg";
export const coursesData = [
  {
    image: quran1,
    tag: "Beginner",
    title: "Beginner Qur'an Reading",
    description:
      "Perfect for those starting their Qur'an journey. Learn Arabic letters, basic pronunciation, and simple verses.",
    duration: "5 months",
    price: "4$/month",
    learnPoints: [
      "Arabic alphabet",
      "Short vowels",
      "Long vowels",
      "Daily Surahs",
    ],
  },
  {
    image: learner,
    tag: "Intermediate",
    title: "Tajweed Mastery",
    description:
      "Master the art of beautiful Qur'an recitation with proper pronunciation rules and melodious tone.",
    duration: "6 months",
    price: "8$/month",
    learnPoints: [
      "Advanced tajweed rules",
      "Makharij training",
      "Sifaat Huruf",
      "Verse intonation analysis",
    ],
  },
  {
    image: quran2,
    tag: "All Levels",
    title: "Hifz (Memorization)",
    description:
      "Comprehensive memorization program with proven techniques and regular revision schedules.",
    duration: "1-4 years",
    price: "12$/month",
    learnPoints: [
      "Structured Hifz program",
      "Regular revision",
      "Ijazaah training",
      "Completion certificate",
    ],
  },
];
