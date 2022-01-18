export function normalize (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1
) {
  const standardNormalization = (number - currentScaleMin) / (currentScaleMax - currentScaleMin)
  return ((newScaleMax - newScaleMin) * standardNormalization + newScaleMin)
}
