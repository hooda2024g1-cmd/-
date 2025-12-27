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

// عناصر DOM
const passwordScreen = document.getElementById('passwordScreen');
const contentScreen = document.getElementById('contentScreen');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitPassword');
const contentContainer = document.getElementById('contentContainer');
const backButton = document.getElementById('backButton');
const secretMessage = document.getElementById('secretMessage');
const clearInput = document.getElementById('clearInput');
const pageLoader = document.getElementById('pageLoader');

// عناصر العد التنازلي
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // إخفاء المحمل بعد تحميل الصفحة
    setTimeout(() => {
        pageLoader.classList.add('loaded');
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 500);
    }, 1000);
    
    // تهيئة الحقل
    passwordInput.focus();
    
    // تحديث العد التنازلي
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // تشغيل الموسيقى الخلفية
    setTimeout(() => {
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            backgroundMusic.volume = 0.3;
            backgroundMusic.play().catch(e => {
                console.log("الموسيقى لا تعمل تلقائياً، يحتاج المستخدم للتفاعل");
            });
        }
    }, 1500);
    
    // إضافة تأثيرات للمس للجوال
    initTouchEffects();
    
    // تهيئة مؤشرات التمرير
    initScrollIndicators();
});

// التحقق من كلمة السر
submitButton.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// زر مسح النص
clearInput.addEventListener('click', function() {
    passwordInput.value = '';
    passwordInput.focus();
    updateClearButton();
});

passwordInput.addEventListener('input', updateClearButton);

function updateClearButton() {
    if (passwordInput.value.length > 0) {
        clearInput.classList.add('active');
    } else {
        clearInput.classList.remove('active');
    }
}

function checkPassword() {
    const input = passwordInput.value.toLowerCase().trim();
    
    if (passwords[input]) {
        // كلمة السر صحيحة
        passwordInput.blur();
        showContent(input);
        showSecretMessage(`مرحبًا ${passwords[input]}! ❤️`);
        
        // تأثير اهتزاز إيجابي
        submitButton.style.animation = 'successPulse 0.5s';
        setTimeout(() => {
            submitButton.style.animation = '';
        }, 500);
    } else {
        // كلمة السر خاطئة
        passwordInput.style.animation = 'shake 0.5s';
        passwordInput.style.borderColor = '#ff3333';
        passwordInput.value = '';
        updateClearButton();
        
        setTimeout(() => {
            passwordInput.style.animation = '';
            passwordInput.style.borderColor = '';
            passwordInput.focus();
        }, 500);
        
        // تأثير خطأ
        submitButton.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            submitButton.style.transform = 'translateX(10px)';
            setTimeout(() => {
                submitButton.style.transform = '';
            }, 100);
        }, 100);
    }
}

function showContent(passwordKey) {
    // الانتقال الناعم للشاشة
    passwordScreen.classList.remove('active');
    setTimeout(() => {
        passwordScreen.style.display = 'none';
        contentScreen.style.display = 'flex';
        setTimeout(() => {
            contentScreen.classList.add('active');
            loadContent(passwordKey);
        }, 50);
    }, 400);
}

function loadContent(passwordKey) {
    const data = contentData[passwordKey];
    
    // بناء المحتوى
    contentContainer.innerHTML = `
        <div class="content">
            <h2>${data.title}</h2>
            <div class="message">${data.message}</div>
            <div class="memories">
                ${data.memories.map((memory, index) => `
                    <div class="memory-item" style="animation-delay: ${index * 0.1}s">
                        <i class="fas fa-heart"></i>
                        <div class="memory-text">${memory}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // إضافة تأثيرات للذكريات
    setTimeout(() => {
        const memoryItems = document.querySelectorAll('.memory-item');
        memoryItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}

// زر العودة
backButton.addEventListener('click', function() {
    contentScreen.classList.remove('active');
    setTimeout(() => {
        contentScreen.style.display = 'none';
        passwordScreen.style.display = 'flex';
        setTimeout(() => {
            passwordScreen.classList.add('active');
            passwordInput.value = '';
            passwordInput.focus();
            updateClearButton();
        }, 50);
    }, 400);
});

// رسالة سرية
function showSecretMessage(text) {
    const messageText = secretMessage.querySelector('p');
    messageText.textContent = text;
    secretMessage.style.display = 'block';
    
    setTimeout(() => {
        secretMessage.style.opacity = '0';
        setTimeout(() => {
            secretMessage.style.display = 'none';
            secretMessage.style.opacity = '1';
        }, 300);
    }, 2000);
}

// العد التنازلي
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
    const lovePercent = Math.min(100, Math.round(progressPercent + 50));
    
    document.getElementById('lovePercent').textContent = `${lovePercent}%`;
    
    // تأثيرات خاصة عند اقتراب السنة الجديدة
    if (days < 7) {
        document.querySelector('.countdown-icon').style.animationDuration = '1s';
        if (days < 3) {
            document.querySelector('.countdown').style.animation = 'pulse 1s infinite';
        }
    }
}

// تأثيرات اللمس للجوال
function initTouchEffects() {
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.addEventListener('touchstart', function(e) {
            const touch = e.touches[0];
            createTouchRipple(touch.clientX, touch.clientY);
        });
        
        // تحسين تجربة اللمس للأزرار
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
}

function createTouchRipple(x, y) {
    const ripple = document.querySelector('.touch-ripple');
    if (ripple) {
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.animation = 'ripple 0.6s linear';
        
        setTimeout(() => {
            ripple.style.animation = '';
        }, 600);
    }
}

// مؤشرات التمرير
function initScrollIndicators() {
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
        const dots = document.querySelectorAll('.scroll-dots .dot');
        
        if (dots.length > 0) {
            if (scrollPercentage < 33) {
                dots[0].classList.add('active');
                dots[1].classList.remove('active');
                dots[2].classList.remove('active');
            } else if (scrollPercentage < 66) {
                dots[0].classList.remove('active');
                dots[1].classList.add('active');
                dots[2].classList.remove('active');
            } else {
                dots[0].classList.remove('active');
                dots[1].classList.remove('active');
                dots[2].classList.add('active');
            }
        }
        
        scrollTimeout = setTimeout(() => {
            const scrollIndicator = document.querySelector('.swipe-indicator');
            if (scrollIndicator && scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transition = 'opacity 0.5s';
            }
        }, 100);
    });
}

// تحسينات أداء للجوال
let lastScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // التمرير لأسفل
                document.body.style.overflowY = 'auto';
            }
            lastScrollTop = st <= 0 ? 0 : st;
            ticking = false;
        });
        ticking = true;
    }
});

// تحسينات للوضع الأفقي
function handleOrientationChange() {
    const isLandscape = window.innerWidth > window.innerHeight;
    
    if (isLandscape) {
        document.body.classList.add('landscape');
        document.querySelector('.container')?.classList.add('landscape-mode');
    } else {
        document.body.classList.remove('landscape');
        document.querySelector('.container')?.classList.remove('landscape-mode');
    }
}

window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);

// تهيئة عند البدء
handleOrientationChange();

// إضافة أنماط CSS ديناميكية للحركات
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes successPulse {
        0% { transform: scale(1); box-shadow: 0 8px 25px rgba(255, 64, 129, 0.3); }
        50% { transform: scale(1.05); box-shadow: 0 12px 30px rgba(255, 64, 129, 0.5); }
        100% { transform: scale(1); box-shadow: 0 8px 25px rgba(255, 64, 129, 0.3); }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    .landscape-mode {
        max-width: 90% !important;
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }
    
    .memory-text {
        margin-top: 8px;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.9);
    }
`;
document.head.appendChild(style);

// منع التمرير الزائد على الجوال
document.body.addEventListener('touchmove', function(e) {
    if (e.target.classList.contains('container') || 
        e.target.closest('.container')) {
        const container = e.target.closest('.container');
        const isAtTop = container.scrollTop === 0;
        const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
        
        if (isAtTop && e.touches[0].clientY > 0) {
            e.preventDefault();
        }
        if (isAtBottom && e.touches[0].clientY < 0) {
            e.preventDefault();
        }
    }
}, { passive: false });

// تحميل الصفحة مع تأثيرات متدرجة
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);
});

// رسالة ترحيب
setTimeout(() => {
    showSecretMessage("مرحبًا بك في عالم الحب والرومانسية ❤️");
}, 2000);