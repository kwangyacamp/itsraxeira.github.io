const jsonList = [
  {
    "name": "Choi Zara",
    "prodigy": "Nordenium",
    "recipient": "Choi Ryn",
    "message": "July 6th 2001, 19 years ago on this day, God decided to send an beautiful angel to earth. The angel was meant to touch lives and that happened! Sending you a birthday wish wrapped with all my love. Hope your day always filled with happiness and joy, have a very happy birthday, Choi Ryn! Thank you for being here with us. Here's to another year of laughing at our own jokes and keeping each other sane! Love you lots.",
    "HomeLivingSet": true,
    "ElectronicSet": true,
    "AccessoriesSet": true,
    "StationarySet": true,
    "PCSet1": true,
    "PCSet2": true,
    "Headphone": true,
    "PassportCover": true,
    "LaptopCover": true,
    "NightstandLamp": true,
    "ComfortCushion": true,
    "TCWW1": false,
    "TCWW2": true
  },
  {
    "name": "SEO Matcha",
    "prodigy": "Nordenium",
    "recipient": "Lee ocha",
    "message": "Ochaa, makasiii ya udh jadi temen aca huhu syg oca💙",
    "HomeLivingSet": false,
    "ElectronicSet": false,
    "AccessoriesSet": true,
    "StationarySet": false,
    "PCSet1": false,
    "PCSet2": true,
    "Headphone": false,
    "PassportCover": false,
    "LaptopCover": false,
    "NightstandLamp": false,
    "ComfortCushion": false,
    "TCWW1": false,
    "TCWW2": false
  },
];

function sanitizeUTF8(text) {
    if (!text) return "";

    var output = "";
    for (var i=0; i<text.length; i++) {
        if (text.charCodeAt(i) <= 127 || text.charCodeAt(i) >= 160 && text.charCodeAt(i) <= 255) {
            output += text.charAt(i);
        }
    }
    return output.toLowerCase().replace(/\s/g, "-");
}

const dataset = Object.fromEntries(
    jsonList.map(entry => [sanitizeUTF8(entry.name) + "|" + sanitizeUTF8(entry.recipient), entry])
);