const breakpoints = [480, 736, 980, 1280, 1690];

export const media =  breakpoints.map(
  bp => `media(maxWidth: ${bp}px)`
)