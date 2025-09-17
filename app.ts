import "./app2";
import { GeneratedIdentifierFlags } from "./node_modules/typescript/lib/typescript";
//delupppgift 1
/*let ålder = +await read("Ålder: ")
if (ålder < 18) {write ("Omyndig")}
if (ålder >= 18 ) {write ("Myndig")}

//deluppgift 2
let längd = +await read("Hur lång är du (i cm)? ")
if (längd < 200) {write ("Hej du korte!") }
if (längd >= 200) {write ("Hej du långe!")}

//deluppgift 3
let tal = +await read("Ett tal: ")
if (tal < 0) {write ("Talet är negativt.")}
if (tal == 0) {write ("Talet är noll.")}
if (tal > 0) {write ("Talet är positivt.")}

//deluppgift 4
let x = +await read ("x = ")
let y = +await read ("y = ")
if (x > y) {write ("x > y")}
if (x < y) {write ("x < y")}
if (x == y) {write ("x = y")}

//deluppgift 5
let tal1 = +await read ("Tal 1: ")
let tal2 = +await read ("Tal 2: ")
let operator = await read ("Operator (+, -, *, /): ")
if (operator == "+") {write ("summa: " + (tal1+tal2))}
if (operator == "-") {write ("summa: " + (tal1-tal2))}
if (operator == "*") {write ("summa: " + (tal1*tal2))}
if (operator == "/") {write ("summa: " + (tal1/tal2))}

//deluppgift 6
let valör = +await read ("Valör: ")
if (valör == 1) {write ("Ett ess")}
if (valör == 11) {write ("Ett knekt")}
if (valör == 12) {write ("En dam")}
if (valör == 13) {write ("En kung")}
if (valör == 2) {write ("En 2:a")}
if (valör == 3) {write ("En 3:a")}
if (valör == 4) {write ("En 4:a")}
if (valör == 5) {write ("En 5:a")}
if (valör == 6) {write ("En 6:a")}
if (valör == 7) {write ("En 7:a")}
if (valör == 8) {write ("En 8:a")}
if (valör == 9) {write ("En 9:a")}
if (valör == 10) {write ("En 10:a")}

//deluppgift 7
let månadsnummer = +await read ("Månadsnummer: ")
if (månadsnummer == 1) {write ("Januari")}
if (månadsnummer == 2) {write ("Februari")}
if (månadsnummer == 3) {write ("Mars")}
if (månadsnummer == 4) {write ("April")}
if (månadsnummer == 5) {write ("Maj")}
if (månadsnummer == 6) {write ("Juni")}
if (månadsnummer == 7) {write ("Juli")}
if (månadsnummer == 8) {write ("Augusti")}
if (månadsnummer == 9) {write ("September")}
if (månadsnummer == 10) {write ("Oktober")}
if (månadsnummer == 11) {write ("November")}
if (månadsnummer == 12) {write ("December")}

//deluppgift 8
let månadsnummer = +await read ("Månadsnummer: ")
if (månadsnummer == 12) {write ("Vinter")}
if (månadsnummer == 1) {write ("Vinter")}
if (månadsnummer == 2) {write ("Vinter")}
if (månadsnummer == 3) {write ("Vår")}
if (månadsnummer == 4) {write ("Vår")}
if (månadsnummer == 5) {write ("Vår")}
if (månadsnummer == 6) {write ("Sommar")}
if (månadsnummer == 7) {write ("Sommar")}
if (månadsnummer == 8) {write ("Sommar")}
if (månadsnummer == 9) {write ("Höst")}
if (månadsnummer == 10) {write ("Höst")}
if (månadsnummer == 11) {write ("Höst")}

//deluppgift 9
let tal1 = +await read ("Tal 1: ")
let tal2 = +await read ("Tal 2: ")
let produkt = +await read ("Produkt: ")
if (produkt == tal1*tal2) {write ("Rätt")}
else {write ("Fel. Rätt svar: " + (tal1*tal2))}

//deluppgift 10
let tal1 = +await read ("Tal 1: ")
let tal2 = +await read ("Tal 2: ")
write ("Summa: " + (tal1+tal2) )
write ("Medel: " + ((tal1+tal2)/2) )
if (tal1<tal2) {write ("Minsta: " + tal1)}
else {write ("Minsta: " + tal2)}
if (tal1>tal2) {write ("Största: " + tal1)}
else {write ("Största: " + tal2)}

//deluppgift 11
let tal1 = +await read ("Tal 1: ")
let tal2 = +await read ("Tal 2: ")
let tal3 = +await read ("tal3: ")
write ("Summa: " + (tal1+tal2+tal3) )
write ("Medel: " + ((tal1+tal2+tal3)/3) )
if (tal1<tal2 && tal1<tal3) {write ("Minsta: " + tal1)}
if (tal2<tal1 && tal2<tal3) {write ("Minsta: " + tal2)}
if (tal3<tal1 && tal3<tal2) {write ("Minsta: " + tal3)}
if (tal1>tal2 && tal1>tal3) {write ("Största: " + tal1)}
if (tal2>tal3 && tal2>tal3) {write ("Största: " + tal2)}
if (tal3>tal1 && tal3>tal2) {write ("Största: " + tal3)}

//deluppgift 12
let tecken = await read ("Tecken: ")
let storbokstav = tecken.toLocaleUpperCase ()
let litenbokstav = tecken.toLocaleLowerCase ()
if (storbokstav == litenbokstav) {write ("Annat tecken")}
else if (litenbokstav == tecken) {write ("Liten bokstav")}
else {write ("Stor bokstav")}

//deluppgift 13
let tal = +await read ("Mata in ett tal mellan -999 och 999: ")
if (tal<-9 && tal>-100 || tal>9 && tal<100) {write ("Två siffror")}
else if (tal<-99 || tal>99) {write ("Tre siffror")}
else {write ("En siffra")}
if (tal<0) {write ("Negativt")}
if (tal>0) {write ("Positivt")}
if (tal == 0) {write ("Noll")}

//deluppgift 14
let sida1 = +await read ("Sida 1: ")
let sida2 = +await read ("Sida 2: ")
let sida3 = +await read ("Sida 3: ")
if (sida1<0 || sida1>(sida2+sida3)) {write ("Triangel? Nej!")}
else if (sida2<0 || sida2>(sida1+sida3)) {write ("Triangel? Nej!")}
else if (sida3<0 || sida3>(sida1+sida2)) {write ("Triangel? Nej!")}
else {write ("Triangel? Ja!")}*/