// Copyright © 2024 Navarrotech

export function lerp(start: number, end: number, value: number) {
  return start + (end - start) * value
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(
    Math.max(
      value,
      min,
    ),
    max,
  )
}
