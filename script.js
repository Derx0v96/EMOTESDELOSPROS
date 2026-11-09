const emotes = [
  {
    name: 'KEKW',
    file: 'assets/emotes/KEKW.svg',
    tag: 'Laughing'
  },
  {
    name: 'MonkaS',
    file: 'assets/emotes/MonkaS.svg',
    tag: 'Stress'
  },
  {
    name: 'WeirdChamp',
    file: 'assets/emotes/WeirdChamp.svg',
    tag: 'Confused'
  }
];

const container = document.getElementById('emotes');

emotes.forEach((emote) => {
  const card = document.createElement('article');
  card.className = 'emote-card';

  card.innerHTML = `
    <img class="emote-image" src="${emote.file}" alt="${emote.name}" />
    <span class="emote-name">${emote.name}</span>
    <span class="emote-tag">${emote.tag}</span>
  `;

  container.appendChild(card);
});
