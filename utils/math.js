export const constrain = (n, min, max) => Math.max(Math.min(n, max), min)

export const lerp = (n, start, stop) => n * (stop - start) + start

// Converts n from range [a1, a2] to [b1, b2]
export const map = (n, a1, a2, b1, b2) => lerp((n - a1) / (a2 - a1), b1, b2)