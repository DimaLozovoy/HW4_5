const button = document.querySelector("button");
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let currentKeyIndex = 0;

function newGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  document.getElementById("key").textContent =
    keys[currentKeyIndex].toUpperCase();
  PNotify.success({ text: "Починаємо гру! Натисніть правильну клавішу." });
}

button.addEventListener("keydown", (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    document.getElementById("key").textContent =
      keys[currentKeyIndex].toUpperCase(); // тут бібліотечний код де ми перебираємо ставимо рандом кнопки и чекаєм натиск на них
    PNotify.success({ text: "Вірно! Натисніть наступну клавішу." });
  } else {
    PNotify.error({ text: "Помилка! Неправильна клавіша." });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGame();

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
    },
  ],
};

new Chart(document.querySelector("sales-chart"), {
  // тут допомагала нейронка і не працює(((
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { title: { display: true, text: "Дні місяця" } },
      y: { title: { display: true, text: "Продажі" } }, // бібліотечний код тут показуємо чарт
    },
  },
});
