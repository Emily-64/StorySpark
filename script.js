function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
const names = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Riley', 'Casey', 'Sam', 'Jamie', 'Drew', 'Quinn'];
const places = ['Eldoria', 'Mystvale', 'Starhaven', 'Shadowmere', 'Luminara', 'Frostwood', 'Sunspire', 'Mooncrest'];
const creatures = ['griffin', 'dragon', 'phoenix', 'sprite', 'golem', 'nymph', 'troll', 'unicorn'];
const mysteries = ['a missing artifact', 'a secret code', 'an unknown visitor', 'a locked room', 'a hidden passage'];
const techs = ['quantum portal', 'AI companion', 'gravity boots', 'plasma shield', 'telepathic link'];
const fairyObjects = ['enchanted mirror', 'golden harp', 'magic lantern', 'crystal crown', 'silver flute'];

function generateStory() {
  const prompt = document.getElementById('prompt').value;
  const genre = document.getElementById('genre').value;
  if (!prompt) {
    document.getElementById('story').textContent = 'Please enter a prompt.';
    return;
  }
  let story = '';
  if (genre === 'adventure') {
    story = `Once upon a time, ${prompt}, a magical adventure began.\n\nIn the distant land of ${pick(places)}, where the sun always set in hues of gold and purple, a hero named ${pick(names)} emerged from humble beginnings. Guided by courage and curiosity, they set out on a journey that would change their life forever.\n\nAlong the way, ${prompt} led them to a mysterious ${pick(creatures)}, ancient riddles, and hidden strengths within themselves. Each challenge brought new wisdom, and every friend they met added a new chapter to their tale.\n\nAs the days passed, ${pick(names)} realized that the true magic was not in the destination, but in the journey itself. With every step, their story grew richer, filled with hope, wonder, and the promise of new adventures yet to come.\n\nAnd so, the legend of our hero, inspired by your prompt, continues to be told wherever dreams take flight.`;
  } else if (genre === 'mystery') {
    story = `It was a foggy evening when ${prompt} set the stage for a mystery to unfold.\n\nIn the heart of ${pick(places)}, strange clues about ${pick(mysteries)} started to appear, each more puzzling than the last. A clever detective named ${pick(names)}, known for their keen eye and sharp mind, took on the case.\n\nAs the investigation deepened, secrets about ${prompt} were revealed, and the line between friend and foe blurred. Every shadow held a secret, every whisper a clue.\n\nWith determination and wit, Detective ${pick(names)} pieced together the puzzle, revealing a truth that no one expected. The mystery, inspired by your prompt, was finally solved, but new questions lingered in the air...`;
  } else if (genre === 'sci-fi') {
    story = `In the year 3025, ${prompt} sparked a revolution in the stars.\n\nOn the planet ${pick(places)}, a team of explorers led by ${pick(names)} discovered a ${pick(techs)} connected to ${prompt}. As they ventured deeper into the unknown, they encountered alien civilizations, navigated cosmic anomalies, and unlocked the secrets of the universe.\n\nTheir journey was filled with wonder, danger, and the promise of a future shaped by discovery. The story, inspired by your prompt, continues to echo across galaxies, reminding all that the universe is full of possibilities.`;
  } else if (genre === 'fairy-tale') {
    story = `Long ago, in the kingdom of ${pick(places)}, where ${prompt} was whispered among the people, magic and wonder filled the air.\n\nA kind-hearted hero named ${pick(names)} set out to break a mysterious curse, guided by talking animals and an enchanted ${pick(fairyObjects)} that all spoke of ${prompt}.\n\nThrough forests of silver trees and castles in the clouds, they faced trials with bravery and kindness.\n\nIn the end, love and friendship triumphed, and the kingdom was restored to its former glory. The fairy tale, inspired by your prompt, will be told for generations to come.`;
  }
  document.getElementById('story').textContent = story;
}
