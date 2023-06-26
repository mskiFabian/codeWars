// Zainspirowany zespołem programistów w Vooza, napisz funkcję, która

// akceptuje nazwisko programisty i
// zwraca liczbę mieczy świetlnych posiadanych przez tę osobę.
// Nawiasem mówiąc, jedyną osobą, która posiada miecze świetlne, jest Zach. Ma 18, co jest niesamowitą liczbą mieczy świetlnych. Każdy inny posiada 0.

// Uwaga : twoja funkcja powinna mieć domyślny parametr.

// Na przykład ( Wejście --> Wyjście ):

// "anyone else" --> 0
// "Zach" --> 18


function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
}