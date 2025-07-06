// Oyun Durumu
let gameState = {
    currentLevel: 1,
    lives: 3,
    score: 0,
    timeLeft: 15,
    isGameActive: false,
    timer: null,
    highScore: localStorage.getItem('karanlık_sorusu_high_score') || 0,
    savedGame: JSON.parse(localStorage.getItem('karanlık_sorusu_save')) || null
};

// Oyun Soruları ve Hikayesi (game_data.js'den alınacak)
const gameQuestions = window.extendedGameQuestions || [
    // Fallback veriler (eğer game_data.js yüklenmezse)
    {
        story: "Babaannenin eski evine vardığında, kapı hafifçe aralık duruyordu. İçeriden garip sesler geliyordu...",
        question: "Ne yaparsın?",
        choices: ["A) İçeri girerim", "B) Geri dönerim"],
        correct: 0,
        timeLimit: 15
    }
];

// Ses Efektleri (Web Audio API ile basit sesler)
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.initAudio();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API desteklenmiyor');
        }
    }

    // Basit ses tonları oluştur
    playTone(frequency, duration, type = 'sine') {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playCorrect() {
        this.playTone(523.25, 0.3); // C5 nota
        setTimeout(() => this.playTone(659.25, 0.3), 150); // E5 nota
    }

    playWrong() {
        this.playTone(220, 0.5, 'sawtooth'); // Düşük, sert ses
    }

    playGhost() {
        // Hayalet sesi efekti
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.playTone(100 + Math.random() * 200, 0.2, 'square');
            }, i * 100);
        }
    }

    playLevelUp() {
        const notes = [261.63, 329.63, 392.00, 523.25]; // C-E-G-C
        notes.forEach((note, index) => {
            setTimeout(() => this.playTone(note, 0.2), index * 100);
        });
    }
}

const soundManager = new SoundManager();

// DOM Elementleri
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const exitBtn = document.getElementById('exit-btn');
const timerElement = document.getElementById('timer');
const livesElement = document.getElementById('lives');
const currentLevelElement = document.getElementById('current-level');
const storyTextElement = document.getElementById('story-text');
const questionTextElement = document.getElementById('question-text');
const choiceABtn = document.getElementById('choice-a');
const choiceBBtn = document.getElementById('choice-b');
const endTitleElement = document.getElementById('end-title');
const endMessageElement = document.getElementById('end-message');

// Oyun Başlatma
startBtn.addEventListener('click', () => {
    soundManager.playCorrect();
    if (gameState.savedGame) {
        showContinueDialog();
    } else {
        startNewGame();
    }
});

// Devam Et Dialog
function showContinueDialog() {
    const continueGame = confirm(`Kayıtlı oyununuz var!\nSeviye: ${gameState.savedGame.level}\nCan: ${gameState.savedGame.lives}\nSkor: ${gameState.savedGame.score}\n\nKaldığınız yerden devam etmek ister misiniz?`);
    
    if (continueGame) {
        loadSavedGame();
    } else {
        startNewGame();
    }
}

// Kayıtlı Oyunu Yükle
function loadSavedGame() {
    gameState.currentLevel = gameState.savedGame.level;
    gameState.lives = gameState.savedGame.lives;
    gameState.score = gameState.savedGame.score;
    gameState.timeLeft = gameState.savedGame.timeLeft;
    
    showScreen('game');
    updateUI();
    loadQuestion();
    startTimer();
}

// Yeni Oyun Başlat
function startNewGame() {
    gameState.currentLevel = 1;
    gameState.lives = 3;
    gameState.score = 0;
    gameState.timeLeft = 15;
    gameState.isGameActive = true;
    
    showScreen('game');
    updateUI();
    loadQuestion();
    startTimer();
}

// Ekran Geçişi
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(`${screenName}-screen`);
    targetScreen.classList.add('active');
    
    // Arkaplan değiştir
    if (screenName === 'game') {
        changeBackground();
    }
}

// Arkaplan Değiştir (Seviyeye göre)
function changeBackground() {
    const backgrounds = [
        'images/haunted_house.jpg',
        'images/spooky_forest.jpg',
        'images/abandoned_house.png',
        'images/ghost_silhouettes.jpg'
    ];
    
    const bgIndex = Math.floor((gameState.currentLevel - 1) / 10) % backgrounds.length;
    gameScreen.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${backgrounds[bgIndex]}')`;
}

// Soru Yükle
function loadQuestion() {
    const questionIndex = (gameState.currentLevel - 1) % gameQuestions.length;
    const question = gameQuestions[questionIndex];
    
    storyTextElement.textContent = question.story;
    questionTextElement.textContent = question.question;
    choiceABtn.textContent = question.choices[0];
    choiceBBtn.textContent = question.choices[1];
    
    // Zorluk artışı - süreyi azalt
    gameState.timeLeft = Math.max(5, question.timeLimit - Math.floor(gameState.currentLevel / 10));
    
    // Seçenekleri aktif et
    choiceABtn.disabled = false;
    choiceBBtn.disabled = false;
    choiceABtn.onclick = () => selectChoice(0);
    choiceBBtn.onclick = () => selectChoice(1);
}

// Seçim Yap
function selectChoice(choice) {
    if (!gameState.isGameActive) return;
    
    const questionIndex = (gameState.currentLevel - 1) % gameQuestions.length;
    const question = gameQuestions[questionIndex];
    
    // Seçenekleri deaktif et
    choiceABtn.disabled = true;
    choiceBBtn.disabled = true;
    
    clearInterval(gameState.timer);
    
    if (choice === question.correct) {
        // Doğru cevap
        soundManager.playCorrect();
        gameState.score += Math.floor(gameState.timeLeft * 10);
        showCorrectEffect();
        
        setTimeout(() => {
            nextLevel();
        }, 1000);
    } else {
        // Yanlış cevap
        soundManager.playWrong();
        loseLife();
        showWrongEffect();
        
        setTimeout(() => {
            if (gameState.lives > 0) {
                loadQuestion();
                startTimer();
            }
        }, 1500);
    }
}

// Sonraki Seviye
function nextLevel() {
    gameState.currentLevel++;
    
    // Her 10 seviyede özel animasyon
    if (gameState.currentLevel % 10 === 1 && gameState.currentLevel > 1) {
        soundManager.playLevelUp();
        showLevelUpAnimation();
        setTimeout(() => {
            continueToNextLevel();
        }, 2000);
    } else {
        continueToNextLevel();
    }
}

function continueToNextLevel() {
    if (gameState.currentLevel > 50) {
        // Oyun tamamlandı
        endGame(true);
    } else {
        saveGame();
        updateUI();
        loadQuestion();
        startTimer();
    }
}

// Can Kaybı
function loseLife() {
    gameState.lives--;
    updateLives();
    
    if (gameState.lives <= 0) {
        endGame(false);
    }
}

// Timer Başlat
function startTimer() {
    updateTimer();
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        // Son 5 saniyede uyarı
        if (gameState.timeLeft <= 5) {
            timerElement.classList.add('timer-warning');
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            soundManager.playGhost();
            loseLife();
            showGhostEffect();
            
            setTimeout(() => {
                if (gameState.lives > 0) {
                    loadQuestion();
                    startTimer();
                }
            }, 2000);
        }
    }, 1000);
}

// UI Güncelle
function updateUI() {
    currentLevelElement.textContent = gameState.currentLevel;
    updateLives();
    updateTimer();
}

function updateTimer() {
    timerElement.textContent = gameState.timeLeft;
    timerElement.classList.remove('timer-warning');
}

function updateLives() {
    const hearts = livesElement.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index < gameState.lives) {
            heart.style.opacity = '1';
            heart.style.filter = 'drop-shadow(2px 2px 4px #000)';
        } else {
            heart.style.opacity = '0.3';
            heart.style.filter = 'drop-shadow(2px 2px 4px #000) grayscale(100%)';
            heart.classList.add('heart-lost');
        }
    });
}

// Efektler
function showCorrectEffect() {
    gameScreen.style.background = 'radial-gradient(circle, rgba(0,255,0,0.2), transparent)';
    setTimeout(() => {
        changeBackground();
    }, 500);
}

function showWrongEffect() {
    gameScreen.classList.add('wrong-answer');
    setTimeout(() => {
        gameScreen.classList.remove('wrong-answer');
    }, 500);
}

function showGhostEffect() {
    gameScreen.classList.add('ghost-caught');
    setTimeout(() => {
        gameScreen.classList.remove('ghost-caught');
    }, 2000);
}

function showLevelUpAnimation() {
    const levelUpDiv = document.createElement('div');
    levelUpDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: #FFD700;
            padding: 30px;
            border-radius: 15px;
            border: 3px solid #8B0000;
            font-size: 2rem;
            text-align: center;
            z-index: 1000;
            animation: fadeIn 0.5s ease-in;
        ">
            🎉 SEVİYE ${Math.floor((gameState.currentLevel - 1) / 10) * 10} TAMAMLANDI! 🎉<br>
            <span style="font-size: 1.2rem; color: #ccc;">Yeni bölüme geçiliyor...</span>
        </div>
    `;
    document.body.appendChild(levelUpDiv);
    
    setTimeout(() => {
        document.body.removeChild(levelUpDiv);
    }, 2000);
}

// Oyun Bitir
function endGame(won) {
    gameState.isGameActive = false;
    clearInterval(gameState.timer);
    
    // Yüksek skor kontrolü
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('karanlık_sorusu_high_score', gameState.highScore);
    }
    
    // Kayıtlı oyunu temizle
    localStorage.removeItem('karanlık_sorusu_save');
    
    if (won) {
        endTitleElement.textContent = "TEBRIKLER!";
        endTitleElement.style.color = "#00FF00";
        endMessageElement.innerHTML = `
            🌅 Sabah oldu, lanet sona erdi! 🌅<br><br>
            Skorunuz: ${gameState.score}<br>
            Yüksek Skor: ${gameState.highScore}<br><br>
            Karanlığın tüm sorularını çözdünüz!
        `;
        soundManager.playLevelUp();
    } else {
        endTitleElement.textContent = "OYUN BİTTİ";
        endTitleElement.style.color = "#FF0000";
        endMessageElement.innerHTML = `
            👻 Hayalet seni sonsuza dek buldu... 👻<br><br>
            Skorunuz: ${gameState.score}<br>
            Yüksek Skor: ${gameState.highScore}<br>
            Ulaştığınız Seviye: ${gameState.currentLevel}<br><br>
            Tekrar dener misiniz?
        `;
        soundManager.playGhost();
    }
    
    showScreen('end');
}

// Oyun Kaydet
function saveGame() {
    const saveData = {
        level: gameState.currentLevel,
        lives: gameState.lives,
        score: gameState.score,
        timeLeft: gameState.timeLeft
    };
    localStorage.setItem('karanlık_sorusu_save', JSON.stringify(saveData));
}

// Restart ve Exit
restartBtn.addEventListener('click', () => {
    soundManager.playCorrect();
    startNewGame();
});

exitBtn.addEventListener('click', () => {
    showScreen('start');
});

// Sayfa kapatılırken oyunu kaydet
window.addEventListener('beforeunload', () => {
    if (gameState.isGameActive) {
        saveGame();
    }
});

// Mobil dokunmatik destek
document.addEventListener('touchstart', function() {
    if (soundManager.audioContext && soundManager.audioContext.state === 'suspended') {
        soundManager.audioContext.resume();
    }
});

// CSS animasyonları için ek stiller
const additionalStyles = `
    .heart-lost {
        animation: heartBreak 0.5s ease-in-out;
    }
    
    @keyframes heartBreak {
        0% { transform: scale(1); }
        50% { transform: scale(1.2) rotate(10deg); }
        100% { transform: scale(0.8) rotate(-5deg); }
    }
    
    .level-up-glow {
        animation: levelUpGlow 2s ease-in-out;
    }
    
    @keyframes levelUpGlow {
        0%, 100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
        50% { box-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 215, 0, 0.8); }
    }
`;

// Ek stilleri ekle
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Oyun başlangıcında yüksek skoru göster
document.addEventListener('DOMContentLoaded', () => {
    if (gameState.highScore > 0) {
        const highScoreDisplay = document.createElement('div');
        highScoreDisplay.innerHTML = `
            <div style="
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(0,0,0,0.8);
                color: #FFD700;
                padding: 10px 15px;
                border-radius: 8px;
                border: 1px solid #8B0000;
                font-size: 0.9rem;
            ">
                🏆 Yüksek Skor: ${gameState.highScore}
            </div>
        `;
        startScreen.appendChild(highScoreDisplay);
    }
});

