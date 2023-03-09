//console.log('coucou');

/* ---------------   constante pour les exercices  -------------------- */

const listeAnimaux = ['caniche', 'persan', 'canari', 'saumon'];

const animaux = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'caniche',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'persan',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'canari',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'saumon',
  },
];


/* ---------------   EXERCICE 1  -------------------- */

/* écrivez votre code ici */

console.log("EXERCICE 1 :");

for (let i = 0; i < listeAnimaux.length; i++) {
  console.log(listeAnimaux[i]);
  
}; 


/* ---------------   EXERCICE 2  -------------------- */

console.log("EXERCICE 2 :");

for (let i = 0; i < animaux.length; i++) {
  console.log(`Je suis un ${animaux[i].race}.`);
}; 



/* ---------------   EXERCICE 3  -------------------- */

console.log("EXERCICE 3 :");

for (let i = 0; i < animaux.length; i++) {
  let havePoils = "";

  if (animaux[i].poils) {
    havePoils = "j'ai des poils."
  }else {
    havePoils = "je n'ai pas de poils."
  }

  console.log(`Je suis un ${animaux[i].race}, je possède ${animaux[i].patte} pattes et ${havePoils}`);
};

/* ---------------   EXERCICE 4  -------------------- */

console.log("EXERCICE 4 :");

 for (let i = 0; i < animaux.length; i++) {
  let havePoils = "";

  switch (animaux[i].famille) {
    case "oiseau":
      havePoils = "j'ai des plumes";
      break;
    case "poisson":
      havePoils = "j'ai des écailles";
      break;
    default:
      if (animaux[i].poils) {
        havePoils = "j'ai des poils.";
      }else {
        havePoils = "je n'ai pas de poils.";
      }
      break;
  }

  console.log(`Je suis un ${animaux[i].race}, je possède ${animaux[i].patte} pattes et ${havePoils}`);

};

/* --------------- EXERCICE : BONUS -------------------- */

console.log("EXERCICE BONUS :");

function displayAnimals (tb_Animals) {

  for (let i = 0; i < tb_Animals.length; i++) {
    let havePoils = "";
    let havePattes = "";
  
    switch (tb_Animals[i].famille) {
      case "oiseau":
        havePoils = "j'ai des plumes";
        break;
      case "poisson":
        havePoils = "j'ai des écailles";
        break;
      default:
        if (tb_Animals[i].poils) {
          havePoils = "j'ai des poils";
        }else {
          havePoils = "je n'ai pas de poils";
        }
        break;
    }

    if (tb_Animals[i].patte === 0) {
    havePattes = `je ne possède pas de pattes`;
    } else {
    havePattes = `je possède ${tb_Animals[i].patte} pattes`;
    }



  console.log(`Je suis un ${tb_Animals[i].race}, ${havePattes} et ${havePoils}.`);
  
  }
};




/* ---------------   BONUS  -------------------- */

const animaux2 = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dalmatien',
  },

  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dobermann',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'siberien',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'chartreux',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'rouge gorge',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'perroquet',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'faisan',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'thon',
  },
  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'bar',
  },
];

console.log("BONUS 1 :");
displayAnimals(animaux);

console.log("BONUS 2 :");
displayAnimals(animaux2);