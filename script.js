let faqList = document.querySelector('.faq-list');
faqList.onclick = function(event) {
    let target = event.target.closest('.faq-item__ques');
    if (!target) return;

    let ques = faqList.querySelectorAll('.faq-item__ques');
    for (let que of ques) {
        if (que == target) continue;
        if (que.nextElementSibling.classList.contains('faq-item__ans--active')) {
            que.classList.remove('faq-item__ques--active');
            que.nextElementSibling.classList.remove('faq-item__ans--active');
        }
    }

    let answer = target.nextElementSibling;
    answer.classList.toggle('faq-item__ans--active');
    target.classList.toggle('faq-item__ques--active');
    target.children[1].classList.toggle('arrow-up');
}