let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = [];

// Смена главной кнопки при выборе товара
function toggleItem(btn, itemId, price){
	let item = items.find(i => i.id === itemId);
	if (item) {
		let newItem = {id: itemId, price: price};
		item.push(newItem);
		btn.classList.add('added-to-cart');
		btn.innerText = "Удалить из корзины";
		let totalPrice = item.reduce((total, item) => total + item.price, 0);
		if (totalPrice > 0) {
			tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
			if (!tg.MainButton.isVisible) {
				tg.MainButton.show();
			}
		} else {
			tg.MainButton.hide();
		}
	} else {
		let index = item.indexOf(item);
		item.splice(index, 1);
		btn.classList.remove('added-to-cart');
		btn.innerText = "Добавить в корзину";
		let totalPrice = items.reduce((total, item) => total + item.price, 0);
		if (totalPrice > 0) {
			tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
			if (!tg.MainButton.isVisible){
				tg.MainButton.show();
			}
		} else {
			tg.MainButton.hide();
		}
	}
}

// Подсчет общей цены
function calculateTotalPrice() {
	return items.reduce((total, item) => total + item.price, 0);
}

// Отправка данных в Telegram
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	let data = {
		items: item,
		totalPrice: calculateTotalPrice()
	};
	tg.sendData(JSON.stringify(data));
});

// Товары
document.getElementById("btn1").addEventListener("click", function(){
	toggleItem(this, "BananaStrips", 200)
})

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});





let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








