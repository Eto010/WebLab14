
function createRipple(e) {
    const target = e.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('wave');
    target.appendChild(circle);

    const d = Math.max(target.clientWidth, target.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - d / 2;
    const y = e.clientY - rect.top - d / 2;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    
    circle.addEventListener('animationend', () => {
        circle.remove();
    });
}


document.querySelectorAll('.btn-wave, [contenteditable="true"]').forEach(el => {
    el.addEventListener('mousedown', createRipple);
});
document.getElementById('pdf-btn').addEventListener('click', () => window.print());