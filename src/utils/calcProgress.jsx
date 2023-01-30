export const calcProgress = (step, total) => Math.floor((step + 1) / total * 100)
export const calcTimeProgress = (time, timeNow) => (100/(time/timeNow))