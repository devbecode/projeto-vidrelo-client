export function cepMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
}

export function telephoneMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  e.currentTarget.value = value;
}

export function numberMask(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  e.currentTarget.value = value;
}

export default { cepMask, telephoneMask, numberMask };
