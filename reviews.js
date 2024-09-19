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
			'url("https://lh3.googleusercontent.com/a-/ALV-UjVVDs8Vy5G4URXDV6xTs4cit81HKIwLus9MoVcxFuB7VAewn8tX=w200-h200-p-rp-mo-br100")',
		name: "Гуназа Крістіна",
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
			"url('https://lh3.googleusercontent.com/a-/ALV-UjXuF9NZQO4MXRCRfNlFE1JyY7oPDBvMqRh38SbLpVZDbDhoYzQg=w200-h200-p-rp-mo-br100')",
		name: "Tetiana Tomorka",
		profession: "",
		description:	`Робила професійну чистку зубів та залишилась надзвичайно задоволена якістю роботи і майстерністю лікаря Костянтина Миколайовича! 4 роки довіряю лише цій клініці🫶🏻 Дуже ввічливий і чуйний персонал, мені вже як рідні за скільки років🥰 Дякую вам! Планую наступний прийом і усім рекомендую:)…`
							
	},

	{
		photo:
			"url('https://lh3.googleusercontent.com/a-/ALV-UjXnff4fY-e2bhwb4MFLWgDeF2adSHVr_cDvYMfscsZb95ffK6k-=w200-h200-p-rp-mo-ba4-br100')",
		name: "Iryna Tarasenko",
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
		name: "Татьяна Москальцова",
		profession: "",
		description:
			"Обслуговуємось в цій клініці вже багато років. З лікарем-ортодонтом Іриною Петрівною Котюк познайомились ще до відкриття цієї клініки, потім всією родиною перейшли за лікарем на обслуговування в Home Dent. Клініка, завдяки Ірині Петрівні, має найвищий рівень якості послуг, демократичні ціни, найкраще відношення до пацієнтів."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

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

function setNextCardLeft() {
	if (currentPerson === 4) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 4;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

// window.addEventListener("resize", () => {
// 	description.style.height = "100%";
// });
});
