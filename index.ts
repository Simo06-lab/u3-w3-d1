// 1) Tipi primitivi principali in TypeScript
// - string
// - number
// - boolean
// - undefined
// - null
// - any
// 2) Tre variabili tipizzate

let myName: string = "Mohamed"
let myAge: number = 20
let isStudyingTS: boolean = true

// 3) Tipizza il parametro della funzione greet

const greet = (name: string): string => {
  return "Ciao " + name
}

// 4) Tipo di ritorno della funzione sum
const sum = (a: number, b: number): number => {
  return a + b
}

// 8) Variabile che può contenere numero, null o undefined
let maybeNumber: number | null | undefined

// 9) Tipo per i giorni della settimana
type WeekDay =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica"

// 10) Tipizza array di numeri nei due modi possibili
const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]

// 11) Tupla con 3 stringhe e 2 numeri
const myTuple: [string, string, string, number, number] = [
  "a",
  "b",
  "c",
  10,
  20,
]

// 12) Differenza tra type e interface
// type
// puo creare unioni, tipi complessi
// non e estendibile piu volte
// interface
// serve per oggetti e classi
// puo essere estesa piu volte

// 13) Interfaccia con firstname, lastname, age
interface Person {
  firstname: string
  lastname: string
  age: number
}

// 14) Interfaccia con email obbligatoria e telefono opzionale
interface User {
  email: string
  phone?: string
}

// 15) Array tipizzato di Studenti
interface Studente {
  nome: string
  voto: number
}

const studenti: Studente[] = [
  { nome: "Luca", voto: 28 },
  { nome: "Sara", voto: 30 },
]

// 16) Interfaccia base Veicolo + estensione Auto
interface Veicolo {
  marca: string
  modello: string
}

interface Auto extends Veicolo {
  porte: number
}

// 17) Oggetto che implementa Auto
const myCar: Auto = {
  marca: "Fiat",
  modello: "Panda",
  porte: 5,
}

// 18) Cosa sono i Generics?
// i Generics sono segnaposto di tipi che rendono funzioni , classi e interfae riutilizzabili con tipi diversi

// 19) È possibile avere più tipi generici?
interface Pair<A, B> {
  first: A
  second: B
}
