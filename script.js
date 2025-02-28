const foodMenu = [
    "ข้าวผัดกะเพราไก่", "ข้าวผัดกะเพราหมู", "ข้าวผัดกะเพราทะเล", "ข้าวผัดกะเพราหมูกรอบ", "ข้าวผัดกะเพราเนื้อ",
    "ข้าวผัดปู", "ข้าวผัดกุ้ง", "ข้าวผัดหมู", "ข้าวผัดไก่", "ข้าวผัดทะเล", "ข้าวมันไก่", "ข้าวมันไก่ทอด",
    "ข้าวหมูแดง", "ข้าวหมูกรอบ", "ข้าวขาหมู", "ข้าวคลุกกะปิ", "ข้าวผัดน้ำพริกกุ้งสด", "ข้าวผัดสับปะรด",
    "ข้าวผัดต้มยำกุ้ง", "ข้าวผัดอเมริกัน", "สุกี้แห้ง", "สุกี้น้ำ", "ข้าวเหนียวหมูปิ้ง", "ข้าวเหนียวไก่ย่าง",
    "ข้าวแกงเขียวหวานไก่", "ข้าวแกงเขียวหวานหมู", "ข้าวซอยไก่", "ข้าวซอยหมู", "แกงเขียวหวานไก่",
    "แกงเขียวหวานหมู", "แกงเขียวหวานลูกชิ้นปลา", "แกงพะแนงหมู", "แกงพะแนงเนื้อ", "แกงเผ็ดเป็ดย่าง",
    "แกงส้มชะอมกุ้ง", "แกงส้มผักรวม", "แกงจืดเต้าหู้หมูสับ", "แกงเลียงกุ้งสด", "แกงมัสมั่นไก่", "แกงมัสมั่นเนื้อ",
    "แกงป่าไก่", "แกงป่าหมู", "ต้มยำกุ้ง", "ต้มยำไก่", "ต้มยำทะเล", "ต้มข่าไก่", "ต้มจืดมะระยัดไส้",
    "ต้มโคล้งปลากรอบ", "ผัดไทยกุ้งสด", "ผัดไทยไก่", "ผัดไทยหมู", "ผัดซีอิ๊วหมู", "ผัดซีอิ๊วไก่",
    "ผัดซีอิ๊วทะเล", "ผัดขี้เมาหมู", "ผัดขี้เมาไก่", "ผัดขี้เมาทะเล", "ผัดผงกะหรี่ปู", "ผัดผงกะหรี่กุ้ง",
    "ผัดเผ็ดปลาดุก", "ผัดกระเพราหมูกรอบ", "ผัดกระเพรากุ้ง", "ผัดกระเพราเนื้อ", "ผัดกระเพราทะเล",
    "ผัดเปรี้ยวหวานไก่", "ผัดเปรี้ยวหวานหมู", "ผัดเปรี้ยวหวานกุ้ง", "ไข่เจียวหมูสับ", "ไข่เจียวกุ้งสับ",
    "ไข่ลูกเขย", "ปลาทอดน้ำปลา", "ปลาราดพริก", "หมูปิ้ง", "ไก่ย่าง", "หมูสะเต๊ะ", "เนื้อย่างจิ้มแจ่ว",
    "กุ้งเผาน้ำจิ้มซีฟู้ด", "ปลาหมึกย่าง", "ก๋วยเตี๋ยวเรือหมู", "ก๋วยเตี๋ยวเรือเนื้อ", "ก๋วยเตี๋ยวต้มยำกุ้ง",
    "ก๋วยเตี๋ยวต้มยำหมู", "ก๋วยเตี๋ยวต้มยำทะเล", "ก๋วยเตี๋ยวไก่มะระ", "บะหมี่หมูแดง", "บะหมี่เกี๊ยวกุ้ง",
    "ราดหน้าหมู", "ราดหน้าไก่", "ราดหน้าทะเล", "เย็นตาโฟ", "ขนมจีนน้ำยา", "ขนมจีนน้ำยาป่า",
    "ขนมจีนแกงเขียวหวานไก่", "ขนมจีนซาวน้ำ", "ส้มตำไทย", "ส้มตำปูปลาร้า", "ยำวุ้นเส้นหมูสับ", "ยำวุ้นเส้นทะเล",
    "ยำไข่ดาว", "ลาบหมู", "ลาบไก่", "ลาบเนื้อ", "น้ำตกหมู", "น้ำตกเนื้อ", "พล่ากุ้ง", "เบอร์เกอร์", "ไก่ทอด",
    "พิซซ่า", "ฮอทด็อก", "เฟรนช์ฟรายส์"
];

const drinkMenu = [
    "ชาไทย", "ชาเย็น", "กาแฟโบราณ", "น้ำมะตูม", "น้ำกระเจี๊ยบ", "น้ำอัญชันมะนาว", "น้ำลำไย", "ชาไข่มุก", "โค้ก", "เป๊ปซี่", "สไปรท์", "แฟนต้า",
    "ชาเขียว", "กาแฟ", "นมเย็น", "นมสด", "น้ำหวาน", "โอเลี้ยง", "น้ำเก๊กฮวย", "ชาดำ", "ชามะนาว", "น้ำส้ม", "น้ำแตงโม", "น้ำมะพร้าว", "น้ำแอปเปิ้ล",
    "น้ำเปล่า", "โอวัลติน", "น้ำผึ้งมะนาว", "โกโก้", "น้ำผลไม้รวม"
];

function updateFoodIcon(category) {
    const foodIcon = document.querySelector('.food-icon');
    if (category === 'food') {
        foodIcon.textContent = '🍜';
    } else {
        foodIcon.textContent = '🥤';
    }
}

function randomizeMenu() {
    const category = document.getElementById("category").value;
    updateFoodIcon(category);
    
    let menuList = category === "food" ? foodMenu : drinkMenu;
    let randomItem = menuList[Math.floor(Math.random() * menuList.length)];
    
    const menuElement = document.getElementById("randomMenu");
    menuElement.textContent = randomItem;
    
    // Apply animation
    menuElement.classList.remove('pop-animation');
    void menuElement.offsetWidth; // Trigger reflow
    menuElement.classList.add('pop-animation');
}

document.getElementById("randomizeBtn").addEventListener("click", randomizeMenu);
document.getElementById("category").addEventListener("change", function() {
    updateFoodIcon(this.value);
});