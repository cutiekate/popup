let count = 0;
window.addEventListener("scroll", function () {
if (count === 0) {
const container = document.querySelector("#popupContainer");
const popupWrapper = document.createElement("div");
const tradingParagraph = "Тест: вы готовы стать миллионером?";
const tradingSubtitle = "Хватит ли вам интуиции и логики, чтобы сделать состояние на рынке?";
const tradingBackground = "url(https://cdn.backyard.ltd/popups/trading.png)";
const tradingDescription = "Пройдите короткий тест и узнайте!";
const tradingTextTopButton = "Пройти тест";
const tradingTextBottomButton = "Спасибо, не хочу";
const tradingBackgroundColor = "#01040C";
const tradingTopButtonBackground = "#0E57D8";
const tradingBottomButtonBackground = "#303131";
const tradingPopupClose = "url(https://cdn.backyard.ltd/popups/trading-close.png";
const tradingTopButtonHref = "#"; // our link
const tradingClass = "trading";
const analizParagraph = "Гид по анализу рынка: \n меньше слов, больше выгоды!";
const analizSubtitle = "Одна книга от инвестора перечеркнет все, что вы знали о трейдинге.";
const analizBackground = "";
const analizDescription = "Скачайте «Анализ рынка» бесплатно и узнайте, какой простой и прибыльной бывает торговля!";
const analizTextTopButton = "Скачать";
const analizTextBottomButton = "Не интересно";
const analizBackgroundColor = "rgb(29,29,29)";
const analizTopButtonBackground = "#81BC29";
const analizBottomButtonBackground = "#282828";
const analizPopupClose = "url(https://cdn.backyard.ltd/popups/analiz-close.png)";
const analizTopButtonHref = "#"; // our link
const analizClass = "analiz";
const plannerParagraph = "Ежедневник трейдера: поставьте доход на поток!";
const plannerSubtitle = "";
const plannerBackground = "url(https://cdn.backyard.ltd/popups/maxiplanner-background.png)";
const plannerDescription = "Начните день с MaxiPlanner и закончите его с прибылью на счете. Подключите ежедневник трейдера бесплатно!";
const plannerTextTopButton = "Подключить";
const plannerTextBottomButton = "В другой раз";
const plannerBackgroundColor = "#3C3C3D";
const plannerTopButtonBackground = "#1EC343";
const plannerBottomButtonBackground = "#4D4E4F";
const plannerPopupClose = "url(https://cdn.backyard.ltd/popups/maxiplanner-close.png)";
const plannerTopButtonHref = "#" // our link;
const plannerClass = "planner";
const birzhaParagraph = "Книга, которая наладит денежный поток";
const birzhaSubtitle = "«Биржа для каждого» — это 100% пользы для вашего капитала.";
const birzhaBackground = "url(https://cdn.backyard.ltd/popups/birzha.png)";
const birzhaDescription = "Скачайте книгу бесплатно и учитесь зарабатывать на примерах из практики!";
const birzhaTextTopButton = "Скачать";
const birzhaTextBottomButton = "Не интересует";
const birzhaBackgroundColor = "#225FC7";
const birzhaTopButtonBackground = "#FED177";
const birzhaBottomButtonBackground = "#277AE7";
const birzhaPopupClose = "url(https://cdn.backyard.ltd/popups/birzha-close.png)";
const birzhaTopButtonHref = "#"  // our link;
const birzhaClass = "birzha";
const quizParagraph = "Готовы ли вы к прибыли на бирже?";
const quizSubtitle = "Некоторые люди имеют качества трейдеров-миллионеров и могут подняться на бирже быстрее других.";
const quizBackground = "url(https://cdn.backyard.ltd/popups/quiz.png)";
const quizDescription = "Пройдите короткий тест и узнайте, есть ли \n у вас преимущество в торговле!";
const quizTextTopButton = "Пройти тест";
const quizTextBottomButton = "В другой раз";
const quizBackgroundColor = "#122d73";
const quizTopButtonBackground = "#ffcb69";
const quizBottomButtonBackground = "#26469e";
const quizPopupClose = "url(https://cdn.backyard.ltd/popups/quiz-close.png)";
const quizTopButtonHref = "#" // our link;
const quizClass = "quiz";
const oilParagraph = "Как заставить нефть работать на себя";
const oilSubtitle = "Цена нефти растет - трейдеры зарабатывают, падает - трейдеры зарабатывают.";
const oilBackground = "url(https://cdn.backyard.ltd/popups/oil.png)";
const oilDescription = "Узнайте, как с помощью биржи сделать капитал на черном золоте!";
const oilTextTopButton = "Узнать больше";
const oilTextBottomButton = "Не интересует";
const oilBackgroundColor = "rgb(45 80 176)";
const oilTopButtonBackground = "#00d552";
const oilBottomButtonBackground = "rgb(74 117 235)";
const oilPopupClose = "url(https://cdn.backyard.ltd/popups/oil-close.png)";
const oilTopButtonHref = "#"  // our link;
const oilClass = "oil";
const allParagraph = "К ДЕНЬГАМ  НА БИРЖЕ \n ЗА 3 ШАГА";
const allSubtitle = "Получите бесплатно стартовый набор для успешного трейдинга.";
const allBackground = "url(https://cdn.backyard.ltd/popups/all.png)";
const allDescription = "В нем все включено - и профит тоже";
const allTextTopButton = "Получить";
const allTextBottomButton = "Не интересует";
const allBackgroundColor = "#83d1f1";
const allTopButtonBackground = "#60be00";
const allBottomButtonBackground = "#51a8e3";
const allPopupClose = "url(https://cdn.backyard.ltd/popups/all-close.png)";
const allTopButtonHref = "#" // our link;
const allClass = "all";
const lessonsParagraph = "Открой в себе успешного трейдера!";
const lessonsSubtitle = "Торгуйте на бирже с минимальными рисками.";
const lessonsBackground = "url(https://cdn.backyard.ltd/popups/lessons.png)";
const lessonsDescription = "Пройдите онлайн-курс с опытными игроками  рынка бесплатно, и пусть ваш капитал работает на вас!";
const lessonsTextTopButton = "Пройти курс";
const lessonsTextBottomButton = "Как-нибудь позже";
const lessonsBackgroundColor = "rgb(29,29,29)";
const lessonsTopButtonBackground = "#eaa915";
const lessonsBottomButtonBackground = "rgb(53,53,53)";
const lessonsPopupClose = "url(https://cdn.backyard.ltd/popups/lessons-close.png)";
const lessonsTopButtonHref = "#" // our link;
const lessonsClass = "lessons";
const ebookParagraph = "Воркбук,  изменивший подход к вложениям";
const ebookSubtitle = "Книга об основах инвестиций  и грамотном подходе к капиталу. ";
const ebookBackground = "url(https://cdn.backyard.ltd/popups/ebook.png)";
const ebookDescription = "Получите бесплатно книгу на телефон  и приумножайте свои сбережения!";
const ebookTextTopButton = "Скачать книгу";
const ebookTextBottomButton = "Спасибо, позже";
const ebookBackgroundColor = "#37c3c0";
const ebookTopButtonBackground = "#fbf079";
const ebookBottomButtonBackground = "#87faf8";
const ebookPopupClose = "url(https://cdn.backyard.ltd/popups/ebook-close.png)";
const ebookTopButtonHref = "#" // our link;
const ebookClass = "ebook";
const webinarParagraph = "Онлайн-практика \n с ведущими трейдерами";
const webinarSubtitle = "Обучайтесь трейдингу в режиме реального времени — учавствуйте в вебинарах с опытными специалистами.";
const webinarBackground = "url(https://cdn.backyard.ltd/popups/webinar.png)";
const webinarDescription = "Откройте бесплатный доступ уже сейчас!";
const webinarTextTopButton = "Получить доступ";
const webinarTextBottomButton = "Не интересует";
const webinarBackgroundColor = "#0028b5";
const webinarTopButtonBackground = "#00be67";
const webinarBottomButtonBackground = "#2e51d6";
const webinarPopupClose = "url(https://cdn.backyard.ltd/popups/webinar-close.png)";
const webinarTopButtonHref = "" // our link;
const webinarClass = "webinar";
popupWrapper.style.position = "fixed";
popupWrapper.style.top = "50%";
popupWrapper.style.left = "50%";
popupWrapper.style.marginRight = "-50%";
popupWrapper.style.zIndex = "9999999";
const hidePopup = (element) => {
element.style.display = "none";
};
// const showPopup = (element) => {
// element.style.display = "flex";
// };
const createPopup = (
textParagraph,
textSubtitle,
background,
textDesription,
textTopButton,
textBottomButton,
backgroundColor,
topButtonBackground,
bottomButtonBackground,
popupCloseButton,
topButtonHref,
className
) => {
let popupContainer = document.createElement("div");
let popupClose = document.createElement("button");
let popupHeading = document.createElement("h2");
let popupSubtitle = document.createElement("p");
let popupDescription = document.createElement("p");
let popupTopButton = document.createElement("a");
let popupBottomButton = document.createElement("a");
popupContainer.classList.add("popup-container", className);
popupClose.className = "popup-close";
popupHeading.className = "popup-heading";
popupSubtitle.className = "popup-subtitle";
popupDescription.className = "popup-description";
popupTopButton.className = "popup-top-button";
popupBottomButton.className = "popup-bottom-button";
popupHeading.innerText = textParagraph;
popupSubtitle.innerText = textSubtitle;
popupDescription.innerText = textDesription;
popupTopButton.innerHTML = textTopButton;
popupBottomButton.innerHTML = textBottomButton;
popupTopButton.href = '' +  topButtonHref;
popupContainer.style.width = "100%";
popupContainer.style.maxWidth = "430px";
popupContainer.style.padding = "206px 30px 28px";
popupContainer.style.top = "50%";
popupContainer.style.left = "50%";
popupContainer.style.transform = "translate(-50%, -50%)";
popupContainer.style.backgroundColor = backgroundColor;
popupContainer.style.backgroundImage = background;
popupContainer.style.backgroundRepeat = "no-repeat";
popupContainer.style.boxSizing = "border-box";
popupContainer.style.display = "none";
popupClose.style.width = "18px";
popupClose.style.height = "18px";
popupClose.style.cursor = "pointer";
popupClose.style.background = popupCloseButton;
popupClose.style.position = "absolute";
popupClose.style.top = "10px";
popupClose.style.right = "10px";
popupClose.style.border = "none";
popupClose.style.backgroundRepeat = "no-repeat";
popupHeading.style.margin = "0";
popupHeading.style.textTransform = "uppercase"
popupHeading.style.fontWeight = "bold";
popupHeading.style.textAlign = "center";
popupHeading.style.fontStyle = "normal";
popupHeading.style.fontSize = "20px";
popupSubtitle.style.fontSize= "14px";
popupSubtitle.style.textAlign = "center";
popupDescription.style.fontSize = "14px";
popupDescription.style.fontWeight = "700";
popupDescription.style.textAlign = "center";
popupDescription.style.marginBottom = "26px";
popupTopButton.style.width = "100%";
popupTopButton.style.fontSize = "18px";
popupTopButton.style.fontWeight = "bold";
popupTopButton.style.display = "block";
popupTopButton.style.backgroundColor = topButtonBackground;
popupTopButton.style.textAlign = "center";
popupTopButton.style.textTransform = "uppercase";
popupTopButton.style.padding = "18px 0";
popupTopButton.style.marginBottom = "10px";
popupTopButton.style.border = "none";
popupTopButton.style.borderRadius = "5px";
popupTopButton.style.textDecoration = "none";
popupBottomButton.style.width = "100%";
popupBottomButton.style.display = "block";
popupBottomButton.style.fontSize = "18px";
popupBottomButton.style.fontWeight = "bold";
popupBottomButton.style.textTransform = "uppercase";
popupBottomButton.style.background = bottomButtonBackground;
popupBottomButton.style.padding = "18px 0";
popupBottomButton.style.border = "none";
popupBottomButton.style.borderRadius = "5px";
popupBottomButton.style.textAlign = "center";
popupBottomButton.style.marginTop = "10px";
popupBottomButton.style.textDecoration = "none";
popupBottomButton.style.cursor = "pointer";
popupContainer.appendChild(popupClose);
popupContainer.appendChild(popupHeading);
popupContainer.appendChild(popupSubtitle)
popupContainer.appendChild(popupDescription);
popupContainer.appendChild(popupTopButton);
popupContainer.appendChild(popupBottomButton);
popupWrapper.appendChild(popupContainer);
container.appendChild(popupWrapper);
}
createPopup(
tradingParagraph,
tradingSubtitle,
tradingBackground,
tradingDescription,
tradingTextTopButton,
tradingTextBottomButton,
tradingBackgroundColor,
tradingTopButtonBackground,
tradingBottomButtonBackground,
tradingPopupClose,
tradingTopButtonHref,
tradingClass
);
createPopup(
analizParagraph,
analizSubtitle,
analizBackground,
analizDescription,
analizTextTopButton,
analizTextBottomButton,
analizBackgroundColor,
analizTopButtonBackground,
analizBottomButtonBackground,
analizPopupClose,
analizTopButtonHref,
analizClass
);
createPopup(
plannerParagraph,
plannerSubtitle,
plannerBackground,
plannerDescription,
plannerTextTopButton,
plannerTextBottomButton,
plannerBackgroundColor,
plannerTopButtonBackground,
plannerBottomButtonBackground,
plannerPopupClose,
plannerTopButtonHref,
plannerClass
);
createPopup(
birzhaParagraph,
birzhaSubtitle,
birzhaBackground,
birzhaDescription,
birzhaTextTopButton,
birzhaTextBottomButton,
birzhaBackgroundColor,
birzhaTopButtonBackground,
birzhaBottomButtonBackground,
birzhaPopupClose,
birzhaTopButtonHref,
birzhaClass
);
createPopup(
quizParagraph,
quizSubtitle,
quizBackground,
quizDescription,
quizTextTopButton,
quizTextBottomButton,
quizBackgroundColor,
quizTopButtonBackground,
quizBottomButtonBackground,
quizPopupClose,
quizTopButtonHref,
quizClass
);
createPopup(
oilParagraph,
oilSubtitle,
oilBackground,
oilDescription,
oilTextTopButton,
oilTextBottomButton,
oilBackgroundColor,
oilTopButtonBackground,
oilBottomButtonBackground,
oilPopupClose,
oilTopButtonHref,
oilClass
);
createPopup(
allParagraph,
allSubtitle,
allBackground,
allDescription,
allTextTopButton,
allTextBottomButton,
allBackgroundColor,
allTopButtonBackground,
allBottomButtonBackground,
allPopupClose,
allTopButtonHref,
allClass
);
createPopup(
lessonsParagraph,
lessonsSubtitle,
lessonsBackground,
lessonsDescription,
lessonsTextTopButton,
lessonsTextBottomButton,
lessonsBackgroundColor,
lessonsTopButtonBackground,
lessonsBottomButtonBackground,
lessonsPopupClose,
lessonsTopButtonHref,
lessonsClass
);
createPopup(
ebookParagraph,
ebookSubtitle,
ebookBackground,
ebookDescription,
ebookTextTopButton,
ebookTextBottomButton,
ebookBackgroundColor,
ebookTopButtonBackground,
ebookBottomButtonBackground,
ebookPopupClose,
ebookTopButtonHref,
ebookClass
);
createPopup(
webinarParagraph,
webinarSubtitle,
webinarBackground,
webinarDescription,
webinarTextTopButton,
webinarTextBottomButton,
webinarBackgroundColor,
webinarTopButtonBackground,
webinarBottomButtonBackground,
webinarPopupClose,
webinarTopButtonHref,
webinarClass
);
const popupQuantity = document.querySelectorAll(".popup-container")
.length;
let previosNumber;
let flag = true;
let popupContainer = document.querySelectorAll(".popup-container");
let interval;
if (interval) clearInterval(interval);
let randomNumber = () => {
let number = Math.floor(Math.random() * popupQuantity);
if (number === previosNumber) {
return randomNumber();
} else {
previosNumber = number;
return number;
}
};
const hideAllPopups = (popupContainer) => {
popupContainer.forEach((el) => {
hidePopup(el);
});
};
//set timer on localstorage for showing popups
const setTimerLS = () => {
function resetStartTime() {
startTime = new Date();
window.localStorage.setItem("startTime", startTime);
return startTime;
}
// get timestamp
startTime = new Date(
window.localStorage.getItem("startTime") || resetStartTime()
);
// start timer 600 sec
interval = window.setInterval(function () {
let secsDiff = new Date().getTime() - startTime.getTime();
if (Math.floor(secsDiff / 1000) % 600 === 0) {
hideAllPopups(popupContainer);
popupContainer[randomNumber()].style.display = "block";
sendStatistic();
}
}, 1000);
};
const sendStatistic = () => {
new Image().src =
"//counter.yadro.ru/hit?r" +
escape(document.referrer) +
(typeof screen == "undefined"
? ""
: ";s" +
screen.width +
"*" +
screen.height +
"*" +
(screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) +
";u" +
escape(document.URL) +
";h" +
escape(document.title.substring(0, 150)) +
";" +
Math.random();
};
//scroll starts popup
const scrollTrigger = () => {
let scrollValue = window.pageYOffset;
if (
scrollValue > 100 &&
flag &&
!localStorage.getItem("startTime")
) {
popupContainer[randomNumber()].style.display = "block";
// sendStatistic();
flag = false;
setTimerLS();
}
};
window.addEventListener("scroll", scrollTrigger);
let popupBottomButton = document.querySelectorAll(
".popup-bottom-button"
);
let closeButton = document.querySelectorAll(".popup-close");
//close popup and start timer
popupBottomButton.forEach((el) => {
el.addEventListener("click", (e) => {
clearInterval(interval);
e.preventDefault();
const parentWrap = el.closest(".popup-container");
hidePopup(parentWrap);
setTimerLS();
});
});
closeButton.forEach((el) => {
el.addEventListener("click", (e) => {
clearInterval(interval);
e.preventDefault();
const parentWrap = el.closest(".popup-container");
hidePopup(parentWrap);
setTimerLS();
});
});
//check after page refresh if scroll create timerLS
localStorage.getItem("startTime") ? setTimerLS() : null;
count++;
}
});




  
