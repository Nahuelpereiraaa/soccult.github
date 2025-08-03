const games = [
  {
    id: 1,
    leftItems: [
      { id: 'verb-1', text: '1. extend' },
      { id: 'verb-2', text: '2. detect' },
      { id: 'verb-3', text: '3. access' },
      { id: 'verb-4', text: '4. install' },
      { id: 'verb-5', text: '5. upload' },
      { id: 'verb-6', text: '6. boost' },
      { id: 'verb-7', text: '7. recycle' },
      { id: 'verb-8', text: '8. maximise' },
    ],
    rightItems: [
      { id: 'noun-a', text: 'a. waste' },
      { id: 'noun-b', text: 'b. virus' },
      { id: 'noun-c', text: 'c. revenue' },
      { id: 'noun-d', text: 'd. coverage' },
      { id: 'noun-e', text: 'e. potential' },
      { id: 'noun-f', text: 'f. the internet' },
      { id: 'noun-g', text: 'g. a file' },
      { id: 'noun-h', text: 'h. machinery' },
    ],
    correctPairs: {
      'verb-1': 'noun-d',
      'verb-2': 'noun-b',
      'verb-3': 'noun-f',
      'verb-4': 'noun-h',
      'verb-5': 'noun-g',
      'verb-6': 'noun-c',
      'verb-7': 'noun-a',
      'verb-8': 'noun-e',
    },
    leftColumnId: 'left-column-1',
    rightColumnId: 'right-column-1',
    containerId: 'game1',
  },
  {
    id: 2,
    leftItems: [
      { id: 'word-1', text: '1. a charter' },
      { id: 'word-2', text: '2. to promote' },
      { id: 'word-3', text: '3. isolation' },
      { id: 'word-4', text: '4. diversity' },
      { id: 'word-5', text: '5. to pay attention to' },
      { id: 'word-6', text: '6. equality' },
      { id: 'word-7', text: '7. a venue' },
      { id: 'word-8', text: '8. inclusion' },
    ],
    rightItems: [
      { id: 'def-a', text: 'a. when different people, things or ideas are included' },
      { id: 'def-b', text: 'b. when you feel separated from others' },
      { id: 'def-c', text: 'c. document that describes the beliefs of a group' },
      { id: 'def-d', text: 'd. to help something to happen' },
      { id: 'def-e', text: 'e. when everyone has the same rights and advantages' },
      { id: 'def-f', text: 'f. when people feel part of a group' },
      { id: 'def-g', text: 'g. to think carefully about' },
      { id: 'def-h', text: 'h. a place where an event happens' },
    ],
    correctPairs: {
      'word-1': 'def-c',
      'word-2': 'def-d',
      'word-3': 'def-b',
      'word-4': 'def-a',
      'word-5': 'def-g',
      'word-6': 'def-e',
      'word-7': 'def-h',
      'word-8': 'def-f',
    },
    leftColumnId: 'left-column-2',
    rightColumnId: 'right-column-2',
    containerId: 'game2',
  },
  {
    id: 3,
    leftItems: [
      { id: 'email-1', text: '1. I’m really looking forward to seeing you' },
      { id: 'email-2', text: '2. If I were you I would ...' },
      { id: 'email-3', text: '3. Hi Chris, great to hear from you' },
      { id: 'email-4', text: '4. Best wishes, Sira' },
      { id: 'email-5', text: '5. So, about Saturday' },
    ],
    rightItems: [
      { id: 'part-a', text: 'a. starting the email' },
      { id: 'part-b', text: 'b. referring to one of Chris’s questions' },
      { id: 'part-c', text: 'c. giving advice' },
      { id: 'part-d', text: 'd. pre-closing formula (something friendly just before the end)' },
      { id: 'part-e', text: 'e. finishing the email and signing your name' },
    ],
    correctPairs: {
      'email-1': 'part-b',
      'email-2': 'part-c',
      'email-3': 'part-a',
      'email-4': 'part-e',
      'email-5': 'part-d',
    },
    leftColumnId: 'left-column-3',
    rightColumnId: 'right-column-3',
    containerId: 'game3',
  },
  {
    id: 4,
    leftItems: [
      { id: 'sim-1', text: '1. influence' },
      { id: 'sim-2', text: '2. can be used together' },
      { id: 'sim-3', text: '3. initial design to test' },
      { id: 'sim-4', text: '4. browse' },
      { id: 'sim-5', text: '5. elements or parts of' },
      { id: 'sim-6', text: '6. appliances' },
      { id: 'sim-7', text: '7. radio' },
      { id: 'sim-8', text: '8. connection between computers' },
      { id: 'sim-9', text: '9. devices' }
    ],
    rightItems: [
      { id: 'sim-a', text: 'a. impact' },
      { id: 'sim-b', text: 'b. compatible' },
      { id: 'sim-c', text: 'c. prototype' },
      { id: 'sim-d', text: 'd. surf (the internet)' },
      { id: 'sim-e', text: 'e. components' },
      { id: 'sim-f', text: 'f. appliances' },
      { id: 'sim-g', text: 'g. wireless' },
      { id: 'sim-h', text: 'h. network' },
      { id: 'sim-i', text: 'i. devices' }
    ],
    correctPairs: {
      'sim-1': 'sim-a',
      'sim-2': 'sim-b',
      'sim-3': 'sim-c',
      'sim-4': 'sim-d',
      'sim-5': 'sim-e',
      'sim-6': 'sim-f',
      'sim-7': 'sim-g',
      'sim-8': 'sim-h',
      'sim-9': 'sim-i'
    },
    leftColumnId: 'left-column-4',
    rightColumnId: 'right-column-4',
    containerId: 'game4',
  },
];

let currentGameIndex = 0;
let selectedLeft = null;
let totalCorrect = 0;
let totalAttempts = 0;

const feedbackEl = document.getElementById('feedback');
const finalResultEl = document.getElementById('final-result');

function createListItem(item, isLeft) {
  const li = document.createElement('li');
  li.id = item.id;
  li.textContent = item.text;
  li.dataset.side = isLeft ? 'left' : 'right';
  return li;
}

function renderGame(game) {
  // Show current game container, hide others
  games.forEach(g => {
    const container = document.getElementById(g.containerId);
    container.style.display = g.id === game.id ? 'block' : 'none';
  });

  selectedLeft = null;
  feedbackEl.textContent = '';
  finalResultEl.textContent = '';

  const leftCol = document.getElementById(game.leftColumnId);
  const rightCol = document.getElementById(game.rightColumnId);
  leftCol.innerHTML = '';
  rightCol.innerHTML = '';

  game.leftItems.forEach(item => {
    const li = createListItem(item, true);
    li.addEventListener('click', () => {
      if (li.classList.contains('correct') || li.classList.contains('incorrect')) return;
      if (selectedLeft) selectedLeft.classList.remove('selected');
      li.classList.add('selected');
      selectedLeft = li;
      feedbackEl.textContent = 'Select the matching item on the right';
      feedbackEl.style.color = 'black';
    });
    leftCol.appendChild(li);
  });

  game.rightItems.forEach(item => {
    const li = createListItem(item, false);
    li.addEventListener('click', () => {
      if (!selectedLeft) {
        feedbackEl.textContent = 'Select an item on the left first.';
        feedbackEl.style.color = 'red';
        return;
      }
      if (li.classList.contains('correct') || li.classList.contains('incorrect')) return;

      checkMatch(selectedLeft, li, game);
    });
    rightCol.appendChild(li);
  });
}

function checkMatch(leftEl, rightEl, game) {
  const leftId = leftEl.id;
  const rightId = rightEl.id;
  const correctRight = game.correctPairs[leftId];

  if (correctRight === rightId) {
    leftEl.classList.add('correct');
    rightEl.classList.add('correct');
    feedbackEl.textContent = 'Good';
    feedbackEl.style.color = 'green';
    totalCorrect++;
  } else {
    leftEl.classList.add('incorrect');
    rightEl.classList.add('incorrect');
    feedbackEl.textContent = 'Incorrect';
    feedbackEl.style.color = 'red';
  }
  totalAttempts++;

  leftEl.classList.remove('selected');
  selectedLeft = null;

  // Disable clicked items
  leftEl.style.pointerEvents = 'none';
  rightEl.style.pointerEvents = 'none';

  const totalPairs = Object.keys(game.correctPairs).length;
  const completedPairs = document.querySelectorAll(
    `#${game.leftColumnId} li.correct, #${game.leftColumnId} li.incorrect`
  ).length;

  if (completedPairs === totalPairs) {
    if (currentGameIndex < games.length - 1) {
      setTimeout(() => {
        currentGameIndex++;
        renderGame(games[currentGameIndex]);
        feedbackEl.textContent = '';
      }, 1500);
    } else {
      setTimeout(() => {
        const percent = Math.round((totalCorrect / totalAttempts) * 100);
        feedbackEl.textContent = '';
        finalResultEl.textContent = `Your final score is ${percent}% correct answers.`;
      }, 1500);
    }
  }
}

renderGame(games[currentGameIndex]);
