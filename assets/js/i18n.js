/*!
=========================================================
* i18n - Internationalization (EN / VN)
=========================================================
*/

const LANG_STORAGE_KEY = 'portfolio_lang';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'vn'];

const TRANSLATIONS = {
    en: {
        'meta.title': 'Portfolio | Phung The Anh',

        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        'header.greeting': 'HI!',
        'header.intro': "I'm Phung The Anh",
        'header.subtitle': 'FRONTEND DEVELOPER',
        'header.cta': 'Visit My Works',

        'about.subtitle': 'Who Am I?',
        'about.title': 'About Me',
        'about.name.label': 'Name:',
        'about.name.value': 'Phung The Anh',
        'about.address.label': 'Address:',
        'about.address.value': 'Thanh Xuan, Ha Noi',
        'about.email.label': 'Email:',
        'about.email.value': 'phungtheanh2001@gmail.com',
        'about.major.label': 'Major:',
        'about.major.value': 'Information Technology - Electric Power University',
        'about.profile.title': 'Profile',
        'about.profile.text': 'Software developer with 3+ years of experience, having contributed to multiple real-world projects and delivered measurable value to clients. Possesses strong logical thinking, along with solid analytical and problem-solving skills, and consistently takes a proactive approach in proposing optimal solutions.',
        'about.goal.text': 'My goal is to become a key member of a technical team, contributing to the development of high-quality products while continuously improving my professional expertise. I work effectively both independently and in team environments, with a strong sense of responsibility, attention to detail, and good communication skills.',
        'about.download': 'Download CV',

        'skills.subtitle': 'What I Use?',
        'skills.title': 'Skills & Technologies',
        'skills.group.frontend': 'Frontend',
        'skills.group.backend': 'Backend & API',
        'skills.group.devops': 'DevOps & Tools',
        'skills.group.other': 'Others',

        'experience.subtitle': 'My Journey',
        'experience.title': 'Professional Experience',

        'experience.viettel.period': '11/2025 – 05/2026',
        'experience.viettel.title': 'Chatbot AI - Viettel AI',
        'experience.viettel.role': 'Frontend Developer (React.js, Vue.js, WebSocket)',
        'experience.viettel.item1': 'Used WebSocket to enable real-time chat with AI bots.',
        'experience.viettel.item2': 'Implemented file and image upload features for interacting with the AI chatbot.',
        'experience.viettel.item3': 'Integrated enterprise SSO for login and logout.',
        'experience.viettel.item4': 'Developed chatbot features: chat history, create new chat by session, switch between bots.',
        'experience.viettel.item5': 'Built embeddable iframe with multi-theme support for different Viettel websites.',

        'experience.antv.period': '04/2025 – 08/2025',
        'experience.antv.title': 'News Website for An Ninh TV',
        'experience.antv.role': 'Frontend Developer (Next.js)',
        'experience.antv.item1': 'Set up the project (SSR) and built responsive UI for multiple device types.',
        'experience.antv.item2': 'Worked closely with Backend and QA teams to complete and refine features.',
        'experience.antv.item3': 'Updated, improved and added new features based on client requirements.',

        'experience.lutino.period': '08/2024 – 04/2025',
        'experience.lutino.title': 'AI Meeting Note-Taking Software – Lutino',
        'experience.lutino.role': 'Frontend Developer (ReactJS)',
        'experience.lutino.item1': 'Implemented signup and login via Gmail and Microsoft accounts.',
        'experience.lutino.item2': 'Built features to add or remove team members.',
        'experience.lutino.item3': 'Developed functionality to upload YouTube links, MP3, MP4 files and automatically analyze conversations, generate tags, and summarize content.',
        'experience.lutino.item4': 'Implemented chat and meeting comment features.',

        'experience.hisport.period': '04/2024 – 04/2025',
        'experience.hisport.title': 'Sports Booking App - Hisport',
        'experience.hisport.role': 'Frontend Developer (ReactJS) - built mobile app with Cordova & Capacitor',
        'experience.hisport.item1': 'Built signup and login features for users and venue owners.',
        'experience.hisport.item2': 'Developed search and filtering for venues based on GPS location and nationwide areas.',
        'experience.hisport.item3': 'Implemented booking features by time slots, weekly and monthly schedules.',
        'experience.hisport.item4': 'Integrated mobile push notifications using Capacitor.',

        'experience.vdone.period': '03/2023 – 02/2024',
        'experience.vdone.title': 'E-commerce Website - VDONE',
        'experience.vdone.role': 'Frontend Developer (ReactJS & ElectronJS)',
        'experience.vdone.item1': 'Built the UI from Figma and integrated APIs for homepage, login, registration, user page, posts and videos.',
        'experience.vdone.item2': 'Used ElectronJS to build a desktop app for Windows and Linux to print purchase invoices on a mini printer.',

        'experience.courses.period': '08/2022 – 02/2023',
        'experience.courses.title': 'Insurance Courses Website',
        'experience.courses.role': 'Frontend Developer (HTML, CSS, JavaScript, jQuery)',
        'experience.courses.item1': 'Built interfaces for insurance sales, courses, articles, videos and exercises.',
        'experience.courses.item2': 'Worked with backend developers to integrate APIs into the website.',

        'contact.subtitle': 'How can you reach me?',
        'contact.title': 'Contact Me',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Enter Email',
        'contact.form.message': 'Write Something',
        'contact.form.submit': 'Send Message',
        'contact.success': 'Email sent successfully',
        'contact.error': 'Failed to send email. Please try again.',
        'contact.validation': 'Please fill in all fields',

        'footer.copyright': 'Portfolio | Phung The Anh',

        'lang.switch.aria': 'Switch language'
    },
    vn: {
        'meta.title': 'Portfolio | Phùng Thế Anh',

        'nav.home': 'Trang chủ',
        'nav.about': 'Giới thiệu',
        'nav.skills': 'Kỹ năng',
        'nav.experience': 'Kinh nghiệm',
        'nav.contact': 'Liên hệ',

        'header.greeting': 'XIN CHÀO!',
        'header.intro': 'Tôi là Phùng Thế Anh',
        'header.subtitle': 'LẬP TRÌNH VIÊN FRONTEND',
        'header.cta': 'Xem dự án của tôi',

        'about.subtitle': 'Tôi là ai?',
        'about.title': 'Giới thiệu',
        'about.name.label': 'Họ tên:',
        'about.name.value': 'Phùng Thế Anh',
        'about.address.label': 'Địa chỉ:',
        'about.address.value': 'Thanh Xuân, Hà Nội',
        'about.email.label': 'Email:',
        'about.email.value': 'phungtheanh2001@gmail.com',
        'about.major.label': 'Chuyên ngành:',
        'about.major.value': 'Công nghệ Thông tin - Đại học Điện lực',
        'about.profile.title': 'Hồ sơ',
        'about.profile.text': 'Lập trình viên với hơn 3 năm kinh nghiệm, đã tham gia phát triển nhiều dự án thực tế và mang lại giá trị rõ ràng cho khách hàng. Có tư duy logic, khả năng phân tích và giải quyết vấn đề tốt, đồng thời luôn chủ động đề xuất các giải pháp tối ưu.',
        'about.goal.text': 'Mục tiêu của tôi là trở thành một thành viên nòng cốt trong đội ngũ kỹ thuật, đóng góp vào việc phát triển sản phẩm chất lượng cao, đồng thời liên tục nâng cao năng lực chuyên môn. Tôi làm việc hiệu quả cả độc lập và theo nhóm, với tinh thần trách nhiệm, cẩn thận và giao tiếp tốt.',
        'about.download': 'Tải CV',

        'skills.subtitle': 'Công nghệ tôi sử dụng',
        'skills.title': 'Kỹ năng & Công nghệ',
        'skills.group.frontend': 'Frontend',
        'skills.group.backend': 'Backend & API',
        'skills.group.devops': 'DevOps & Công cụ',
        'skills.group.other': 'Khác',

        'experience.subtitle': 'Hành trình của tôi',
        'experience.title': 'Kinh nghiệm làm việc',

        'experience.viettel.period': '11/2025 – 05/2026',
        'experience.viettel.title': 'Trợ lý ảo - Viettel AI',
        'experience.viettel.role': 'Frontend Developer (ReactJS, VueJS, WebSocket)',
        'experience.viettel.item1': 'Sử dụng WebSocket để kết nối và chat real-time với bot AI.',
        'experience.viettel.item2': 'Xây dựng chức năng upload file, ảnh để giao tiếp với chatbot AI.',
        'experience.viettel.item3': 'Tích hợp đăng nhập, đăng xuất SSO của tập đoàn.',
        'experience.viettel.item4': 'Phát triển tính năng lịch sử chat, tạo hội thoại mới theo session, chuyển đổi bots cho chatbot AI.',
        'experience.viettel.item5': 'Tạo nhúng iframe và theme riêng dùng cho các trang web khác nhau của Viettel.',

        'experience.antv.period': '04/2025 – 08/2025',
        'experience.antv.title': 'Trang web tin tức cho ANTV',
        'experience.antv.role': 'Frontend Developer (NextJS)',
        'experience.antv.item1': 'Dựng source (SSR) và làm giao diện, chức năng tương ứng với các thiết bị.',
        'experience.antv.item2': 'Phối hợp với Backend và QA để hoàn thiện chức năng.',
        'experience.antv.item3': 'Chỉnh sửa, cải thiện, đổi mới chức năng theo yêu cầu của khách hàng.',

        'experience.lutino.period': '08/2024 – 04/2025',
        'experience.lutino.title': 'Phần mềm AI ghi chú cuộc họp - Lutino',
        'experience.lutino.role': 'Frontend Developer (ReactJS)',
        'experience.lutino.item1': 'Chức năng đăng ký, đăng nhập qua tài khoản Gmail và Microsoft.',
        'experience.lutino.item2': 'Chức năng thêm/xóa thành viên vào đội nhóm.',
        'experience.lutino.item3': 'Chức năng upload link YouTube, MP3, MP4 rồi tự động phân tích các đoạn hội thoại, tạo tags và tóm tắt nội dung.',
        'experience.lutino.item4': 'Tính năng chat và bình luận cuộc họp.',

        'experience.hisport.period': '04/2024 – 04/2025',
        'experience.hisport.title': 'Ứng dụng đặt sân thể thao - Hisport',
        'experience.hisport.role': 'Frontend Developer (ReactJS) - build app bằng Cordova & Capacitor',
        'experience.hisport.item1': 'Chức năng đăng ký, đăng nhập theo role người dùng và chủ sân.',
        'experience.hisport.item2': 'Chức năng tìm kiếm, lọc sân theo định vị và vị trí trên toàn quốc.',
        'experience.hisport.item3': 'Chức năng đặt sân theo khung giờ, theo tuần, theo tháng.',
        'experience.hisport.item4': 'Tính năng thông báo đẩy trên app điện thoại qua Capacitor.',

        'experience.vdone.period': '03/2023 – 02/2024',
        'experience.vdone.title': 'Trang web thương mại điện tử VDONE',
        'experience.vdone.role': 'Frontend Developer (ReactJS & ElectronJS)',
        'experience.vdone.item1': 'Cắt giao diện từ Figma và ghép API trang chủ, đăng nhập, đăng ký, trang người dùng, giao diện bài viết, video.',
        'experience.vdone.item2': 'Sử dụng ElectronJS để tạo app tương thích cho Windows, Linux dùng để in hóa đơn mua hàng ra máy in mini.',

        'experience.courses.period': '08/2022 – 02/2023',
        'experience.courses.title': 'Website về khóa học bảo hiểm',
        'experience.courses.role': 'Frontend Developer (HTML, CSS, JS, jQuery)',
        'experience.courses.item1': 'Cắt và xây dựng giao diện chức năng bán bảo hiểm, khóa học, đăng tải bài viết, video và làm bài tập.',
        'experience.courses.item2': 'Kết hợp với Backend để ghép API cho website.',

        'contact.subtitle': 'Liên hệ với tôi bằng cách nào?',
        'contact.title': 'Liên hệ',
        'contact.form.name': 'Họ và tên',
        'contact.form.email': 'Nhập Email',
        'contact.form.message': 'Nhập nội dung',
        'contact.form.submit': 'Gửi tin nhắn',
        'contact.success': 'Gửi email thành công',
        'contact.error': 'Gửi email thất bại. Vui lòng thử lại.',
        'contact.validation': 'Vui lòng nhập đầy đủ thông tin',

        'footer.copyright': 'Portfolio | Phùng Thế Anh',

        'lang.switch.aria': 'Đổi ngôn ngữ'
    }
};

const CV_FILES = {
    en: 'assets/imgs/Phung-The-Anh-CV-EN.pdf',
    vn: 'assets/imgs/Phung-The-Anh-CV-VN.pdf'
};

function getStoredLang() {
    try {
        const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
        if (stored && SUPPORTED_LANGS.includes(stored)) {
            return stored;
        }
    } catch (error) {
        return DEFAULT_LANG;
    }
    return DEFAULT_LANG;
}

function storeLang(lang) {
    try {
        window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (error) {
        return;
    }
}

function translate(key, lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    return dict[key] !== undefined ? dict[key] : key;
}

function applyTextNodes(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key, lang);
    });
}

function applyAttrNodes(lang) {
    const elements = document.querySelectorAll('[data-i18n-attr]');
    elements.forEach(function (el) {
        const config = el.getAttribute('data-i18n-attr');
        if (!config) return;
        config.split(',').forEach(function (pair) {
            const parts = pair.split(':');
            if (parts.length !== 2) return;
            const attr = parts[0].trim();
            const key = parts[1].trim();
            el.setAttribute(attr, translate(key, lang));
        });
    });
}

function applyCvDownload(lang) {
    const cvLink = document.getElementById('cv-download-link');
    if (cvLink && CV_FILES[lang]) {
        cvLink.setAttribute('href', CV_FILES[lang]);
    }
}

function applyHtmlLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'vn' ? 'vi' : 'en');
}

function applyTitle(lang) {
    document.title = translate('meta.title', lang);
}

function updateSwitcherUi(lang) {
    const buttons = document.querySelectorAll('[data-lang-switch]');
    buttons.forEach(function (btn) {
        const target = btn.getAttribute('data-lang-switch');
        if (target === lang) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

function setLanguage(lang) {
    const normalized = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    applyTextNodes(normalized);
    applyAttrNodes(normalized);
    applyCvDownload(normalized);
    applyHtmlLang(normalized);
    applyTitle(normalized);
    updateSwitcherUi(normalized);
    storeLang(normalized);
    window.__currentLang = normalized;
}

function getCurrentLang() {
    return window.__currentLang || DEFAULT_LANG;
}

function initI18n() {
    const initial = getStoredLang();
    setLanguage(initial);

    const buttons = document.querySelectorAll('[data-lang-switch]');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            const target = btn.getAttribute('data-lang-switch');
            setLanguage(target);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

window.i18n = {
    setLanguage: setLanguage,
    getCurrentLang: getCurrentLang,
    translate: translate
};
