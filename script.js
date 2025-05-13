
 // Filtro de skills
 function filterSkills(category) {
    const skills = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('button');
    
    // Atualiza botões ativos
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'Todas')) {
            btn.classList.remove('bg-gray-200', 'text-gray-700');
            btn.classList.add('bg-blue-500', 'text-white');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        }
    });
    
    // Filtra skills
    skills.forEach(skill => {
        if (category === 'all' || skill.dataset.category === category) {
            skill.style.display = 'block';
            setTimeout(() => {
                skill.style.opacity = '1';
            }, 50);
        } else {
            skill.style.opacity = '0';
            setTimeout(() => {
                skill.style.display = 'none';
            }, 300);
        }
    });
}

// Nuvem de tags interativa
const tags = [
    { name: 'HTML5', count: 18, category: 'frontend' },
    { name: 'CSS3', count: 16, category: 'frontend' },
    { name: 'JavaScript', count: 15, category: 'frontend' },
    { name: 'React', count: 14, category: 'frontend' },
    { name: 'Node.js', count: 12, category: 'backend' },
    { name: 'MongoDB', count: 10, category: 'backend' },
    { name: 'Express', count: 9, category: 'backend' },
    { name: 'Figma', count: 13, category: 'design' },
    { name: 'Git', count: 14, category: 'tools' },
    { name: 'Tailwind', count: 15, category: 'frontend' },
    { name: 'TypeScript', count: 11, category: 'frontend' },
    { name: 'SASS', count: 10, category: 'frontend' },
    { name: 'Jest', count: 8, category: 'tools' },
    { name: 'Docker', count: 7, category: 'tools' },
    { name: 'AWS', count: 6, category: 'tools' }
];

const tagCloud = document.getElementById('tagCloud');

tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = `px-3 py-1 rounded-full cursor-pointer transition-all hover:bg-blue-100 hover:text-blue-600 ${getRandomSize()} ${getRandomColor()}`;
    tagElement.textContent = tag.name;
    tagElement.dataset.category = tag.category;
    
    tagElement.addEventListener('click', () => {
        filterSkills(tag.category);
    });
    
    tagElement.addEventListener('mouseover', () => {
        tagElement.classList.add('glow', 'transform', 'scale-110');
    });
    
    tagElement.addEventListener('mouseout', () => {
        tagElement.classList.remove('glow', 'transform', 'scale-110');
    });
    
    tagCloud.appendChild(tagElement);
});

function getRandomSize() {
    const sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg'];
    return sizes[Math.floor(Math.random() * sizes.length)];
}

function getRandomColor() {
    const colors = ['bg-blue-100 text-blue-600', 'bg-green-100 text-green-600', 'bg-yellow-100 text-yellow-600', 'bg-purple-100 text-purple-600', 'bg-pink-100 text-pink-600'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Anima as barras de progresso quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});

// Efeito de hover nos cards de experiência
        document.querySelectorAll('.experience-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.company-logo').style.transform = 'scale(1.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.company-logo').style.transform = 'scale(1)';
            });
        });

        // Efeito de hover nas tags de habilidades
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#3b82f6';
                this.style.color = 'white';
                this.style.transform = 'translateY(-2px)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#dbeafe';
                this.style.color = '#2563eb';
                this.style.transform = 'translateY(0)';
            });
        });

        // Animação de aparecimento suave
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate-fade-in');
            
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 200);
            });
        });



        // Efeito de hover nos cards de experiência
        document.querySelectorAll('.experience-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.company-logo').style.transform = 'scale(1.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.company-logo').style.transform = 'scale(1)';
            });
        });

        // Efeito de hover nas tags de habilidades
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#3b82f6';
                this.style.color = 'white';
                this.style.transform = 'translateY(-2px)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#dbeafe';
                this.style.color = '#2563eb';
                this.style.transform = 'translateY(0)';
            });
        });

        // Animação de aparecimento suave
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate-fade-in');
            
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 200);
            });
        });