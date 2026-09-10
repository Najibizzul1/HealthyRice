const STORAGE_KEY = 'rice-disease-history'

// Get all detection history from localStorage.
export function getHistory() {
  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) {
    return []
  }

  try {
    return JSON.parse(data)
  } catch {
    // Return an empty history if stored data is invalid.
    return []
  }
}

// Save a new detection result to localStorage.
export function saveHistory(result) {
  const history = getHistory()

  const newItem = {
    ...result,
    created_at: new Date().toISOString(),
  }

  // Put the newest detection at the beginning of the list.
  const updatedHistory = [newItem, ...history]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedHistory)
  )

  return newItem
}

// Remove all detection history.
export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
}