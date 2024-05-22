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
		totalPrice: calculateTotalPrice(),
	};
	tg.sendData(JSON.stringify(data));
});

// Товары
document.getElementById("btn1_50").addEventListener("click", function(){
	toggleItem(this, "BananaStrips", 200, '200 руб. (50гр.)')
})

document.getElementById("btn2_50").addEventListener("click", function(){
	toggleItem(this, "AppleStrips", 240, '240 руб. (50гр.)')
})

document.getElementById("btn3_50").addEventListener("click", function(){
	toggleItem(this, "PearStrips", 270, '270 руб. (50гр.)')
})

document.getElementById("btn4_50").addEventListener("click", function(){
	toggleItem(this, "KiwiStrips", 280, '280 руб. (50гр.)')
})

document.getElementById("btn5_50").addEventListener("click", function(){
	toggleItem(this, "OrangeStrips", 230, '230 руб. (50гр.)')
})

document.getElementById("btn6_50").addEventListener("click", function(){
	toggleItem(this, "PineappleStrips", 320, '320 руб. (50гр.)')
})

document.getElementById("btn7_50").addEventListener("click", function(){
	toggleItem(this, "MangoStrips", 350, '350 руб. (50гр.)')
})

document.getElementById("btn8_50").addEventListener("click", function(){
	toggleItem(this, "BananaInCoconutStrips", 230, '230 руб. (50гр.)')
})

document.getElementById("btn9_50").addEventListener("click", function(){
	toggleItem(this, "PersimmonStrips", 230, '230 руб. (50гр.)')
})

document.getElementById("btn10_50").addEventListener("click", function(){
	toggleItem(this, "CoconutStrips", 350, '350 руб. (50гр.)')
})
