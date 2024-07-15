document.addEventListener('DOMContentLoaded', function() {

    // Dark mode toggle
    const toggleSwitch = document.querySelector('.toggle-checkbox');
    const toggleIcons = document.querySelectorAll('#toggle-icon');

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            toggleIcons[0].style.display = 'none';
            toggleIcons[1].style.display = 'block';
        } else {
            document.body.classList.remove('dark-mode');
            toggleIcons[0].style.display = 'block';
            toggleIcons[1].style.display = 'none';
        }
    });

    // Skills animation
    const skillsSection = document.querySelector('#skills');
    const skills = document.querySelectorAll('.skill');

    skillsSection.addEventListener('click', function () {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.toggle('active');
            }, index * 100);
        });
    });

});
