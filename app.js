let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

// Смена главной кнопки при выборе товара
function toggleItem(btn, itemId, price, oldtext){
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
		btn.innerText = oldtext
		// btn.innerText = "Добавить в корзину";
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
		chat_id: tg.initDataUnsafe.user.id
	};
	tg.sendData(JSON.stringify(data));
});

// Товары
document.getElementById("btn1_50").addEventListener("click", function(){
	toggleItem(this, "BananaStrips", 200, '200 руб. (50гр.)')
})
document.getElementById("btn1_100").addEventListener("click", function(){
	toggleItem(this, "BananaStrips", 390, '390 руб. (100гр.)')
})

document.getElementById("btn2_50").addEventListener("click", function(){
	toggleItem(this, "PearStrips", 210, '210 руб. (50гр.)')
})
document.getElementById("btn2_100").addEventListener("click", function(){
	toggleItem(this, "PearStrips", 410, '410 руб. (100гр.)')
})

document.getElementById("btn3_50").addEventListener("click", function(){
	toggleItem(this, "KiwiStrips", 250, '250 руб. (50гр.)')
})
document.getElementById("btn3_100").addEventListener("click", function(){
	toggleItem(this, "KiwiStrips", 480, '480 руб. (100гр.)')
})

document.getElementById("btn4_50").addEventListener("click", function(){
	toggleItem(this, "MangoStrips", 280, '280 руб. (50гр.)')
})
document.getElementById("btn4_100").addEventListener("click", function(){
	toggleItem(this, "MangoStrips", 550, '550 руб. (100гр.)')
})
