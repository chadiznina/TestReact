export function passwordValidator(password) {
  if (!password) return "Le mot de passe ne peut pas être vide."
  if (password.length < 5) return 'mot de passe trop court.'
  return ''
}
export function passwordVerification(password, Verifpassword) {
  if (!password) return "Le mot de passe ne peut pas être vide."
  if (password.length < 5) return 'mot de passe trop court.'
  if (password != Verifpassword) return 'mot de passe incorrect.'
  return ''
}
