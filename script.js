document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('mouseover', () => {
            flower.style.backgroundColor = getRandomColor();
        });

        flower.addEventListener('mouseout', () => {
            flower.style.backgroundColor = '#ff4081';
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
