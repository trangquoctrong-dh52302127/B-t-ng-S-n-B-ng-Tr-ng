// Hiệu ứng Scroll Reveal (Hiện hình ảnh mượt mà khi cuộn chuột đến nơi)
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target); // Chỉ chạy hiệu ứng xuất hiện 1 lần duy nhất
        }
    });
}, { 
    threshold: 0.1, // Chạy hiệu ứng khi phần tử hiển thị được 10% trên màn hình
    rootMargin: "0px 0px -50px 0px"
});

reveals.forEach(el => observer.observe(el));

// Xử lý sự kiện click chuyển Tab bộ lọc chuyên nghiệp
const tabs = document.querySelectorAll('.filter-tabs span');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});