// --- القاموس الثنائي للترجمة (عربي / إنجليزي) ---
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عني",
        nav_education: "التعليم",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_interests: "الاهتمامات",
        nav_contact: "تواصل معي",
        hero_badge: "مهندس تقنية معلومات",
        hero_greeting: "مرحباً، أنا",
        hero_subtitle: "طريقي يجمع بين هندسة الشبكات المتقدمة، حماية البنية التحتية للأمن السيبراني، وتطبيقات الذكاء الاصطناعي لبناء أنظمة ذكية وآمنة.",
        btn_contact: "تواصل معي",
        btn_cv: "تحميل السيرة الذاتية",
        about_title: "نبذة عني",
        about_academic_heading: "الخلفية الأكاديمية",
        about_academic_desc: "أدرس تكنولوجيا المعلومات في جامعة ذمار - كلية الحاسبات والمعلوماتية. أركز جهودي على فهم وهندسة النظم التقنية المعقدة وربط الجانب الأكاديمي بالتطبيق العملي.",
        about_goals_heading: "الأهداف المهنية",
        about_goals_desc: "أسعى لتقديم نفسي بصورة احترافية، الحصول على فرص تدريب وتطوير مهني، وتقديم قيمة حقيقية في مشاريع البنية التحتية والأمن السيبراني والذكاء الاصطناعي.",
        edu_title: "التعليم والمؤهلات",
        edu_date: "المرحلة الحالية",
        edu_degree: "بكالوريوس في تكنولوجيا المعلومات (IT)",
        edu_university: "جامعة ذمار - كلية الحاسبات والمعلوماتية",
        edu_desc: "دراسة متقدمة تشمل هندسة الشبكات، أنظمة التشغيل، قواعد البيانات، وتحليل وتصميم نظم المعلومات.",
        skills_title: "المهارات التقنية",
        skill_cat_net: "الشبكات والبنية التحتية",
        skill_cat_sec: "الأمن السيبراني",
        skill_cat_ai: "الذكاء الاصطناعي والتقنية",
        projects_title: "المشاريع الرئيسية",
        project_nims_sub: "Network Infrastructure Management & Security System",
        project_nims_desc: "نظام متكامل لإدارة ومراقبة وتأمين البنية التحتية للشبكات في المؤسسات الأكاديمية (جامعة ذمار)، يشمل محاكاة الشبكات وتطبيق معايير الأمان المتقدمة.",
        interests_title: "مجالات الاهتمام",
        interest_net: "هندسة الشبكات",
        interest_infra: "البنية التحتية",
        interest_sec: "الأمن السيبراني",
        interest_ai: "الذكاء الاصطناعي",
        contact_title: "تواصل معي",
        contact_desc: "أرحب بالتواصل لفرص التدريب، التعاون الأكاديمي، أو الاستفسارات المهنية.",
        contact_loc: "ذمار، اليمن",
        form_name: "الاسم الكريم",
        form_email: "البريد الإلكتروني",
        form_msg: "رسالتك...",
        form_submit: "إرسال الرسالة",
        footer_rights: "جميع الحقوق محفوظة."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_interests: "Interests",
        nav_contact: "Contact",
        hero_badge: "IT Engineer",
        hero_greeting: "Hello, I'm",
        hero_subtitle: "My path combines advanced network engineering, cybersecurity infrastructure protection, and artificial intelligence applications to build smart and secure systems.",
        btn_contact: "Contact Me",
        btn_cv: "Download CV",
        about_title: "About Me",
        about_academic_heading: "Academic Background",
        about_academic_desc: "Studying Information Technology at Thamar University - Faculty of Computer and Informatics. Focusing on understanding complex technical systems and bridging theory with practical application.",
        about_goals_heading: "Professional Goals",
        about_goals_desc: "Seeking to present myself professionally, secure internship and professional development opportunities, and deliver real value in infrastructure, cybersecurity, and AI projects.",
        edu_title: "Education & Qualifications",
        edu_date: "Current",
        edu_degree: "Bachelor in Information Technology (IT)",
        edu_university: "Thamar University - Faculty of Computer & Informatics",
        edu_desc: "Advanced studies covering network engineering, operating systems, databases, and information systems analysis and design.",
        skills_title: "Technical Skills",
        skill_cat_net: "Networks & Infrastructure",
        skill_cat_sec: "Cybersecurity",
        skill_cat_ai: "AI & Technology",
        projects_title: "Key Projects",
        project_nims_sub: "Network Infrastructure Management & Security System",
        project_nims_desc: "An integrated system for managing, monitoring, and securing network infrastructure in academic institutions (Thamar University), featuring network simulation and advanced security standards.",
        interests_title: "Areas of Interest",
        interest_net: "Network Engineering",
        interest_infra: "Infrastructure",
        interest_sec: "Cybersecurity",
        interest_ai: "Artificial Intelligence",
        contact_title: "Get In Touch",
        contact_desc: "I welcome communication for internship opportunities, academic collaboration, or professional inquiries.",
        contact_loc: "Dhamar, Yemen",
        form_name: "Your Name",
        form_email: "Your Email",
        form_msg: "Your Message...",
        form_submit: "Send Message",
        footer_rights: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- عناصر التحكم ---
    const htmlRoot = document.getElementById('html-root');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // الحالة الافتراضية
    let currentLang = localStorage.getItem('site_lang') || 'ar';
    let currentTheme = localStorage.getItem('site_theme') || 'light';

    // تطبيق الإعدادات المحفوظة مسبقاً
    setLanguage(currentLang);
    setTheme(currentTheme);

    // --- تبديل اللغة ---
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('site_lang', currentLang);
        setLanguage(currentLang);
    });

    function setLanguage(lang) {
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langText.textContent = lang === 'ar' ? 'EN' : 'AR';

        // ترجمة العناصر النصية
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // ترجمة حقول الإدخال (Placeholders)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // --- تبديل الوضع الداكن/الفاتح ---
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('site_theme', currentTheme);
        setTheme(currentTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            htmlRoot.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            htmlRoot.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // --- القائمة المتجاوبة للهواتف ---
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});

