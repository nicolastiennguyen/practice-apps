var sampleData = [
  {word: 'consider', definition: 'deem to be'},
  {word: 'minute', definition: 'infinitely or immeasurably small'},
  {word: 'evident', definition: 'clearly revealed to the mind or the senses or judgment'},
  {word: 'practice', definition: 'a customary way of operation or behavior'},
  {word: 'intend', definition: 'have in mind as a purpose'},
  {word: 'concern', definition: 'something that interests you because it is important'},
  {word: 'commit', definition: 'perform an act, usually with a negative connotation'},
  {word: 'approach', definition: 'move towards'},
  {word: 'establish', definition: 'set up or found'},
  {word: 'concept', definition: 'an abstract or general idea inferred from specific instances'},
]

let i = Math.ceil(Math.random() * sampleData.length)
var seedData = sampleData.slice(0, i)

export default seedData;