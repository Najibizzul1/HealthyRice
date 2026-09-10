export function formatDate(date) {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))
}

export function formatConfidence(confidence) {
  return `${Number(confidence).toFixed(1)}%`
}