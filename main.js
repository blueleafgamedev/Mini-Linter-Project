let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//split story var into single words array
let storyWords = story.split(' ');

//filter out unnecessaryWords
const betterWords = storyWords.filter(words => {
      if (!unnecessaryWords.includes(words)) {
        return words;
      }
});

//iterate through overusedWords to determine the number of times they have been used
let wordCount = 0;
let wordArr = [];
for (let i of overusedWords) {
  for (let j of betterWords) {
    if (i === j) {
      wordCount += 1;
    }
  }
}

//iterate through betterWords to determine the number of sentences in the paragraph
let sentenceCount = 0;
let wordArr2 = [];
for (let i of betterWords) {
  if (i.includes('.') || i.includes('!')) {
    sentenceCount += 1;
  }
}

//logging of word count, word count after removing unnecessary words, overused words, and total sentences.
console.log('Total words:', storyWords.length)
console.log('Total words after removing unnecessary words:', betterWords.length);
console.log(`You've used words in the overused category ${wordCount} times.`)
console.log(`There are ${sentenceCount} sentences in the paragraph.\n`)

//logging of betterWords as a single string
console.log(betterWords.join(' '))                              