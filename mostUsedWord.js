let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let story2 =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey.';

const storyWords = story.split(' ');
const storyWords2 = story2.split(' ');

const bArrIncludesWord = (arr, word) => {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)) {
      return true;
    }
  }
  return false;
};

const convertAndTrim = (string) => {
  if (
    string.endsWith('.') ||
    string.endsWith(',') ||
    string.endsWith('!') ||
    string.endsWith('"')
  ) {
    const newString = string.slice(0, string.length - 1);
    return newString.toLowerCase();
  } else if (string.startsWith('"')) {
    const newString = string.slice(1, string.length);
    return newString.toLowerCase();
  } else {
    return string.toLowerCase();
  }
};

const mostUsed = (arr) => {
  const sortedWords = [];
  for (let i = 0; i < arr.length; i++) {
    const tempArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== '' || arr[j] !== '') {
        let tempWord1 = convertAndTrim(arr[i]);
        let tempWord2 = convertAndTrim(arr[j]);
        if (
          tempWord1 === tempWord2 &&
          !bArrIncludesWord(sortedWords, tempWord1)
        ) {
          tempArr.push(tempWord1);
        }
      }
    }
    tempArr.length !== 0 && sortedWords.push(tempArr);
  }
  let mostUsedWord = sortedWords[0];
  sortedWords.forEach((item) => {
    if (mostUsedWord.length < item.length) {
      mostUsedWord = item;
    }
  });
  return mostUsedWord;
};

console.log(mostUsed(storyWords));
// console.log('Most used word: ', mostUsed(storyWords));
