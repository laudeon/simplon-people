export default function hasAccessToSimplonline (value) {
  if (!value || value == "0") return 'Accès à Simplonline inactif'
  return 'Accès à Simplonline actif'
}