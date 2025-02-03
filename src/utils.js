export function czyGodzinaJestPrawidlowa(val){
    if(val >= 0 || val <= 24)
    return true;
    return false;
}

export function czyMinutaJestPrawidlowa(val){
    if(val >= 0 || val < 60)
    return true;
    return false;
}

export function godzinaMinutaDoSekund(g,m){
    return g * 3600 + m * 60;
}

export function sekundyDoGodzinMinutSekund(s){
    let tmpSekundy = s;
    const godziny = Math.floor(tmpSekundy / 3600)
        .toString()
        .padStart(2, 0);
    tmpSekundy -= godziny * 3600;
    const minuty = Math.floor(tmpSekundy / 60)
        .toString()
        .padStart(2, 0);
    tmpSekundy -= minuty * 60;
    const sekundy = tmpSekundy
        .toString()
        .padStart(2, 0);
    return `${godziny}:${minuty}:${sekundy}`;
}