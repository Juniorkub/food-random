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
    "พิซซ่า", "ฮอทด็อก", "เฟรนช์ฟรายส์", "ข้าวยำไก่แซ่บ", "ยำ", "ยำคอหมูย่าง", "ข้าวหมูกระเทียม", "ข้าวไก่กระเทียม",
    "ข้าวหมูพริกเกลือ", "ข้าวหมูทอด", "ข้าวไข่ข้น", "ยำมาม่า", "ผัดพริกแกงหมู", "ผัดพริกแกงไก่", "ผัดน้ำมันหอยหมู",
    "ผัดน้ำมันหอยไก่", "ผัดคะน้าหมูกรอบ", "ข้าวหน้าไก่", "หมูทอดกระเทียมพริกไทย", "หมูสามชั้นทอดน้ำปลา", "คอหมูย่าง",
    "ยำรวมทะเล", "ยำเห็ดเข็มทอง", "ยำไก่กรอบ"
];

const drinkMenu = [
    "ชาไทย", "ชาเย็น", "กาแฟโบราณ", "น้ำมะตูม", "น้ำกระเจี๊ยบ", "น้ำอัญชันมะนาว", "น้ำลำไย", "ชาไข่มุก", "โค้ก", "เป๊ปซี่", "สไปรท์", "แฟนต้า",
    "ชาเขียว", "กาแฟ", "นมเย็น", "นมสด", "น้ำหวาน", "โอเลี้ยง", "น้ำเก๊กฮวย", "ชาดำ", "ชามะนาว", "น้ำส้ม", "น้ำแตงโม", "น้ำมะพร้าว", "น้ำแอปเปิ้ล",
    "น้ำเปล่า", "โอวัลติน", "น้ำผึ้งมะนาว", "โกโก้", "น้ำผลไม้รวม"
];

let currentQuestion = 1;
let answers = [];


// ฟังก์ชันสำหรับนับจำนวนผู้เข้าชม
function updateVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    let lastVisit = localStorage.getItem('lastVisit');
    let today = new Date().toDateString(); // เก็บเป็นรูปแบบของวันที่

    if (lastVisit !== today) {
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
        localStorage.setItem('lastVisit', today);
    }

    document.getElementById('visitorCount').textContent = visitorCount;
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);

// เรียกใช้ฟังก์ชันนับผู้เข้าชมเมื่อโหลดเว็บไซต์
document.addEventListener('DOMContentLoaded', updateVisitorCount);

function updateFoodIcon(category) {
    const foodIcon = document.querySelector('.food-icon');
    if (category === 'food') {
        foodIcon.textContent = '🍜';
    } else {
        foodIcon.textContent = '🥤';
    }
}

// เพิ่มตัวแปรควบคุมแอนิเมชัน
let isSpinning = false;
let spinInterval;

function spinWheel(menuList, finalItem) {
    const menuElement = document.getElementById("randomMenu");
    let counter = 0;
    const totalSpins = 30; // จำนวนครั้งที่จะสลับเมนู
    
    // เริ่มด้วยความเร็วสูง แล้วค่อยๆ ช้าลง
    const initialSpeed = 50; // ms
    const speedIncrement = 10; // ms
    
    // ล้างการแสดงผลเดิม
    menuElement.classList.remove('pop-animation');
    
    // เริ่มการหมุน
    spinInterval = setInterval(() => {
        // สุ่มเมนูระหว่างหมุน
        let randomIndex = Math.floor(Math.random() * menuList.length);
        menuElement.textContent = menuList[randomIndex];
        
        counter++;
        
        // ช้าลงเรื่อยๆ
        if (counter % 3 === 0) {
            clearInterval(spinInterval);
            spinInterval = setInterval(() => {
                let randomIndex = Math.floor(Math.random() * menuList.length);
                menuElement.textContent = menuList[randomIndex];
                
                counter++;
                
                // ตรวจสอบว่าถึงเวลาหยุดหรือยัง
                if (counter >= totalSpins) {
                    clearInterval(spinInterval);
                    menuElement.textContent = finalItem;
                    
                    // เพิ่มแอนิเมชันเมื่อแสดงผลตัวสุดท้าย
                    menuElement.classList.add('pop-animation');
                    isSpinning = false;
                    document.getElementById("randomizeBtn").disabled = false;
                    document.getElementById("category").disabled = false;
                }
            }, initialSpeed + (counter * speedIncrement));
        }
    }, initialSpeed);
}

function randomizeMenu() {
    // ป้องกันการกดปุ่มซ้ำระหว่างกำลังสุ่ม
    if (isSpinning) return;
    
    isSpinning = true;
    document.getElementById("randomizeBtn").disabled = true;
    document.getElementById("category").disabled = true;
    
    const category = document.getElementById("category").value;
    updateFoodIcon(category);
    
    let menuList = category === "food" ? foodMenu : drinkMenu;
    let randomItem = menuList[Math.floor(Math.random() * menuList.length)];
    
    // เริ่มการหมุนวงล้อด้วยเมนูที่สุ่มได้เป็นค่าสุดท้าย
    spinWheel(menuList, randomItem);
}

document.getElementById("randomizeBtn").addEventListener("click", randomizeMenu);
document.getElementById("category").addEventListener("change", function() {
    updateFoodIcon(this.value);
});




// จัดการการสลับโหมด
const container = document.querySelector(".container"); // เปลี่ยนจาก getElementById เป็น querySelector
const chatContainer = document.getElementById("chatContainer");
const modeToggleBtn = document.getElementById("modeToggleBtn");

let isChatMode = false;

// ตั้งค่าเริ่มต้น
container.classList.remove('hidden'); // แทน container.style.display = 'block'
chatContainer.classList.add('hidden'); // แทน chatContainer.style.display = 'none'

// ฟังก์ชันในการสลับโหมด
modeToggleBtn.addEventListener("click", () => {
    isChatMode = !isChatMode;
    
    if (isChatMode) {
      // ซ่อนโหมดสุ่มอาหาร
      container.classList.add('hidden');
      // แสดงโหมดแชทบอท + รีเซ็ตคำถาม
      chatContainer.classList.remove('hidden');
      startChatbot();
    } else {
      // ซ่อนโหมดแชทบอท
      chatContainer.classList.add('hidden');
      // แสดงโหมดสุ่มอาหาร
      container.classList.remove('hidden');
      // รีเซ็ตคำถามและคำตอบ
      resetChatbot();
    }
  });
  
  function resetChatbot() {
    currentQuestion = 1;
    answers = [];
    
    // ซ่อนทุกคำถาม
    document.querySelectorAll('.question').forEach(q => {
      q.classList.add('hidden');
    });
    
    // ซ่อนผลลัพธ์และปุ่มยืนยัน
    document.getElementById('recommendationResult').classList.add('hidden');
    document.getElementById('submitAnswersBtn').classList.add('hidden');
    
    // แสดงคำถามแรกใหม่
    document.getElementById('question1').classList.remove('hidden');
  }


// เพิ่ม Event Listeners สำหรับปุ่มใหม่
document.getElementById('randomAgainBtn').addEventListener('click', function() {
    // สุ่มเมนูใหม่จากคำตอบเดิม
    const recommended = recommendMenu(answers);
    document.getElementById('recommendedMenu').textContent = recommended;
});

document.getElementById('restartBtn').addEventListener('click', function() {
    // กลับไปเริ่มต้นใหม่
    document.getElementById('recommendationResult').classList.add('hidden');
    startChatbot();
});


// ฟังก์ชันเริ่มต้นคำถามแชทบอท
function startChatbot() {
  currentQuestion = 1;
  answers = [];

  // ซ่อนผลลัพธ์และปุ่มดำเนินการ
  document.getElementById('recommendationResult').classList.add('hidden');
  // แสดงเฉพาะคำถามแรก
  document.getElementById('question1').classList.remove('hidden');
  document.getElementById('question2').classList.add('hidden');
  document.getElementById('question3').classList.add('hidden');
  document.getElementById('submitAnswersBtn').classList.add('hidden');
}

function showNextQuestion() {
    // ซ่อนคำถามปัจจุบัน
    document.getElementById(`question${currentQuestion}`).classList.add('hidden');
    
    // ไปคำถามถัดไป
    currentQuestion++;
    
    if (currentQuestion <= 3) {
        // แสดงคำถามถัดไป
        document.getElementById(`question${currentQuestion}`).classList.remove('hidden');
        // ซ่อนปุ่มยืนยันถ้ายังไม่ใช่คำถามสุดท้าย
        document.getElementById('submitAnswersBtn').classList.add('hidden');
    } else {
        // แสดงปุ่มยืนยันเมื่อตอบครบทุกคำถาม
        document.getElementById('submitAnswersBtn').classList.remove('hidden');
    }
}

function selectOption(option) {
    answers.push(option);
    console.log("เลือก:", option); // สำหรับทดสอบใน Console
    showNextQuestion();
}

// ตรวจสอบว่ามีการเรียกใช้ฟังก์ชันเริ่มต้นแชทบอทหรือไม่
document.addEventListener('DOMContentLoaded', function() {
    // รีเซ็ตแชทบอทเมื่อโหลดหน้า
    document.getElementById('question1').classList.remove('hidden');
    document.getElementById('question2').classList.add('hidden');
    document.getElementById('question3').classList.add('hidden');
});


function submitAnswers() {
    // 1. ตรวจสอบคำตอบ
    if (answers.length < 3) {
      alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
      return;
    }
  
    // 2. แสดงคำตอบ (สำหรับทดสอบ)
    console.log("คำตอบทั้งหมด:", answers);
    
    // คำนวณเมนูแนะนำ
    const recommended = recommendMenu(answers);
    document.getElementById('recommendedMenu').textContent = recommended;

    // ซ่อนปุ่มยืนยัน, แสดงผลลัพธ์
    document.querySelectorAll('.question').forEach(q => {
        q.classList.add('hidden');
      });

    // แสดงผลลัพธ์และปุ่มดำเนินการ
    document.getElementById('recommendationResult').classList.remove('hidden');
    document.getElementById('submitAnswersBtn').classList.add('hidden');
  }

  function recommendMenu(answers) {
    const [foodType, spiceLevel, style] = answers;
    
    let filteredMenu = foodMenu.filter(menu => {
        // ตรวจสอบประเภทอาหาร
        if (foodType === 'ข้าว' && !menu.includes('ข้าว')) return false;
        if (foodType === 'เส้น' && !menu.includes('ก๋วยเตี๋ยว') && !menu.includes('บะหมี่') && !menu.includes('ผัดไทย')) return false;
        if (foodType === 'ของกินเล่น') {
            const isSnack = menu.includes('ยำ') || 
                           menu.includes('ตำ') || 
                           menu.includes('ลาบ') || 
                           menu.includes('น้ำตก') || 
                           menu.includes('พล่า') || 
                           menu.includes('ปิ้ง') || 
                           menu.includes('ย่าง') ||
                           menu.includes('ส้มตำ');
            if (!isSnack) return false;
        }
        
        // กรณีเลือก "ไม่เผ็ด" - ให้ยกเว้นเมนูยำ/ตำบางชนิด
        if (spiceLevel === 'ไม่เผ็ด') {
            // เมนูที่เผ็ดโดยธรรมชาติ
            const spicyDishes = [
                'ต้มยำ', 'เผ็ด', 'พริก', 'กระเพรา', 'แกงส้ม', 
                'น้ำตก', 'ลาบ', 'พล่า', 'ส้มตำ', 'ยำ'
            ];
            
            // ยกเว้นบางเมนูที่สามารถไม่เผ็ดได้
            const canBeNonSpicy = [
                'ยำวุ้นเส้น', 'ยำมาม่า', 'ยำเห็ด'
            ];
            
            const isSpicy = spicyDishes.some(keyword => menu.includes(keyword));
            const canAdjust = canBeNonSpicy.some(keyword => menu.includes(keyword));
            
            if (isSpicy && !canAdjust) return false;
        }
        
        // ตรวจสอบสไตล์อาหาร
        if (style === 'จัดเต็ม' && menu.includes('ง่ายๆ')) return false;
        if (style === 'ง่ายๆ' && menu.length > 15) return false;
        
        return true;
    });
    
    // Fallback ระบบ
    if (filteredMenu.length === 0) {
        filteredMenu = foodMenu.filter(menu => {
            if (spiceLevel === 'ไม่เผ็ด') {
                const nonSpicyOptions = [
                    'ข้าวมันไก่', 'ข้าวหมูแดง', 'ผัดซีอิ๊ว', 
                    'ไข่เจียว', 'สุกี้', 'แกงจืด'
                ];
                return nonSpicyOptions.some(keyword => menu.includes(keyword));
            }
            return true;
        });
    }
    
    return filteredMenu.length > 0 
        ? filteredMenu[Math.floor(Math.random() * filteredMenu.length)]
        : "ไม่พบเมนูที่ตรงตามเงื่อนไข โปรดลองเลือกใหม่";
}

  document.getElementById('randomAgainBtn').addEventListener('click', function() {
    // สุ่มเมนูใหม่จากคำตอบเดิม
    const recommended = recommendMenu(answers);
    document.getElementById('recommendedMenu').textContent = recommended;
});

document.getElementById('restartBtn').addEventListener('click', function() {
    startChatbot();
});

