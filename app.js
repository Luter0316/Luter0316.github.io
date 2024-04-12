let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

// Смена главной кнопки при выборе товара
function toggleItem(btn, itemId, price){
	let item = items.find(i => i.id === itemId);
	if (!item) {
		let newItem = {id: itemId, price: price};
		items.push(newItem);
		btn.classList.add('added-to-cart');
		btn.innerText = "Удалить из корзины";
		let totalPrice = items.reduce((total, item) => total + item.price, 0);
		if (totalPrice > 0) {
			tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
			if (!tg.MainButton.isVisible) {
				tg.MainButton.show();
			}
		} else {
			tg.MainButton.hide();
		}
	} else {
		let index = items.indexOf(item);
		items.splice(index, 1);
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
		items: items,
		totalPrice: calculateTotalPrice()
	};
	tg.sendData(JSON.stringify(data));
});

// Товары
document.getElementById("btn1").addEventListener("click", function(){
	toggleItem(this, "BananaStrips", 200)
})

document.getElementById("btn2").addEventListener("click", function(){
	toggleItem(this, "PearStrips", 210)
})

document.getElementById("btn3").addEventListener("click", function(){
	toggleItem(this, "KiwiStrips", 250)
})

document.getElementById("btn4").addEventListener("click", function(){
	toggleItem(this, "MangoStrips", 280)
})
