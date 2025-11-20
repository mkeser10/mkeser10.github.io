// Level görseli elementini al
const levelImageElement = document.getElementById('level-image');

// Seviyeye göre arkaplan ve görseli güncelle
function updateLevelVisuals() {
    const levelNum = gameState.currentLevel;

    // Arkaplanlar (dilersen daha fazla ekleyebilirsin)
    const backgrounds = [
        'images/haunted_house.jpg',
        'images/spooky_forest.jpg',
        'images/abandoned_house.png',
        'images/ghost_silhouettes.jpg'
    ];
    const bgIndex = Math.floor((levelNum - 1) / 10) % backgrounds.length;
    
    // Arkaplanı yumuşak geçiş ile değiştir
    gameScreen.style.transition = 'background 1s ease-in-out';
    gameScreen.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${backgrounds[bgIndex]}')`;

    // Level görseli
    const imgSrc = `images/level${levelNum}.png`;
    
    // Fade efekti ile görseli değiştir
    levelImageElement.style.opacity = 0;
    setTimeout(() => {
        levelImageElement.src = imgSrc;
        levelImageElement.style.transition = 'opacity 0.8s ease-in-out';
        levelImageElement.style.opacity = 1;
    }, 300);
}

// loadQuestion fonksiyonuna ekle
function loadQuestion() {
    const questionIndex = (gameState.currentLevel - 1) % gameQuestions.length;
    const question = gameQuestions[questionIndex];

    storyTextElement.textContent = question.story;
    questionTextElement.textContent = question.question;
    choiceABtn.textContent = question.choices[0];
    choiceBBtn.textContent = question.choices[1];

    gameState.timeLeft = Math.max(5, question.timeLimit - Math.floor(gameState.currentLevel / 10));

    choiceABtn.disabled = false;
    choiceBBtn.disabled = false;
    choiceABtn.onclick = () => selectChoice(0);
    choiceBBtn.onclick = () => selectChoice(1);

    // Level görseli ve arkaplanı güncelle
    updateLevelVisuals();
}
