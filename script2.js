// ── HIỆU ỨNG CUỘN TRANG HIỆN HÌNH MƯỢT MÀ (SCROLL REVEAL) ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target); // Chạy hiệu ứng xuất hiện tinh tế một lần duy nhất
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
});

reveals.forEach(el => observer.observe(el));

// ── XỬ LÝ SỰ KIỆN GỬI ĐĂNG KÝ FORM CTA AN TOÀN ──
const form = document.querySelector('.cta-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn trang bị tải lại mặc định
        alert('Cảm ơn Quý khách! Chuyên viên tư vấn độc quyền từ Vietnam TP Groupland sẽ liên hệ hỗ trợ Quý khách trong vòng 15 phút bảo mật.');
        form.reset(); // Làm sạch ô nhập liệu sau khi đăng ký thành công
    });
}