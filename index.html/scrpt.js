const POEMAS_DATA = [
    { id: 's1', titulo: 'O Preço da Tua Negação', conteudo: `Vi-te naquele canto,\na boca perdida na dele,\ncomo se o mundo não conhecesse\nos segredos que deixaste marcados em mim.\nViraste o rosto, com aquela frieza ensaiada,\ne disseste:\n“Somos amigos. Nada mais.”\n\nCurioso.\nTambém éramos só isso ontem?\nOntem, quando tua língua procurava a minha\ncom a fome de quem esqueceu o próprio nome?\nQuando a luz vermelha tremulava no quarto\ncomo uma testemunha cúmplice,\nvendo teus gemidos atravessarem meu peito\ncomo lâmina quente?\n\nChamarias de amizade\no jeito como tu tremias\nquando minha mão te puxava pela cintura,\ncomo se todo o desejo do teu corpo\ntivesse encontrado finalmente\no lugar onde morava?\n\nE quando eu te observava —\ntodos os dias,\ntodos os segundos —\ne tu me devolvias o olhar\ncom aquele brilho que negas agora,\néramos amigos ali também?\nNa troca de confissões,\nno riso,\nno reino íntimo que só existe\nquando dois corpos já se conhecem demais?\n\nDizes “amigos”.\nMas fomos isso\nquando traíste teu namorado comigo?\nQuando tu mesma escolheste atravessar essa fronteira\ncom tua boca colada na minha,\ncom o teu desejo queimando na pele?\n\nE fomos amigos\nquando bebeste do meu gozo,\ncomo quem bebe a verdade proibida?\nFomos amigos\nquando me ligavas de madrugada,\ncom a voz trêmula,\npedindo que eu fosse até aí\nporque tu queria foder\ncomo se o mundo estivesse prestes a explodir?\n\nDizes “amizade”\npra não encarar o incêndio que tu mesma acendeu.\n\nVem.\nTu sabes.\nTeu desejo tem o meu nome grafado nele\ndesde antes de admitires.\nNão te destruas fingindo indiferença,\nnão apagues com desculpas\no que teu corpo escreve há anos.\n\nAproxima-te.\nSeja minha, deixe que eu seja teu,\nTu és a minha princesa.` },
    { id: 's2', titulo: 'O sussurro do abismo', conteudo: `\nEra como se eu fosse uma folha,\npresa a um galho frágil em tempestade,\no vento rugia, feroz e indiferente,\ne eu, cansada de lutar, entreguei-me ao vazio.\n\nMeu sangue, outrora rio da vida,\ntornou-se um riacho silencioso que escorria,\ntingindo a terra com sua cor rubra,\ncomo um outono que nunca vê a primavera.\n\nNa vastidão do universo,\nfui um grão de areia que o mar esqueceu,\num lampejo apagado por sombras densas,\nmenos que o sussurro de estrelas mortas.\n\nQuando o abismo abriu seus braços,\nnão houve lamento, nem resgate,\napenas a queda suave, o silêncio eterno,\ne a certeza de que até o nada era mais do que eu.\n` },
    { id: 's3', titulo: 'Onde te perdi', conteudo: `Diga-me, onde foi que eu vos perdi,\nOnde tu me deixaste para buscar outro olhar?\nOnde foi que os caminhos se separaram,\nE tu encontraste nele o que em mim não viste mais?\n\nDiga-me, onde tu o beijaste escondida,\nOnde tu te entregaste a ele,\nEsquecendo os laços que outrora uniam nossas almas,\nOnde ficou o juramento que fizemos de nunca nos deixar?\n\nDiga-me, ele te faz feliz?\nEle te preenche o vazio que eu deixei sem querer?\nEu, que ainda busco respostas nas sombras,\nE tu, que te perdes na luz de um novo amor.\n\nOnde me perdi de ti, amor?\nOnde ficou a promessa, o sentimento que nos moldava?\nOnde encontraste nele aquilo que eu não soube ser,\nE por que, ao invés de me procurar, foste à busca de um outro caminho?\n` },
    { id: 's4', titulo: 'Amor em ruínas', conteudo: `\nQuando tu partiste,\nOs sonhos viraram pesadelos repetidos,\nPor meses vi teu rosto em cada canto,\nE o vazio no meu peito crescia, incontrolável.\n\nPassei duas semanas em agonia,\nSem força para alimentar o corpo,\nApenas a água lavava minha garganta,\nEnquanto cada refeição voltava como minha dor.\n\nAcordava em madrugadas geladas,\nO peito sufocado por gritos sem som,\nAs crises me abraçavam como tu jamais fizeste,\nE onde estavas, enquanto eu me desfazia?\n\nDeixaste-me nesse abismo sem olhar para trás,\nTua ausência queimava mais que qualquer adeus,\nE, ainda assim, com todo esse peso em mim,\nEu te amo… porque amar-te é a minha maldição.\n` },
    { id: 's5', titulo: 'O fardo do amor não correspondido', conteudo: `\nVocê diz ser a vítima,\nClama que sofreu,\nMas foi no colo dele que se aconchegou,\nBeijando-o com os mesmos lábios que um dia foram meus,\nDizendo palavras que já não têm valor,\nEnquanto eu, destroçado, assistia, em silêncio,\nA dor de ver o amor que eu criei sendo esquecido,\nSem sequer uma explicação.\n\nEu vi você se entregando a ele,\nE eu me pergunto, quando foi que tu paraste de me amar?\nQuando o fio que nos ligava se partiu sem que eu percebesse?\nQuando o amor que eu acreditava eterno virou poeira no vento?\n\nEscolheste ele, escolheste viver ao lado dele,\nEscolheste construir uma nova vida com ele,\nColocando o nome que eu sonhei para nosso filho,\nComo se minhas memórias não importassem mais.\n\nParte de mim se perdeu nesse vácuo,\nUm vazio que não consegue ser preenchido por palavras,\nE tudo que me resta é essa pergunta que ecoa:\nQuando deixaste de me amar, se é que um dia me amaste de verdade?\n\nEu disse “eu te odeio” enquanto o buquê caía,\nMas a dor de te perder transbordava mais que qualquer raiva.
E você, com um sorriso insensível, disse:\n“Eu também estou sofrendo.”\nMas onde? Onde está o sofrimento, se não o meu?\n` },
    { id: 's6', titulo: 'eco da ausência', conteudo: `\nMurmuro que desejo esquecer-te,\nMas em verdade, anseio perder-me em ti.\nNão almejo apagar-te da memória,\nQuero-te, inteira, esculpida em minha história.\n\nAh, fosse o amor simples como narram,\nPorém a simplicidade é alheia ao coração.\nO peso dos sentimentos ocultos arde,\nUm fogo que não consome, mas esmaga.\n` },
    { id: 's7', titulo: 'Desespero do Desejo', conteudo: `\nQuerida, eu quero beijar-te,\nBeijar cada parte de tua alma,\nDeixar o toque das minhas mãos\nTraçar o caminho que os teus lábios percorrem.\n\nSeja minha, pois sem ti sou vazio,\nTeu olhar me devora, me consome,\nE em cada instante, eu imploro,\nQue possas ser só minha, eternamente.\n\nMas em meu peito, o medo se esconde,\nO medo de não te ter, de te perder.\nMas eu não posso viver sem ti,\nEntão, por favor, seja minha, só minha.\n` },
    { id: 's8', titulo: 'O Clamor do Amor', conteudo: `\nSeja minha e eu serei teu,\nNo silêncio do nosso querer,\nOnde os corpos se encontram e se completam,\nEu serei a âncora que te mantém, a chama que te aquece.\n\nEntregue-se, pois a entrega é o nosso destino,\nDeixe que eu cuide de ti, como a terra cuida da semente,\nCom o carinho do vento que embala a folha,\nE o sol que se põe para jamais se ausentar.\n\nTu não vês que eu te amo?\nCada gesto meu grita em silêncio,\nCada olhar que lança a saudade,\nTudo em mim é só teu, eternamente teu.\n` }
];

const { createApp, ref, computed, onMounted, nextTick, reactive, watch } = Vue;

createApp({
    setup() {
        const isMenuOpen = ref(false);
        const activeSection = ref('home');
        const isAudioPlaying = ref(false);
        const isFeedbackModalOpen = ref(false);
        const feedbackForm = reactive({ name: '', email: '', message: '' });
        const copyBtnText = ref('📋 Toque aqui para copiar tudo');
        
        // Variáveis novas para recursos extras
        const beatsLost = ref(0);
        const toastVisible = ref(false);
        const toastMessage = ref('');
        
        let audioCtx = null;
        let beatInterval = null;
        let lifeInterval = null;
        let observer = null;

        const poemas = computed(() => POEMAS_DATA);
        const activePoema = computed(() => {
            if (activeSection.value === 'home') return null;
            return poemas.value.find(p => p.id === activeSection.value);
        });
        const isHomeActive = computed(() => activeSection.value === 'home');
        
        // Computed para Índice e Navegação
        const currentIndex = computed(() => {
            if (!activePoema.value) return -1;
            return poemas.value.findIndex(p => p.id === activePoema.value.id);
        });

        // Divide o poema em linhas para o efeito de scroll reveal
        const formattedPoemLines = computed(() => {
            if (!activePoema.value) return [];
            return activePoema.value.conteudo.split('\n');
        });
        
        // Configura o IntersectionObserver para animar as linhas
        const setupScrollReveal = () => {
            if (observer) observer.disconnect();
            
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Anima apenas uma vez
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Ativa um pouco antes do fim da tela
            });

            const lines = document.querySelectorAll('.poem-line');
            lines.forEach(line => observer.observe(line));
        };

        // Observa mudanças no poema ativo para reiniciar a animação e scroll
        watch(activePoema, () => {
            if (activePoema.value) {
                copyBtnText.value = '📋 Toque aqui para copiar tudo';
                nextTick(() => {
                    setupScrollReveal();
                    const target = document.querySelector(".poesia-section");
                    if (target) target.scrollTo(0, 0); 
                });
            }
        });
        
        // Função para copiar apenas o verso clicado
        const copyVerse = async (line) => {
            if (!line || line.trim() === '') return;
            try {
                await navigator.clipboard.writeText(line);
                showToast("Verso copiado para a área de transferência.");
            } catch (err) {
                console.error("Erro ao copiar verso", err);
            }
        };

        // Exibe notificação temporária
        const showToast = (msg) => {
            toastMessage.value = msg;
            toastVisible.value = true;
            setTimeout(() => {
                toastVisible.value = false;
            }, 3000);
        };

        // Contador de "Vida Gasta"
        const startLifeCounter = () => {
            // Batimento em repouso ~800ms. Se áudio ligado (130bpm) ~461ms
            if (lifeInterval) clearInterval(lifeInterval);
            const speed = isAudioPlaying.value ? 461 : 800;
            lifeInterval = setInterval(() => {
                beatsLost.value++;
            }, speed);
        };

        const playHeartbeatSound = () => {
            if (!audioCtx) return;
            const t = audioCtx.currentTime;
            
            const oscLow = audioCtx.createOscillator();
            const gainLow = audioCtx.createGain();
            oscLow.connect(gainLow);
            gainLow.connect(audioCtx.destination);
            oscLow.frequency.setValueAtTime(60, t);
            oscLow.frequency.exponentialRampToValueAtTime(45, t + 0.1);
            gainLow.gain.setValueAtTime(0, t);
            gainLow.gain.linearRampToValueAtTime(1.0, t + 0.02); 
            gainLow.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
            oscLow.start(t);
            oscLow.stop(t + 0.4);

            const oscHigh = audioCtx.createOscillator();
            const gainHigh = audioCtx.createGain();
            oscHigh.connect(gainHigh);
            gainHigh.connect(audioCtx.destination);
            oscHigh.frequency.setValueAtTime(140, t);
            oscHigh.frequency.exponentialRampToValueAtTime(80, t + 0.05);
            gainHigh.gain.setValueAtTime(0, t);
            gainHigh.gain.linearRampToValueAtTime(0.4, t + 0.01);
            gainHigh.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
            oscHigh.start(t);
            oscHigh.stop(t + 0.15);
        };
        
        const triggerLightning = () => {
            const layer = document.getElementById('lightning-layer');
            if (layer) {
                layer.classList.add('flash');
                setTimeout(() => {
                    layer.classList.remove('flash');
                }, 150);
            }
            const nextTime = Math.random() * 10000 + 5000;
            setTimeout(triggerLightning, nextTime);
        };

        const toggleAudio = () => {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            isAudioPlaying.value = !isAudioPlaying.value;
            
            // Ajusta velocidade do contador de vida baseada na "adrenalina" do áudio
            startLifeCounter();

            if (isAudioPlaying.value) {
                playHeartbeatSound(); 
                beatInterval = setInterval(playHeartbeatSound, 461);
            } else {
                clearInterval(beatInterval);
                beatInterval = null;
            }
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash && poemas.value.some(p => p.id === hash)) {
                activeSection.value = hash;
            } else {
                activeSection.value = 'home';
            }
        };

        const showSection = (id) => {
            if (id === 'home') {
                history.pushState(null, null, ' '); 
                handleHashChange(); 
            } else {
                window.location.hash = id; 
            }
            isMenuOpen.value = false;
        };

        const prevPoem = () => {
            if (currentIndex.value === -1) return;
            let newIndex = currentIndex.value - 1;
            if (newIndex < 0) newIndex = poemas.value.length - 1;
            showSection(poemas.value[newIndex].id);
        };

        const nextPoem = () => {
            if (currentIndex.value === -1) return;
            let newIndex = currentIndex.value + 1;
            if (newIndex >= poemas.value.length) newIndex = 0;
            showSection(poemas.value[newIndex].id);
        };

        const openRandomPoem = () => {
            const randomIndex = Math.floor(Math.random() * poemas.value.length);
            showSection(poemas.value[randomIndex].id);
        };

        const openFeedbackModal = () => {
            isFeedbackModalOpen.value = true;
            isMenuOpen.value = false;
        };

        const closeFeedbackModal = () => {
            isFeedbackModalOpen.value = false;
        };

        const sendFeedback = () => {
            const subject = encodeURIComponent("Opinião sobre o site Poesias");
            const body = encodeURIComponent(`Nome: ${feedbackForm.name}\nEmail: ${feedbackForm.email}\n\nMensagem:\n${feedbackForm.message}`);
            window.location.href = `mailto:renancodando@gmail.com?subject=${subject}&body=${body}`;
            closeFeedbackModal();
            feedbackForm.name = '';
            feedbackForm.email = '';
            feedbackForm.message = '';
        };
        
        const copyFullPoem = async () => {
            if (!activePoema.value) return;
            try {
                await navigator.clipboard.writeText(activePoema.value.conteudo);
                showToast("Poema completo copiado com sucesso!");
            } catch (err) {
                console.error('Erro ao copiar', err);
                showToast("Erro ao copiar.");
            }
        };

        onMounted(() => {
            handleHashChange();
            window.addEventListener("hashchange", handleHashChange);
            
            if (activePoema.value) {
                nextTick(setupScrollReveal);
            }
            
            setTimeout(triggerLightning, 3000);
            startLifeCounter(); // Inicia o contador de vida

            document.addEventListener("click", (e) => {
                const menuWrapper = document.querySelector(".topnav");
                if (isMenuOpen.value && menuWrapper && !menuWrapper.contains(e.target)) {
                    isMenuOpen.value = false;
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    if (isMenuOpen.value) isMenuOpen.value = false;
                    if (isFeedbackModalOpen.value) isFeedbackModalOpen.value = false;
                }
            });
        });

        return {
            isMenuOpen,
            activeSection,
            activePoema,
            isHomeActive,
            isAudioPlaying,
            isFeedbackModalOpen,
            feedbackForm,
            formattedPoemLines,
            copyBtnText,
            beatsLost,
            toastVisible,
            toastMessage,
            toggleAudio,
            showSection,
            toggleMenu,
            playHeartbeatSound,
            openFeedbackModal,
            closeFeedbackModal,
            sendFeedback,
            copyFullPoem,
            copyVerse,
            openRandomPoem,
            poemas,
            prevPoem,
            nextPoem
        };
    }
}).mount('#app');

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
// Otimização: Ajusta número de partículas baseado na largura da tela
const numParticles = window.innerWidth < 600 ? 60 : 150; 

const darkThemeColors = {
    red: (alpha) => `rgba(${Math.floor(Math.random() * 100) + 150}, 0, 0, ${alpha})`,
    blue: (alpha) => `rgba(200, 200, 255, ${alpha})`
};

function Particle(x, y, color, speedY, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedY = speedY;
    this.size = size;
}

Particle.prototype.update = function() {
    this.y += this.speedY;
    if (this.y > canvas.height) {
        this.y = -this.size;
        this.x = Math.random() * canvas.width;
    }
};

Particle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function initParticles() {
    // Otimização: Usa largura da janela direta, ignorando Device Pixel Ratio para background
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        const speedY = Math.random() * 2.0 + 1.0; 
        let color;
        if (Math.random() > 0.6) {
            color = darkThemeColors.red(Math.random() * 0.5 + 0.3);
        } else {
            color = darkThemeColors.blue(Math.random() * 0.7 + 0.3);
        }
        particles.push(new Particle(x, y, color, speedY, size));
    }
}

function animateCanvas() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animateCanvas);
}

window.addEventListener('resize', initParticles);
initParticles();
animateCanvas();