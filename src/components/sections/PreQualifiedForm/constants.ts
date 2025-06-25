export const YEARS_OPTIONS = Array.from({ length: 21 }, (_, i) => ({
  value: i,
  label: `${i} ${i === 1 || i === 0 ? 'year' : 'years'}`,
}));

export const MONTHS_OPTIONS = Array.from({ length: 12 }, (_, i) => ({
  value: i,
  label: `${i} ${i === 1 || i === 0 ? 'month' : 'months'}`,
}));
