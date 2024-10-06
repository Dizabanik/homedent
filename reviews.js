$(document).ready(function () {
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
let people = [
	{
		photo:
			'url("https://avatar.oxro.io/avatar.svg?name=Kristina&background=f39c12&length=1bold=true")',
		name:"Крістіна Г.",
		profession: "",
		description:
			`Стовідсотково найкраща стоматологія - це
HomeDent

Як тільки Ви потрапите у клініку, Вас зустріне прекрасна атмосфера та привітний, дружелюбний персонал!
Стільки років, лікуюсь саме в HomeDent, та раджу цю клініку кожному!
Велика подяка Ірині Петрівні, за таку неймовірну посмішку❤️
Результатом задоволена на всі 100%

Тепер звертаюсь тільки в HomeDent`
	},

	{
		photo:
			"url('https://avatar.oxro.io/avatar.svg?name=Tetiana&background=6ab04c&length=1bold=true')",
		name: "Tetiana T.",
		profession: "",
		description:	`Робила професійну чистку зубів та залишилась надзвичайно задоволена якістю роботи і майстерністю лікаря Костянтина Миколайовича! 4 роки довіряю лише цій клініці🫶🏻 Дуже ввічливий і чуйний персонал, мені вже як рідні за скільки років🥰 Дякую вам! Планую наступний прийом і усім рекомендую:)…`
							
	},

	{
		photo:
			"url('https://avatar.oxro.io/avatar.svg?name=Iryna&background=ff6b6b&length=1bold=true')",
		name: "Iryna T.",
		profession: "",
		description:
			"Прекрасна ортодонтія і стоматологія, адекватні ціни і висококваліфіковані лікарі, асистенти, чарівна адміністратор. Повірте, маю величезний досвід ортодонтичного лікування моїх дітей в Україні і закордоном, завжди щаслива повертатися в HomeDent. Тут ви отримаєте найсучасніші, дієві протоколи лікування. Дуже раджу цю невелику але таку якісну клініку💖."
	},

	{
		photo:
			"url('https://lh3.googleusercontent.com/a/ACg8ocIwmkQNy1OglxvqCuvFrCiJ_vaQK6i1RW7cL3aa1oxETZkh-w=w100-h100-p-rp-mo-br100')",
		name: "Анастасія",
		profession: "",
		description:
			"Перед homedent побувала у іншого ортодонта і зупинила свій вибір на цій стоматології. Завжди якісно виконана робота, підтримка дистанційного звʼязку з лікарем за потребою, адміністратор завжди намагається піти на зустріч і знайти зручний час. Більше року довіряю свої зуби з брекетами тільки їм:)"
	},
{
		photo:
			"url('https://lh3.googleusercontent.com/a/ACg8ocKPbPG6D-x6ss7y5omcmZ7WASaJGatMtqrZ-xXO0sT-7iDOew=w100-h100-p-rp-mo-br100')",
		name: "Татьяна М.",
		profession: "",
		description:
			"Обслуговуємось в цій клініці вже багато років. З лікарем-ортодонтом Іриною Петрівною Котюк познайомились ще до відкриття цієї клініки, потім всією родиною перейшли за лікарем на обслуговування в Home Dent. Клініка, завдяки Ірині Петрівні, має найвищий рівень якості послуг, демократичні ціни, найкраще відношення до пацієнтів."
	},
{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Natalia&background=2f2b6b&length=1bold=true')",
		name: "Наталiя В.",
		profession: "",
		description:
			`Насамперед хочу зауважити, що колектив клініки злагоджено працює, завдяки цьому приємна і невимушена атмосфера. Зручне розташування, ціни на послуги відповідають зазначеним на сайті, одразу можна отримати план лікування.
Лікарі - чудові професіонали, яким довіряєш з першого візиту.
Особливо вдячна Костянтину Миколайовичу за його майстерність, виваженість та уважне ставлення!
❤️💙💛 Однозначно рекомендую!`
	},
{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Maria&background=ff2bbf&length=1bold=true')",
		name: "Maria",
		profession: "",
		description:
			`Одна із найкращих, на мою думку, клінік, де займаються брекетами. Дуже вдячна Ірині Петровні - головній лікарці, а також іншим лікарям, асистентам і адміністратору. У мене був особливий випадок - я прийшла в HomeDent вже з брекетами, бо інші стоматології просто не хотіли вже брати таку відповідальність за дії лікаря, який був до них (і їх можна зрозуміти), тому це була моя остання надія. І слава Богу (!!) за наступні два роки, що я їздила в стоматологію, ми дійшли бажаного результату!! Я щиро дуже вдячна. Атмосфера, маю зазначити, затишна і привітна)) Одним словом - рекомендую 🙌`
	},
	{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Ludmila&background=fbbbbf&length=1bold=true')",
		name: "Людмила М.",
		profession: "",
		description:
			`Дуже кваліфіковані, уважні та відповідальні фахівці працюють у цій клініці. Загалом відчувається, що колектив дружний, ставлення до пацієнтів дуже уважне, доброзичливе. За півтора роки ортодонтичного лікування бачу хороший результат, хоча ситуація досить складна. Бажаю успіху, процвітання, вдячних пацієнтів!   Можу з упевненістю рекомендувати цю клініку!`
	},
	{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Larisa&background=afbfab&length=1bold=true')",
		name: "Лариса І.",
		profession: "",
		description:
			`Відвідали клініку всією сім'єю. Дуже задоволені результатами.  Тепла атмосфера, ввічливі працівники та високий професіоналізм лікаря Костянтина Вікторовича залишили найкращі врадення.`
	},
{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Tatiana&background=ddfbfb&length=1bold=true')",
		name: "Тетяна Б.",
		profession: "",
		description:
			`Чудова стоматологія! Проходжу ортодонтичне лікування ( брекети), Ірина Петрівна і всі лікарі, медперсонал- чудові. Тут вам завжди раді. Рекомендую!`
	},
{
		photo:
				"url('https://avatar.oxro.io/avatar.svg?name=Iryna&background=ffa2b2&length=1bold=true')",
		name: "Ірина М.",
		profession: "",
		description:
			`HomeDent зачарувала нас домашньою атмосферою,демократичними цінами,найкращими відношеннями до пацієнтів ❤️Ми вдячни за уважність,за доброзичливість Ірині Петрівні ,адміністратору,асистенту❤️Бажаємо всьому персоналу клініки HomeDent здоров’я,процвітання та більше вдячних пацієнтів❤️`
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;
let numReviews = 9;
//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();



	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	// setTimeout(() => {
	// 	description.style.height = descriptionHeight;
	// }, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});


}

function setNextCardRight() {
	if (currentPerson === numReviews) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("right", currentPerson);
}

function setNextCardLeft() {
	if (currentPerson === 0) {
		currentPerson = numReviews;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("left", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

// window.addEventListener("resize", () => {
// 	description.style.height = "100%";
// });
});
