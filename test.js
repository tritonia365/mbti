// MBTI 공부법 연구소 - 자가진단 테스트 로직

const GROUPS = {
  NT: {
    name: 'NT 분석가형',
    types: 'INTJ · INTP · ENTJ · ENTP',
    emoji: '🧩',
    className: 'tag-nt',
    barColor: 'var(--nt-color)',
    desc: '원리와 논리를 파고들어야 직성이 풀리는 전략가 타입입니다. 왜 그런지 이해될 때 비로소 지식이 내 것이 됩니다.',
    link: 'nt.html',
  },
  NF: {
    name: 'NF 외교관형',
    types: 'INFJ · INFP · ENFJ · ENFP',
    emoji: '🌱',
    className: 'tag-nf',
    barColor: 'var(--nf-color)',
    desc: '의미와 스토리가 있어야 몰입되는 이상주의자 타입입니다. 감정적으로 연결되는 순간 몰입도가 확 올라갑니다.',
    link: 'nf.html',
  },
  SJ: {
    name: 'SJ 관리자형',
    types: 'ISTJ · ISFJ · ESTJ · ESFJ',
    emoji: '📋',
    className: 'tag-sj',
    barColor: 'var(--sj-color)',
    desc: '계획과 반복이 무기인 성실한 학습자 타입입니다. 체계적인 루틴 안에서 가장 안정적으로 성과를 냅니다.',
    link: 'sj.html',
  },
  SP: {
    name: 'SP 탐험가형',
    types: 'ISTP · ISFP · ESTP · ESFP',
    emoji: '⚡',
    className: 'tag-sp',
    barColor: 'var(--sp-color)',
    desc: '직접 부딪히며 배우는 실전형 학습자 타입입니다. 짧고 굵은 몰입과 실습 위주 학습에서 힘을 발휘합니다.',
    link: 'sp.html',
  },
};

const QUESTIONS = [
  {
    text: '새로운 개념을 배울 때 나는...',
    options: [
      { text: '원리와 원인을 파고들어야 이해가 된다', group: 'NT' },
      { text: '이 개념이 나와 사람들에게 어떤 의미가 있는지 먼저 생각한다', group: 'NF' },
      { text: '교과서 순서대로 차근차근 정리하며 익힌다', group: 'SJ' },
      { text: '일단 문제를 풀어보면서 몸으로 익힌다', group: 'SP' },
    ],
  },
  {
    text: '시험 공부 계획을 세울 때 나는...',
    options: [
      { text: '가장 효율적인 순서를 논리적으로 설계한다', group: 'NT' },
      { text: '함께 공부하는 친구와 목표를 공유하며 동기부여를 받는다', group: 'NF' },
      { text: '세부 일정표를 만들어 꼼꼼히 지킨다', group: 'SJ' },
      { text: '계획보다는 그때그때 집중 잘 되는 대로 한다', group: 'SP' },
    ],
  },
  {
    text: '어려운 문제를 만났을 때 나는...',
    options: [
      { text: '왜 안 풀리는지 원리를 다시 분석한다', group: 'NT' },
      { text: '잠시 쉬며 기분을 전환한 뒤 다시 도전한다', group: 'NF' },
      { text: '참고서의 풀이 과정을 순서대로 따라간다', group: 'SJ' },
      { text: '여러 방법을 즉흥적으로 시도해본다', group: 'SP' },
    ],
  },
  {
    text: '나의 노트 필기 스타일은...',
    options: [
      { text: '개념 간 관계를 도식화, 마인드맵으로 정리한다', group: 'NT' },
      { text: '색깔펜과 그림으로 감성적으로 꾸민다', group: 'NF' },
      { text: '색인과 번호를 매겨 체계적으로 정리한다', group: 'SJ' },
      { text: '필기보다 말로 설명하거나 실습으로 익힌다', group: 'SP' },
    ],
  },
  {
    text: '그룹 스터디에서 나는...',
    options: [
      { text: '논리적 허점을 짚어주는 역할을 한다', group: 'NT' },
      { text: '분위기를 다독이고 서로 격려하는 역할을 한다', group: 'NF' },
      { text: '일정과 규칙을 관리하는 역할을 한다', group: 'SJ' },
      { text: '즉흥적인 아이디어와 에너지를 주는 역할을 한다', group: 'SP' },
    ],
  },
  {
    text: '벼락치기를 해야 할 때 나는...',
    options: [
      { text: '핵심 원리 몇 개만 파악하면 나머지는 추론할 수 있다고 생각한다', group: 'NT' },
      { text: '부담과 불안 때문에 오히려 집중이 잘 안 된다', group: 'NF' },
      { text: '불안해서 웬만하면 미리 준비해두는 편이다', group: 'SJ' },
      { text: '오히려 마감 직전에 몰입이 잘 된다', group: 'SP' },
    ],
  },
  {
    text: '내가 가장 좋아하는 학습 방식은...',
    options: [
      { text: '스스로 원리를 증명하거나 왜 그런지 탐구하는 것', group: 'NT' },
      { text: '스토리텔링이나 비유로 이해하는 것', group: 'NF' },
      { text: '반복 암기와 문제 풀이', group: 'SJ' },
      { text: '직접 해보고 시행착오로 배우는 것', group: 'SP' },
    ],
  },
  {
    text: '공부 목표를 정할 때 나는...',
    options: [
      { text: '장기적인 비전과 전략을 세운다', group: 'NT' },
      { text: '의미 있고 가치 있는 목표에 끌린다', group: 'NF' },
      { text: '현실적이고 구체적인 목표를 단계별로 세운다', group: 'SJ' },
      { text: '목표보다는 그 순간의 흥미를 따라간다', group: 'SP' },
    ],
  },
  {
    text: '시험 당일 나의 마음가짐은...',
    options: [
      { text: '논리적으로 문제를 분석하며 침착하게 임한다', group: 'NT' },
      { text: '좋은 결과를 상상하며 긍정적으로 임한다', group: 'NF' },
      { text: '준비한 대로만 하면 된다는 안정감을 느낀다', group: 'SJ' },
      { text: '긴장되지만 임기응변에는 자신 있다', group: 'SP' },
    ],
  },
  {
    text: '방학이나 자율 학습 시간에 나는...',
    options: [
      { text: '관심 있는 주제를 깊이 파고든다', group: 'NT' },
      { text: '의미 있는 활동이나 사람들과의 시간을 우선한다', group: 'NF' },
      { text: '규칙적인 루틴을 만들어 실천한다', group: 'SJ' },
      { text: '그때그때 하고 싶은 것을 자유롭게 한다', group: 'SP' },
    ],
  },
];

const quizQuestionsEl = document.getElementById('quiz-questions');
const progressBar = document.getElementById('progress-bar');
const form = document.getElementById('test-form');

function renderQuestions() {
  QUESTIONS.forEach((q, qIndex) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.qIndex = qIndex;

    const qLabel = document.createElement('div');
    qLabel.className = 'q-index';
    qLabel.textContent = `Q${qIndex + 1}. / ${QUESTIONS.length}`;
    card.appendChild(qLabel);

    const qTitle = document.createElement('h3');
    qTitle.textContent = q.text;
    card.appendChild(qTitle);

    q.options.forEach((opt, oIndex) => {
      const label = document.createElement('label');
      label.className = 'option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${qIndex}`;
      input.value = opt.group;

      input.addEventListener('change', () => {
        card.querySelectorAll('.option').forEach((el) => el.classList.remove('selected'));
        label.classList.add('selected');
        card.classList.remove('unanswered');
        updateProgress();
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt.text));
      card.appendChild(label);
    });

    quizQuestionsEl.appendChild(card);
  });
}

function updateProgress() {
  const answered = QUESTIONS.filter((_, i) =>
    document.querySelector(`input[name="q${i}"]:checked`)
  ).length;
  progressBar.style.width = `${(answered / QUESTIONS.length) * 100}%`;
}

function showResult(scores) {
  const topGroup = Object.keys(scores).reduce((a, b) => (scores[a] >= scores[b] ? a : b));
  const group = GROUPS[topGroup];

  if (typeof gtag === 'function') {
    gtag('event', 'test_complete', { group: topGroup });
  }

  document.getElementById('result-emoji').textContent = group.emoji;
  document.getElementById('result-emoji').className = `group-emoji ${group.className}`;
  document.getElementById('result-name').textContent = group.name;
  document.getElementById('result-types').textContent = group.types;
  document.getElementById('result-types').style.color = group.barColor;
  document.getElementById('result-desc').textContent = group.desc;

  const link = document.getElementById('result-link');
  link.href = group.link;

  const barsWrap = document.getElementById('result-bars');
  barsWrap.innerHTML = '';
  Object.keys(GROUPS).forEach((key) => {
    const row = document.createElement('div');
    row.className = 'score-row';

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = key;
    label.style.color = GROUPS[key].barColor;

    const track = document.createElement('div');
    track.className = 'bar-track';
    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.background = GROUPS[key].barColor;
    fill.style.width = '0%';
    track.appendChild(fill);

    const num = document.createElement('div');
    num.className = 'score-num';
    num.textContent = scores[key];

    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(num);
    barsWrap.appendChild(row);

    requestAnimationFrame(() => {
      fill.style.width = `${(scores[key] / QUESTIONS.length) * 100}%`;
    });
  });

  document.getElementById('quiz-view').classList.add('hidden');
  document.getElementById('result-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const shareBtn = document.getElementById('share-btn');
  shareBtn.onclick = () => shareResult(group);
}

function shareResult(group) {
  const shareData = {
    title: 'MBTI 공부법 연구소',
    text: `나의 공부 기질은 "${group.name}"! 너의 공부 유형도 확인해봐 →`,
    url: window.location.origin + window.location.pathname.replace('test.html', 'index.html'),
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard) {
    const shareBtn = document.getElementById('share-btn');
    navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`).then(() => {
      const original = shareBtn.textContent;
      shareBtn.textContent = '✅ 링크가 복사되었어요!';
      setTimeout(() => {
        shareBtn.textContent = original;
      }, 2000);
    });
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const scores = { NT: 0, NF: 0, SJ: 0, SP: 0 };
  let allAnswered = true;

  QUESTIONS.forEach((_, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    const card = quizQuestionsEl.querySelector(`[data-q-index="${i}"]`);
    if (checked) {
      scores[checked.value] += 1;
      card.classList.remove('unanswered');
    } else {
      allAnswered = false;
      card.classList.add('unanswered');
    }
  });

  if (!allAnswered) {
    const firstUnanswered = quizQuestionsEl.querySelector('.unanswered');
    firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  showResult(scores);
});

document.getElementById('retry-btn').addEventListener('click', () => {
  form.reset();
  quizQuestionsEl.querySelectorAll('.option.selected').forEach((el) => el.classList.remove('selected'));
  progressBar.style.width = '0%';
  document.getElementById('result-view').classList.add('hidden');
  document.getElementById('quiz-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderQuestions();
