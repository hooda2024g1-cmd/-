// كلمات السر الخاصة
const passwords = {
    "adam": "ملك",
    "mahmoud": "مريم",
    "mariam": "مريم"
};

// المحتوى الخاص بكل كلمة سر
const contentData = {
    "adam": {
        title: "إلى حبيبتي <span class='special-name'>ملك</span> ❤️",
        message: `
            <p>كل سنة وأنتِ أغلى ما في حياتي يا حبيبتي <span class='special-name'>ملك</span>.</p>
            <p>كلماتي تقف عاجزة أمام عظمة مشاعري تجاهكِ، فأنتِ أكثر من مجرد حبيبة، أنتِ شريكة حياتي وصديقتي وكل شيء جميل في هذا الكون.</p>
            <p>هذه السنة كانت مميزة لأنكِ كنتِ فيها بجانبي، ضحكتكِ كانت شمس أيامي ووجودكِ كان هدية من السماء لا أعرف كيف أشكر الله عليها.</p>
            <p>نحن الآن على أعتاب سنة جديدة، 2026 تنتظرنا بأحلامنا وآمالنا، وأنا أعاهدكِ أن تكون أجمل سنة في حياتنا معًا.</p>
            <p>سأظل بجانكِ في كل خطوة، أحملكِ حين تتعبين، وأضحك معكِ حين تفرحين، وأكون سندكِ في كل تحدٍ يواجهنا.</p>
            <p>أنتِ القصة الأجمل في حياتي، وأنتِ الحلم الذي تحقق، وأنتِ المستقبل الذي أتطلع إليه كل يوم.</p>
            <p><strong>كل سنة وأنتِ طيبة يا قمر، وكل سنة ونحن مع بعض ❤️</strong></p>
        `,
        memories: [
            "أول مرة تقابلنا فيها",
            "ضحكاتنا التي لا تنتهي",
            "اللحظات الهادئة بيننا",
            "أحلامنا للمستقبل"
        ]
    },
    "mahmoud": {
        title: "إلى <span class='special-name'>مريم</span>، حب حياتي ❤️",
        message: `
            <p>يا حبيبتي <span class='special-name'>مريم</span>، كل كلمة حب كتبتها في حياتي كانت تستحقكِ، وكل كلمة سأكتبها لنوفيكِ حقكِ.</p>
            <p>السنة اللي فاتت كانت معكِ أجمل سنين حياتي، وكل يوم يمر يثبت لي أن اختياري لكِ كان أفضل قرار في حياتي.</p>
            <p>أنتِ أكثر من مجرد حبيبة، أنتِ صديقتي، رفيقتي، وشريكة أحلامي. معكِ تعلمت معنى الحب الحقيقي.</p>
            <p>2025 كانت سنة جميلة لأننا كنا فيها مع بعض، و2026 ستكون أروع لأننا سنكتبها معًا بحبنا.</p>
            <p>أعدكِ أن أظل بجانبكِ دائمًا، أحميكِ، أحبكِ، وأجعل حياتكِ سعادة لا تنتهي.</p>
            <p>شكرًا لأنكِ جعلتِ مني إنسانًا أفضل، شكرًا على كل لحظة، كل ضحكة، كل نظرة، وكل شيء.</p>
            <p><strong>كل سنة وأنتِ أغلى ما أملك، وكل سنة وقلبكِ معي ❤️</strong></p>
        `,
        memories: [
            "اللحظات الخاصة بيننا",
            "الطاقة الإيجابية التي تضيفينها لحياتي",
            "تفهمكِ لي في أصعب الأوقات",
            "خططنا للمستقبل معًا"
        ]
    },
    "mariam": {
        title: "إلى <span class='special-name'>مريم</span>، نور حياتي ❤️",
        message: `
            <p>يا <span class='special-name'>مريم</span>، يا أجمل اسم وأغلى إنسان، كل سنة وأنتِ سعادتي وفرحتي.</p>
            <p>هذه السنة التي قضيناها معًا علمتني أن الحب الحقيقي موجود، وأنه يكون مع شخص مثلكِ.</p>
            <p>أنتِ الهدوء في عاصفة حياتي، والنور في أيامي المظلمة، والفرحة التي لا تنتهي.</p>
            <p>نحن الآن نقف على أعتاب 2026، وأنا متأكد أنها ستكون سنة مليئة بالإنجازات والسعادة لأننا فيها معًا.</p>
            <p>أشكر الله كل يوم على هذه النعمة التي منحني إياها، نعمة وجودكِ في حياتي.</p>
            <p>سأظل أحبكِ أكثر كل يوم، سأظل أعتز بكِ، وأحملكِ في قلبي إلى الأبد.</p>
            <p><strong>كل سنة وأنتِ بخير يا حبيبتي، وكل سنة وقلوبنا مع بعض ❤️</strong></p>
        `,
        memories: [
            "الذكريات الجميلة التي صنعناها",
            "تفاصيلكِ التي أحبها",
            "طريقة تفكيركِ المميزة",
            "أهدافنا المشتركة"
        ]
    }
};

// العناصر الرئيسية في الصفحة
const passwordScreen = document.getElementById('passwordScreen');
const contentScreen = document.getElementById('contentScreen');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitPassword');
const contentContainer = document.getElementById('contentContainer');
const backButton = document.getElementById('backButton');
const secretMessage = document.getElementById('secretMessage');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const progressBar = document.getElementById('progressBar');
const lovePercent = document.getElementById('lovePercent');

// عناصر العد التنازلي
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // إضافة قلوب متحركة
    createFloatingHearts();
    
    // بدء العد التنازلي للعام الجديد
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // تشغيل الموسيقى الخلفية تلقائيًا
    setTimeout(() => {
        backgroundMusic.play().catch(e => console.log("التشغيل التلقائي للموسيقى متوقف"));
    }, 1000);
    
    // إضافة تأثير كتابة في حقل كلمة السر
    passwordInput.addEventListener('focus', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    passwordInput.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});

// التعامل مع إدخال كلمة السر
submitButton.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const input = passwordInput.value.toLowerCase().trim();
    
    if (passwords[input]) {
        // كلمة السر صحيحة
        showContent(input);
        showSecretMessage(`مرحبًا ${passwords[input]}! ❤️`);
    } else {
        // كلمة السر خاطئة
        passwordInput.style.animation = 'shake 0.5s';
        passwordInput.style.borderColor = '#ff0000';
        passwordInput.value = '';
        passwordInput.placeholder = 'كلمة السر غير صحيحة! حاول مجددًا...';
        
        setTimeout(() => {
            passwordInput.style.animation = '';
            passwordInput.style.borderColor = '';
            passwordInput.placeholder = 'أدخل كلمة السر هنا...';
        }, 1000);
    }
}

function showContent(passwordKey) {
    // أنيميشن خروج عناصر القائمة فقط (وليس الشاشة كلها)
    const container = passwordScreen.querySelector('.container');
    // طبق الأنيميشن على الصندوق بالكامل (container)
    // عشوائيًا: يمين أو يسار (مثلاً حسب الوقت)
    const dir = (Date.now() % 2 === 0) ? 'slide-out-right' : 'slide-out-left';
    container.classList.add(dir);
    setTimeout(() => {
        passwordScreen.classList.remove('active');
        container.classList.remove('slide-out-right', 'slide-out-left');
        // تعبئة المحتوى المناسب
        const data = contentData[passwordKey];
        contentContainer.innerHTML = `
            <div class="content">
                <h2>${data.title}</h2>
                <div class="message">${data.message}</div>
                <div class="memories">
                    ${data.memories.map(memory => `
                        <div class="memory-item">
                            <i class="fas fa-heart"></i> ${memory}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        // أنيميشن دخول شاشة الرسالة من الأسفل للأعلى
        contentScreen.classList.add('slide-in-up');
        contentScreen.classList.add('active');
        setTimeout(() => {
            contentScreen.classList.remove('slide-in-up');
        }, 900);
        // إضافة تأثيرات للعناصر الجديدة
        setTimeout(() => {
            const memoryItems = document.querySelectorAll('.memory-item');
            memoryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 500);
    }, 700);
}

// زر العودة
backButton.addEventListener('click', function() {
    contentScreen.classList.remove('active');
    passwordScreen.classList.add('active');
    passwordInput.value = '';
    passwordInput.focus();
});

// إظهار رسالة سرية لفترة وجيزة
function showSecretMessage(text) {
    secretMessage.querySelector('p').textContent = text;
    secretMessage.style.display = 'block';
    
    setTimeout(() => {
        secretMessage.style.display = 'none';
    }, 3000);
}

// إنشاء قلوب متحركة
function createFloatingHearts() {
    const heartsContainer = document.querySelectorAll('.floating-hearts');
    
    heartsContainer.forEach(container => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.fontSize = `${Math.random() * 20 + 10}px`;
                heart.style.opacity = '0';
                heart.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
                heart.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(heart);
            }, i * 300);
        }
    });
}

// العد التنازلي للعام الجديد
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2026 00:00:00');
    const diff = newYear - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // تحديث شريط التقدم
    const totalSeconds = 365 * 24 * 60 * 60;
    const remainingSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    const progressPercent = 100 - (remainingSeconds / totalSeconds * 100);
    
    progressBar.style.width = `${progressPercent}%`;
    lovePercent.textContent = `${Math.min(100, Math.round(progressPercent + 50))}%`;
}

// التحكم بالموسيقى
musicToggle.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// إضافة تأثير هز للعناصر
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// إضافة رسالة ترحيب عند فتح الموقع
setTimeout(() => {
    showSecretMessage("مرحبًا بك في عالم الحب والرومانسية ❤️");
}, 1000);