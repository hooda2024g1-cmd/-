// تهيئة العناصر والمتغيرات
const elements = {
    // الشاشات
    passwordScreen: document.getElementById('passwordScreen'),
    contentScreen: document.getElementById('contentScreen'),
    pageLoader: document.getElementById('pageLoader'),
    
    // عناصر الإدخال
    passwordInput: document.getElementById('passwordInput'),
    submitPassword: document.getElementById('submitPassword'),
    clearInput: document.getElementById('clearInput'),
    
    // عناصر المحتوى
    contentContainer: document.getElementById('contentContainer'),
    backButton: document.getElementById('backButton'),
    secretMessage: document.getElementById('secretMessage'),
    
    // عناصر العد التنازلي
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    
    // عناصر التقدم
    progressBar: document.getElementById('progressBar'),
    lovePercent: document.getElementById('lovePercent'),
    
    // الصوتيات
    backgroundMusic: document.getElementById('backgroundMusic'),
    clickSound: document.getElementById('clickSound'),
    successSound: document.getElementById('successSound'),
    
    // العناصر المتحركة
    floatingElements: document.querySelectorAll('.float-element'),
    bgParticles: document.querySelector('.bg-animated-particles'),
    entrySparks: document.querySelectorAll('.entry-spark'),
    containerGlow: document.querySelector('.container-glow')
};

// كلمات السر والمحتوى
const passwords = {
    "adam": { name: "ملك", color: "#ff4081" },
    "mahmoud": { name: "مريم", color: "#ff8a00" },
    "mariam": { name: "مريم", color: "#40e0d0" }
};

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

// حالة التطبيق
const appState = {
    currentUser: null,
    isTransitioning: false,
    musicEnabled: true,
    touchEnabled: 'ontouchstart' in window
};

// تحسينات التحميل الأولي
window.addEventListener('DOMContentLoaded', initializeApp);

async function initializeApp() {
    try {
        // إظهار شاشة التحميل
        showPageLoader();
        
        // تهيئة الصوتيات
        await initializeAudio();
        
        // تهيئة الرسوم المتحركة
        initializeAnimations();
        
        // تهيئة الأحداث
        initializeEvents();
        
        // تهيئة العناصر الطافية
        initializeFloatingElements();
        
        // بدء العد التنازلي
        startCountdown();
        
        // إخفاء شاشة التحميل بعد تأخير
        setTimeout(() => {
            hidePageLoader();
            playSuccessSound();
            showWelcomeMessage();
        }, 2000);
        
    } catch (error) {
        console.error('خطأ في تهيئة التطبيق:', error);
        hidePageLoader();
    }
}

function showPageLoader() {
    elements.pageLoader.classList.remove('loaded');
    elements.pageLoader.style.display = 'flex';
    
    // تحديث شريط التحميل
    const loaderPercent = elements.pageLoader.querySelector('.loader-percent');
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        loaderPercent.textContent = `${Math.floor(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
        }
    }, 100);
}

function hidePageLoader() {
    elements.pageLoader.classList.add('loaded');
    setTimeout(() => {
        elements.pageLoader.style.display = 'none';
    }, 600);
}

async function initializeAudio() {
    try {
        // ضبط مستوى الصوت
        elements.backgroundMusic.volume = 0.3;
        elements.clickSound.volume = 0.2;
        elements.successSound.volume = 0.3;
        
        // محاولة تشغيل الموسيقى الخلفية
        if (appState.musicEnabled) {
            await elements.backgroundMusic.play();
        }
    } catch (error) {
        console.log('تعذر تشغيل الموسيقى تلقائياً');
    }
}

function initializeAnimations() {
    // تأثيرات الخلفية
    animateBackgroundParticles();
    
    // تأثيرات العناصر الطافية
    animateFloatingElements();
    
    // تأثيرات الحاوية
    animateContainerGlow();
    
    // تأثيرات كتابة العنوان
    animateTitleTyping();
}

function initializeEvents() {
    // أحداث حقل الإدخال
    elements.passwordInput.addEventListener('input', handleInputChange);
    elements.passwordInput.addEventListener('focus', handleInputFocus);
    elements.passwordInput.addEventListener('blur', handleInputBlur);
    
    // أحداث زر الإرسال
    elements.submitPassword.addEventListener('click', handleSubmit);
    elements.passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSubmit();
    });
    
    // أحداث زر المسح
    elements.clearInput.addEventListener('click', handleClearInput);
    
    // أحداث زر العودة
    elements.backButton.addEventListener('click', handleBackButton);
    
    // أحداث اللمس للجوال
    if (appState.touchEnabled) {
        initializeTouchEvents();
    }
    
    // تحديث العد التنازلي
    setInterval(updateCountdown, 1000);
    
    // تحديث شريط التقدم
    setInterval(updateLoveProgress, 2000);
}

function initializeTouchEvents() {
    // تأثيرات اللمس
    document.addEventListener('touchstart', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') {
            createTouchRipple(e.touches[0]);
        }
    });
    
    // منع التكبير على النقر المزدوج
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

function createTouchRipple(touch) {
    const ripple = document.createElement('div');
    ripple.className = 'effect-touch-ripple';
    ripple.style.left = `${touch.clientX}px`;
    ripple.style.top = `${touch.clientY}px`;
    
    document.querySelector('.mobile-effects-advanced').appendChild(ripple);
    
    setTimeout(() => {
        ripple.style.animation = 'rippleExpand 0.6s ease-out forwards';
        setTimeout(() => ripple.remove(), 600);
    }, 10);
}

function animateBackgroundParticles() {
    if (!elements.bgParticles) return;
    
    const colors = ['#ff4081', '#ff8a00', '#40e0d0'];
    const particles = elements.bgParticles;
    
    // إنشاء جسيمات إضافية
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                opacity: ${Math.random() * 0.3 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particles.appendChild(particle);
            
            // إزالة الجسيم بعد انتهاء الحركة
            setTimeout(() => particle.remove(), 15000);
        }, i * 300);
    }
}

function animateFloatingElements() {
    elements.floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
        element.style.animationDuration = `${Math.random() * 10 + 15}s`;
    });
}

function animateContainerGlow() {
    if (!elements.containerGlow) return;
    
    const colors = [
        'rgba(255, 64, 129, 0.2)',
        'rgba(255, 138, 0, 0.2)',
        'rgba(64, 224, 208, 0.2)'
    ];
    
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        elements.containerGlow.style.background = `linear-gradient(45deg, 
            transparent, 
            ${randomColor}, 
            transparent)`;
    }, 3000);
}

function animateTitleTyping() {
    const titleChars = document.querySelectorAll('.title-char');
    titleChars.forEach((char, index) => {
        char.style.animationDelay = `${index * 0.1}s`;
    });
}

function handleInputChange() {
    const value = elements.passwordInput.value;
    const clearBtn = elements.clearInput;
    
    if (value.length > 0) {
        clearBtn.classList.add('active');
        animateInputSuccess();
    } else {
        clearBtn.classList.remove('active');
    }
}

function handleInputFocus() {
    elements.passwordInput.parentElement.classList.add('focused');
    playClickSound();
}

function handleInputBlur() {
    elements.passwordInput.parentElement.classList.remove('focused');
}

function handleClearInput() {
    elements.passwordInput.value = '';
    elements.passwordInput.focus();
    elements.clearInput.classList.remove('active');
    playClickSound();
}

async function handleSubmit() {
    if (appState.isTransitioning) return;
    
    const input = elements.passwordInput.value.toLowerCase().trim();
    
    if (!input) {
        showInputError('يرجى إدخال كلمة السر');
        return;
    }
    
    playClickSound();
    
    if (passwords[input]) {
        await handleSuccess(input);
    } else {
        await handleError();
    }
}

async function handleSuccess(passwordKey) {
    appState.isTransitioning = true;
    appState.currentUser = passwordKey;
    
    // إضافة تأثيرات النجاح
    elements.submitPassword.classList.add('success');
    animateSuccessEffects();
    playSuccessSound();
    
    // إخفاء الشاشة الحالية بإنيميشن
    await animateScreenTransitionOut(elements.passwordScreen);
    
    // إظهار الشاشة الجديدة بإنيميشن
    await showContentScreen(passwordKey);
    
    // إظهار رسالة السر
    showSecretMessage(`مرحبًا ${passwords[passwordKey].name}! ❤️`);
    
    appState.isTransitioning = false;
}

async function handleError() {
    appState.isTransitioning = true;
    
    // تأثيرات الخطأ
    elements.passwordInput.classList.add('error');
    animateErrorEffects();
    
    // رسالة الخطأ
    showInputError('كلمة السر غير صحيحة! حاول مرة أخرى');
    
    // إعادة تعيين الحقل
    setTimeout(() => {
        elements.passwordInput.value = '';
        elements.passwordInput.classList.remove('error');
        elements.clearInput.classList.remove('active');
        elements.passwordInput.focus();
        appState.isTransitioning = false;
    }, 1500);
}

async function animateScreenTransitionOut(screen) {
    return new Promise(resolve => {
        // تأثيرات الخروج
        const elementsToAnimate = screen.querySelectorAll('.heart-animation, .main-title, .password-input, .hint');
        
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `fadeOutUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
            }, index * 100);
        });
        
        // إخفاء الشاشة
        setTimeout(() => {
            screen.classList.remove('active');
            screen.style.display = 'none';
            resolve();
        }, 800);
    });
}

async function showContentScreen(passwordKey) {
    // إظهار الشاشة الجديدة
    elements.contentScreen.style.display = 'flex';
    setTimeout(() => {
        elements.contentScreen.classList.add('active');
    }, 50);
    
    // تحميل المحتوى
    loadContent(passwordKey);
    
    // تشغيل تأثيرات الدخول
    animateEntryEffects();
    
    // بدء إنيميشنات المحتوى
    animateContentElements();
}

function loadContent(passwordKey) {
    const data = contentData[passwordKey];
    
    // تحديث شريط التقدم باللون المناسب
    const color = passwords[passwordKey].color;
    document.documentElement.style.setProperty('--primary-color', color);
    
    // بناء المحتوى
    elements.contentContainer.innerHTML = `
        <div class="content">
            <h2 class="content-title">${data.title}</h2>
            <div class="message">${data.message}</div>
            <div class="memories">
                ${data.memories.map((memory, index) => `
                    <div class="memory-item" style="animation-delay: ${index * 0.2}s">
                        <i class="fas fa-heart"></i>
                        <div class="memory-text">${memory}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // إضافة تأثيرات للعناصر الجديدة
    setTimeout(() => {
        const contentElements = elements.contentContainer.querySelectorAll('.content-title, .message, .memory-item');
        contentElements.forEach((element, index) => {
            element.style.animation = `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${index * 0.1}s`;
        });
    }, 300);
}

function animateEntryEffects() {
    elements.entrySparks.forEach(spark => {
        spark.style.animationPlayState = 'running';
    });
    
    // تأثيرات اضافية
    createEntryConfetti();
}

function createEntryConfetti() {
    const colors = ['#ff4081', '#ff8a00', '#40e0d0', '#ffeb3b'];
    const confettiContainer = document.querySelector('.secret-confetti');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.innerHTML = ['❤️', '✨', '🌟', '🎉'][Math.floor(Math.random() * 4)];
        confetti.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -20px;
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
            animation-delay: ${Math.random() * 1}s;
            opacity: 0;
        `;
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

function animateContentElements() {
    // إنيميشنات شريط التقدم
    const progressFill = elements.progressBar;
    progressFill.style.animation = 'progressWave 2s linear infinite';
    
    // إنيميشنات العد التنازلي
    const timeUnits = document.querySelectorAll('.time-unit');
    timeUnits.forEach((unit, index) => {
        unit.style.animation = `timeUnitFloat 3s ease-in-out infinite ${index * 0.2}s`;
    });
}

function handleBackButton() {
    if (appState.isTransitioning) return;
    
    playClickSound();
    
    // تأثيرات الخروج
    animateScreenTransitionOut(elements.contentScreen);
    
    // العودة للشاشة الرئيسية
    setTimeout(() => {
        elements.contentScreen.style.display = 'none';
        elements.passwordScreen.style.display = 'flex';
        setTimeout(() => {
            elements.passwordScreen.classList.add('active');
            elements.passwordInput.value = '';
            elements.passwordInput.focus();
            
            // إعادة تعيين الإنيميشنات
            resetAnimations();
        }, 50);
    }, 800);
}

function resetAnimations() {
    // إعادة تعيين عناصر الشاشة الرئيسية
    const elementsToReset = elements.passwordScreen.querySelectorAll('.heart-animation, .main-title, .password-input, .hint');
    elementsToReset.forEach(element => {
        element.style.animation = '';
    });
}

function showSecretMessage(text) {
    const secretText = elements.secretMessage.querySelector('.secret-text');
    secretText.textContent = text;
    
    elements.secretMessage.style.display = 'block';
    
    // تأثير إظهار الرسالة
    setTimeout(() => {
        elements.secretMessage.style.opacity = '0';
        setTimeout(() => {
            elements.secretMessage.style.display = 'none';
            elements.secretMessage.style.opacity = '1';
        }, 300);
    }, 2500);
}

function showInputError(message) {
    const inputContainer = elements.passwordInput.parentElement;
    
    // إضافة رسالة الخطأ
    let errorElement = inputContainer.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        inputContainer.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.animation = 'fadeInUp 0.3s forwards';
    
    // إزالة رسالة الخطأ بعد 3 ثواني
    setTimeout(() => {
        errorElement.style.animation = 'fadeOutDown 0.3s forwards';
        setTimeout(() => errorElement.remove(), 300);
    }, 3000);
}

function animateSuccessEffects() {
    // تأثيرات الزر
    const btnRipple = elements.submitPassword.querySelector('.btn-ripple');
    btnRipple.style.animation = 'rippleExpand 0.6s ease-out';
    
    // تأثيرات اضافية
    createSuccessParticles();
}

function animateErrorEffects() {
    // تأثير اهتزاز
    elements.passwordInput.style.animation = 'errorShake 0.5s';
    
    // تأثير لوني
    elements.passwordInput.style.borderColor = '#ff3333';
    elements.passwordInput.style.boxShadow = '0 0 0 4px rgba(255, 51, 51, 0.2)';
    
    setTimeout(() => {
        elements.passwordInput.style.animation = '';
        elements.passwordInput.style.borderColor = '';
        elements.passwordInput.style.boxShadow = '';
    }, 500);
}

function createSuccessParticles() {
    const submitBtn = elements.submitPassword;
    const rect = submitBtn.getBoundingClientRect();
    const colors = ['#ff4081', '#ff8a00', '#40e0d0', '#ffeb3b'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'success-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            z-index: 1000;
            pointer-events: none;
            animation: successParticle ${Math.random() * 1 + 0.5}s ease-out forwards;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function startCountdown() {
    updateCountdown();
    
    // تحديث مستمر
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2026 00:00:00');
    const diff = newYear - now;
    
    if (diff <= 0) {
        // وصلنا للسنة الجديدة
        elements.days.textContent = '00';
        elements.hours.textContent = '00';
        elements.minutes.textContent = '00';
        elements.seconds.textContent = '00';
        
        // تأثيرات الاحتفال
        if (!document.body.classList.contains('new-year-celebration')) {
            startNewYearCelebration();
        }
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // تحديث الأرقام مع تأثير flip
    updateNumberWithFlip(elements.days, days);
    updateNumberWithFlip(elements.hours, hours);
    updateNumberWithFlip(elements.minutes, minutes);
    updateNumberWithFlip(elements.seconds, seconds);
    
    // تأثيرات خاصة عند اقتراب السنة الجديدة
    if (days < 7) {
        document.querySelector('.countdown-icon').style.animationDuration = '1s';
        
        if (days < 3) {
            document.querySelector('.countdown').style.animation = 'pulse 1s infinite';
        }
    }
}

function updateNumberWithFlip(element, newValue) {
    const currentValue = parseInt(element.textContent);
    const formattedValue = newValue.toString().padStart(2, '0');
    
    if (currentValue !== newValue) {
        // تأثير flip
        const flipElement = element.parentElement.querySelector('.time-flip');
        if (flipElement) {
            flipElement.style.animation = 'flipEffect 0.5s ease-out';
            setTimeout(() => {
                flipElement.style.animation = '';
            }, 500);
        }
        
        // تحديث القيمة
        element.textContent = formattedValue;
        
        // تأثير إضافي للأرقام
        element.style.animation = 'numberPop 0.3s ease-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }
}

function updateLoveProgress() {
    if (!elements.lovePercent) return;
    
    // تحديث عشوائي لمستوى الحب (للإثراء فقط)
    const currentPercent = parseInt(elements.lovePercent.textContent);
    const change = Math.random() * 10 - 5; // تغيير بين -5 و +5
    let newPercent = Math.min(100, Math.max(50, currentPercent + change));
    
    elements.lovePercent.textContent = `${Math.round(newPercent)}%`;
    elements.progressBar.style.width = `${newPercent}%`;
    
    // تأثيرات اللون
    if (newPercent > 90) {
        elements.lovePercent.style.color = '#ff4081';
    } else if (newPercent > 70) {
        elements.lovePercent.style.color = '#ff8a00';
    } else {
        elements.lovePercent.style.color = '#40e0d0';
    }
}

function startNewYearCelebration() {
    document.body.classList.add('new-year-celebration');
    
    // رسالة تهنئة
    showSecretMessage('🎉 كل عام وأنتم بخير! سنة 2026 سعيدة! 🎊');
    
    // تأثيرات احتفالية
    createCelebrationConfetti();
    
    // تحديث رسالة السنة الجديدة
    const yearMessage = document.querySelector('.new-year-message');
    if (yearMessage) {
        yearMessage.querySelector('h3').textContent = '🎊 سنة 2026 سعيدة! 🎊';
        yearMessage.querySelector('p:first-of-type').textContent = 'كل عام وأنتم بخير!';
        yearMessage.querySelector('p:last-of-type').textContent = 'نتمنى لكم سنة مليئة بالنجاح والسعادة!';
    }
}

function createCelebrationConfetti() {
    const colors = ['#ff4081', '#ff8a00', '#40e0d0', '#ffeb3b', '#ffffff'];
    const symbols = ['🎉', '✨', '🌟', '❤️', '🎊', '💫', '🥳', '🎈'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'celebration-confetti';
            confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            confetti.style.cssText = `
                position: fixed;
                font-size: ${Math.random() * 24 + 16}px;
                color: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -50px;
                z-index: 10000;
                pointer-events: none;
                animation: celebrationFall ${Math.random() * 3 + 2}s linear forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }
}

function showWelcomeMessage() {
    setTimeout(() => {
        showSecretMessage('مرحبًا بك في عالم الحب والرومانسية ❤️');
    }, 1000);
}

function playClickSound() {
    try {
        elements.clickSound.currentTime = 0;
        elements.clickSound.play();
    } catch (error) {
        // تجاهل الأخطاء الصوتية
    }
}

function playSuccessSound() {
    try {
        elements.successSound.currentTime = 0;
        elements.successSound.play();
    } catch (error) {
        // تجاهل الأخطاء الصوتية
    }
}

// إضافة أنماط CSS ديناميكية للحركات
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes fadeOutUp {
        to {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOutDown {
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
    
    @keyframes rippleExpand {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes successParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes celebrationFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
    
    @keyframes particleFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes numberPop {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes progressWave {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 200% 50%;
        }
    }
    
    .error-message {
        position: absolute;
        bottom: -25px;
        right: 0;
        color: #ff3333;
        font-size: 12px;
        font-weight: 500;
        background: rgba(255, 51, 51, 0.1);
        padding: 4px 12px;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 51, 51, 0.2);
        z-index: 10;
    }
    
    .success-particle {
        filter: drop-shadow(0 0 5px currentColor);
    }
    
    .celebration-confetti {
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
    }
    
    .new-year-celebration .container {
        animation: celebrationGlow 2s ease-in-out infinite;
    }
    
    @keyframes celebrationGlow {
        0%, 100% {
            box-shadow: 
                0 15px 35px rgba(255, 64, 129, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        50% {
            box-shadow: 
                0 25px 50px rgba(255, 64, 129, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1);
        }
    }
`;
document.head.appendChild(dynamicStyles);

// دعم الجوال المتقدم
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}

// تحسينات لأداء الجوال
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // التمرير لأسفل
        document.body.style.overflowY = 'auto';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

// تهيئة تلقائية عند الانتهاء
setTimeout(() => {
    document.body.classList.add('loaded');
}, 100);