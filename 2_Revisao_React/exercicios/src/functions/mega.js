export function mega(qnt = 6, nrs = []) {
  qnt = +qnt;
  if (qnt < 6 && qnt > 60) {
    throw "Quantidade inválida!";
  }

  if (nrs.length === qnt) {
    return nrs.sort((n1, n2) => n1 - n2);
  }

  const nrAleatorio = parseInt(Math.random() * 60) + 1;

  if (!nrs.includes(nrAleatorio)) {
    return mega(qnt, [...nrs, nrAleatorio]);
  } else {
    return mega(qnt, nrs);
  }
}
