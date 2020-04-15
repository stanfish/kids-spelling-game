import FireworkCelebration from './FireworkCelebration';
import MouseBubble from './MouseBubble';

const celebrationList = [
    FireworkCelebration,
    MouseBubble,
];

export const numOfCelebration = celebrationList.length;

export function celebrationStart(i, options) {
    return celebrationList[i].celebrationStart(options);
}

export function celebrationEnd(i, options) {
    celebrationList[i].celebrationEnd(options);
}
