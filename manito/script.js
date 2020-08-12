const button = document.querySelector("#login-button");
const popup = document.querySelector("#vid-popup");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const clue = document.querySelector("#clue");
// const nordepass = "txtfromnorden";
const nordepass = "kikoanggur";
const hcyypass = "bfftilljannah";
const hcyy = ["lee haechan", "ryu yangyang"];
const nordenians = [
    "CHOI Hyo Min",
    "AdminBucinBom",
    "HRD N",
    "HRD X",
    "BAE Aera",
    "BAE Arin",
    "BAE Ayla",
    "BAE Dytha",
    "BAE Keyza",
    "BAE Win",
    "CHA Hari",
    "CHOI Cil",
    "CHOI Dila",
    "CHOI Hyera",
    "CHOI Hyerin",
    "CHOI Meera",
    "CHOI Sasa",
    "CHOI Zeana",
    "HWANG Afrianita",
    "HWANG Ara",
    "HWANG Beri",
    "HWANG Dahye",
    "HWANG Elaine",
    "HWANG Haje",
    "HWANG Hiren",
    "HWANG Ina",
    "HWANG Jaeandjae",
    "HWANG Jesslyn",
    "HWANG Jihyun",
    "HWANG Jiji",
    "HWANG Lea",
    "HWANG Leva",
    "HWANG Na",
    "HWANG Nadira",
    "HWANG Ran",
    "HWANG Sasa",
    "HWANG Snowy",
    "JANG Salsa",
    "JANG Seira",
    "JEON Cha",
    "JEON Shannon",
    "JUNG Alfa",
    "JUNG Amaraya",
    "JUNG Arin",
    "JUNG Jean",
    "JUNG Jeha",
    "JUNG Kia",
    "JUNG Lala",
    "KANG Ayu",
    "KANG Flona",
    "KIM Aleana",
    "KIM Auris",
    "KIM Aya",
    "KIM Dain",
    "KIM Deena",
    "KIM Elle",
    "KIM iby",
    "KIM Jessica",
    "KIM Joanna",
    "KIM Lily",
    "KIM lulu",
    "KIM Miel",
    "KIM Mirae",
    "KIM Nata",
    "KIM Nataa",
    "KIM Nayoung",
    "KIM Neun",
    "KIM Rea",
    "KIM Rose",
    "KIM Sally",
    "KIM Scala",
    "KIM Shasha",
    "KIM Tata",
    "KWON Ata",
    "KWON Yeesha",
    "LEE Biya",
    "LEE Kans",
    "LEE A Grace",
    "LEE Adee",
    "LEE Ahra",
    "LEE Ahreum",
    "LEE Aje",
    "LEE Akira",
    "LEE All",
    "LEE Aluna",
    "LEE Annaa",
    "LEE Ara",
    "LEE Ariadna",
    "LEE Arin",
    "LEE Ayin",
    "LEE Bella",
    "LEE Boyaaa",
    "LEE Callea",
    "LEE Can",
    "LEE Cellin",
    "LEE Cireng",
    "LEE Cirengg",
    "LEE Dira",
    "LEE Earli",
    "LEE Echa",
    "LEE Ell",
    "LEE Ella",
    "LEE Fanny",
    "LEE Fara",
    "LEE Fay",
    "LEE Fidel",
    "LEE Gaho",
    "LEE Gita",
    "LEE Gochujang",
    "LEE Hanaf",
    "LEE Hyunbi",
    "LEE Iris",
    "LEE Jina",
    "LEE Joo",
    "LEE Jule",
    "LEE Karin",
    "LEE Kei",
    "LEE Keisha",
    "LEE Kheyy",
    "LEE Kiki",
    "LEE Kintan",
    "LEE Kuin",
    "LEE Leon",
    "LEE Lina",
    "LEE Mila",
    "LEE Mishel",
    "LEE Moon",
    "LEE Nadya",
    "LEE Nae",
    "LEE Nana",
    "LEE Nanaa",
    "LEE Nesus",
    "LEE Noah",
    "LEE Ocha",
    "LEE Pey",
    "LEE Ranee",
    "LEE Rasha",
    "LEE Reka",
    "LEE Rene",
    "LEE Rii",
    "LEE Rose",
    "LEE Sarah",
    "LEE Shinta",
    "LEE Sora",
    "LEE Sunny",
    "LEE Taerin",
    "LEE Tan(u)",
    "LEE Tessya",
    "LEE Tyak",
    "LEE Yale",
    "LEE Yeon",
    "LEE Yeseul",
    "LEE Zalfa",
    "LEE Zelena",
    "LEE Ziliya",
    "MOON Bulan",
    "NA Affi",
    "NA Alifia",
    "NA Anya",
    "NA Araa",
    "NA Arash",
    "NA Audy",
    "NA Aya",
    "NA Byeol",
    "NA Chatrine",
    "NA Deya",
    "NA Flo",
    "NA Hyea",
    "NA Jaena",
    "NA Jaera",
    "NA Jaeraa",
    "NA Lana",
    "NA Nafa",
    "NA Parsey",
    "NA Raka",
    "NA Renbyul",
    "NA Rysha",
    "NA Sal",
    "NA Sava",
    "NA Seyeon",
    "NA Vicky",
    "NA Yeouli",
    "NA Zeya",
    "ONG Juhan",
    "ONG Pita",
    "ONG Qianyi",
    "PARK Julie",
    "PARK Arra",
    "PARK Aruna",
    "PARK Elma",
    "PARK Hyejin",
    "PARK Ian",
    "PARK Jeje",
    "PARK Min A",
    "PARK Nanas",
    "PARK Nike",
    "PARK Rani",
    "PARK Sooyoung",
    "PARK Yoora",
    "PARK Zaaa",
    "RYU Aera",
    "RYU Aline",
    "RYU Anna",
    "RYU Dayyu",
    "RYU Delfindy",
    "RYU Div",
    "RYU Ella",
    "RYU Fa",
    "RYU Luella",
    "RYU Naanaa",
    "RYU Nana",
    "RYU Pida",
    "RYU Rann",
    "RYU Seol",
    "SEO Bina",
    "SEO Matcha",
    "SEO Yasmin",
    "SHIN Elfa",
    "SHIN Ryu",
    "SON Emilia",
    "SON Gianna",
    "SON Hana",
    "SON Putri",
    "SON Silva",
    "SON Sohee",
    "ZHANG Amde",
    "ZHANG Bubu",
    "ZHANG Denta",
    "ZHANG Hana",
    "ZHANG Hannah",
    "ZHANG Kalula",
    "ZHANG Yeeun"
].map(v => v.toLowerCase());

var isHcyyFailed = false;


button.onclick = login;

password.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

username.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

function login() {
    if (!isHcyyFailed) {
        loginNormal();
    } else {
        loginHcyy();
    }
}

function loginNormal() {
    if ((hcyy.includes(username.value.toLowerCase()) && password.value == nordepass) ||
        (password.value == nordepass && nordenians.includes(username.value.toLowerCase()))
    ) {
        popup.style.display = "block";
        form.style.display = "none";
    // } else if (hcyy.includes(username.value.toLowerCase()) && password.value == nordepass) {
    //     isHcyyFailed = true;
    //     clue.innerHTML = '"Haeyang Relationship"';
    //     alert("HAECHAN YANGYANG DETECTED! Clue-nya ganti deh hahahahaha");
    //     username.value = "";
    //     password.value = "";
    } else {
        alert("Masa gatau, Nordenians bukan sih");
    }
}

function loginHcyy() {
    if (hcyy.includes(username.value.toLowerCase()) && password.value == hcyypass) {
        popup.style.display = "block";
        form.style.display = "none";
    } else {
        alert("Salah, Bro 🤩🤪👀🤟🏻🤡");
    }
}