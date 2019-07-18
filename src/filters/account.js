export default function isSocActive (value) {
  if (!value || value == "0") return 'Autorisation SOC désactivée'
  return 'Autorisation SOC activée'
}