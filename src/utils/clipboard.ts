// Copy text to clipboard with a legacy execCommand fallback.
// Returns a promise that resolves on success and rejects on failure.
export function copyText(value: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value)
  }
  return new Promise<void>((resolve, reject) => {
    const temp = document.createElement('textarea')
    temp.value = value
    temp.style.position = 'fixed'
    temp.style.left = '-9999px'
    document.body.appendChild(temp)
    temp.select()
    try {
      document.execCommand('copy')
      resolve()
    } catch (e) {
      reject(e)
    } finally {
      temp.remove()
    }
  })
}
