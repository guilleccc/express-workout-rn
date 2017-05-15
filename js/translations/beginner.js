/*
Most of the exercises are based on:
- http://greatist.com/move/7-minute-workout-that-science-says-works
Some exercises: https://www.bodybuilding.com/exercises/finder/
*/
export const basicTranslations = {
  en: {
    settings: {
      settings: "Settings",
      language: "Language",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      weight: "Weight",
    },
    home: {
      beginnerButton: "Start beginner routine",
      intermediateButton: "Start intermediate routine",
      quote1: "I can ",
      quote2: "... and I will.",
    },
    selectRoutine: {
      title: "Select routine time",
      time: "Time",
      select: "Select",
    },
    videoPage: {
      title: "Workout",
      exitTitle: "Exit Workout",
      exitMessage: "Are you sure?",
      exitCancel: "Cancel",
      exitOK: "OK",
    },
    exercises: [
      { title: "Jumping Jack",
        instructions: ["Jump feet open as you raise arms up to form an X.",
                  "Jump feet back together as you lower arms to sides.",]
      },
      { title: "Wall Sit",
        instructions: ["Stand with back to wall.",
                  "Walk feet away from wall as you slide back down wall, lowering body until hips, knees, and ankles are at 90-degree angles. ",
                  "Engage core to keep low back pressed against wall."]
      },
      { title: "Push-Up on Knees",
        instructions: ["Begin on your hands and knees in a modified plank position. Your arms should be straight, with your shoulders above your wrists.",
                  "Rest your knees on the ground, legs together, with your feet suspended in the air.",
                  "Slowly bend your elbows and lower your chest to the floor, while maintaining a straight line from the crown of your head to your knees. Next, press upwards, engaging your chest and core."]
      },
      { title: "Crunch",
        instructions: ["Lie faceup on floor with knees bent and arms reaching straight out.",
                  "Press low back into floor and engage core to lift shoulder blades up off the floor and slightly forward.",]
      },
      { title: "Step-Up",
        instructions: ["Stand facing chair (or stool) and lift right foot onto seat.",
                  "Press into heel of right foot to lift your body weight onto chair, balancing on right leg.",
                  "Slowly lower back down to floor.",
                  "Switch legs and repeat. Continue to alternate."]
      },
      { title: "Squat",
        instructions: ["Stand with feet just wider than hip width, hips stacked over knees, knees over ankles.",
                  "Hinge at hips then send hips back and bend knees to lower body. ",
                  "Keep chest lifted and lower to at least 90 degrees. ",
                  "Rise and repeat. "]
      },
      { title: "Triceps Dip",
        instructions: ["Sit on edge of chair and place hands on edge just outside of hips.",
                  "Walk feet out a few steps, slide butt off chair, and straighten arms.",
                  "Bend elbows and lower body until arms are bent at about 90 degrees. ",
                  "Press down into chair to return to starting position."]
      },
      { title: 'Plank',
        instructions: ['Plant the hands directly under the shoulders like you’re about to do a push-up.',
                  'Ground the toes into the floor and squeeze the glutes to stabilize the body. Your legs should be working in the move too; careful not to lock or hyperextend your knees.',
                  'Neutralize the neck and spine by looking at a spot on the floor about a foot beyond the hands. Your head should be in line with your back.',
                  'Hold the position.'],
      },
      { title: "High Knees (slowly)",
        instructions: ["Stand tall with feet hip width. Engage core and use lower abs to lift and lower one knee at a time as if running in place.",
                  "Bring knees to same height as hips, thighs parallel to floor, and try not to lean back.",
                  "Stay on balls of feet and alternate legs as fast as possible.",]
      },
      { title: "Lunge",
        instructions: ["Stand tall. Take a big step forward with right leg and lower body until right thigh is parallel to floor and right shin is vertical (don't let knee go past right toe). ",
                  "Press into right heel to drive back up to starting position.",
                  "Repeat on other side. Continue to alternate legs. ",]
      },
      { title: "Push-Up",
        instructions: ["Start in high plank, wrists under shoulders, core engaged.",
                  "Lower chest to floor, keeping legs, hips, and back in a straight line.",
                  "Press into palms to lift back up."]
      },
      { title: "Side Plank (Left side)",
        instructions: ["Lie on one side with legs and feet stacked on top of one another.",
                  "Lift hips to prop body up on elbow, keeping feet stacked.",
                  "Press forearm into ground to keep torso and hips in a straight line.",
                  "Hold",]
      },
      { title: "Side Plank (Right side)",
        instructions: ["Lie on one side with legs and feet stacked on top of one another.",
                  "Lift hips to prop body up on elbow, keeping feet stacked.",
                  "Press forearm into ground to keep torso and hips in a straight line.",
                  "Hold",]
      },
      { title: "High Knees",
        instructions: ["Stand tall with feet hip width. Engage core and use lower abs to lift and lower one knee at a time as if running in place.",
                  "Bring knees to same height as hips, thighs parallel to floor, and try not to lean back.",
                  "Stay on balls of feet and alternate legs as fast as possible.",]
      },
      { title: "Dead Bug",
        instructions: ["Begin lying on your back with your hands extended above you toward the ceiling.",
                  "Bring your feet, knees, and hips up to 90 degrees.",
                  "Exhale hard to bring your ribcage down and flatten your back onto the floor, rotating your pelvis up and squeezing your glutes. Hold this position throughout the movement. This will be your starting position.",
                  "Initiate the exercise by extending one leg, straightening the knee and hip to bring the leg just above the ground.",
                  "Maintain the position of your lumbar and pelvis as you perform the movement, as your back is going to want to arch. Stay tight and return the working leg to the starting position.",
                  "Repeat on the opposite side, alternating until the set is complete.",]
      },
      { title: "Superman",
        instructions: ["To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position.",
                  "Raise one arm and leg at a time. Simply elevating your one leg, and the opposite arm. ",
                  "Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling.",]
      },
    ],

  },
  fr: {
    settings: {
      settings: "Paramètres",
      language: "Langue",
      gender: "Genre",
      male: "Homme",
      female: "Femme",
      other: "Autres",
      weight: "Poids",
    },
    home: {
      beginnerButton: "Commencer la routine de débutant",
      intermediateButton: "Démarrer la routine intermédiaire",
      quote1: "Je peux",
      quote2: "... et je le ferai.",
    },
    selectRoutine: {
      title: "Sélectionner le temps de routine",
      time: "Temps",
      select: "Sélectionner",
    },
    videoPage: {
      title: "Exercice",
      exitTitle: "Sortie d'entraînement",
      exitMessage: "Êtes-vous sûr?",
      exitCancel: "Annuler",
      exitOK: "OK",
    },
    exercises: [
      { title: "Jumping Jack",
        instructions: ["Sautez les pieds ouverts lorsque vous soulevez les bras pour former un X.",
                  "Sautez les pieds en arrière ensemble comme vous bras bas aux côtés.",]
      },
      { title: "Assise murale",
        instructions: ["Reposez-vous au mur.",
                  "Éloignez les pieds du mur lorsque vous glissez vers le bas, abaissant le corps jusqu'à ce que les hanches, les genoux et les chevilles soient à angle de 90 degrés.",
                  "Engager le noyau pour maintenir le bas du dossier serré contre le mur."]
      },
      { title: "Pompes sur les genoux",
        instructions: ["Commencez sur vos mains et vos genoux dans une position de planche modifiée. Vos bras doivent être droits, avec vos épaules au-dessus de vos poignets.",
                  "Reposez vos genoux sur le sol, les jambes ensemble, avec vos pieds suspendus dans l'air",
                  "Lentement pliez vos coudes et abaissez votre poitrine au sol, tout en maintenant une ligne droite de la couronne de votre tête à vos genoux. Ensuite, appuyez vers le haut, en engageant votre poitrine et le noyau."]
      },
      { title: "Crunch",
        instructions: ["Allongez-vous face au sol avec les genoux pliés et les bras tendus vers l'extérieur.",
                  "Appuyer légèrement dans le sol et engager le noyau pour soulever les omoplates du sol et légèrement vers l'avant.",]
      },
      { title: "Step-Up",
        instructions: ["Reposer la chaise (ou le tabouret) et soulever le pied droit sur le siège.",
                  "Appuyez dans le talon du pied droit pour soulever votre poids sur la chaise, équilibrer sur la jambe droite.",
                  "Lentement bas vers le bas au sol.",
                  "Basculer les jambes et répéter. Continuer à alterner."]
      },
      { title: "S'accroupir",
        instructions: ["Stand avec pieds plus large que la largeur de la hanche, les hanches empilées sur les genoux, les genoux sur les chevilles.",
                  "Charnière aux hanches puis envoyer les hanches dos et plier les genoux vers le bas du corps.",
                  "Gardez la poitrine soulevée et abaissée à au moins 90 degrés.",
                  "Augmenter et répéter."]
      },
      { title: "Triceps Dip",
        instructions: ["Asseyez-vous sur le bord de la chaise et placez les mains sur le bord juste à l'extérieur des hanches.",
                  "Marchez les pieds sur quelques pas, glissez le cul sur la chaise, et redressez les bras.",
                  "Plier les coudes et le bas du corps jusqu'à ce que les bras soient pliés à environ 90 degrés.",
                  "Appuyez sur la chaise pour revenir à la position de départ."]
      },
      { title: "Planche",
        instructions: ["Plantez les mains directement sous les épaules comme si vous étiez sur le point de faire un push-up.",
                 "Reboucher les orteils dans le sol et presser les fessiers pour stabiliser le corps. Vos jambes doivent également travailler dans le mouvement; Attention à ne pas verrouiller ou hyperextension vos genoux. ",
                 "Neutraliser le cou et la colonne vertébrale en regardant un endroit sur le plancher d'environ un pied au-delà des mains. Votre tête devrait être en ligne avec votre dos. ",
                 "Maintenez la position."],
      },
      { title: "Haut genoux (lentement)",
        instructions: ["Tenez-vous debout avec la largeur de la hanche des pieds. Engagez le noyau et utilisez des abdominaux inférieurs pour soulever et abaisser un genou à la fois comme s'il était en place.",
                  "Apportez les genoux à la même hauteur que les hanches, les cuisses parallèles au plancher, et essayez de ne pas vous pencher en arrière.",
                  "Restez sur les balles de pieds et alterner les jambes aussi vite que possible.",]
      },
      { title: "Lunge",
        instructions: ["Tenez-vous debout, faites un grand pas en avant avec la jambe droite et le bas du corps jusqu'à ce que la cuisse droite soit parallèle au plancher et que la tibia droite soit verticale (ne laissez pas le genou passer le pied droit)",
                  "Appuyez sur le talon droit pour revenir en position de départ.",
                  "Répéter de l'autre côté. Continuer à alterner les jambes.",]
      },
      { title: "Pompes",
        instructions: ["Démarrer en planche haute, poignets sous les épaules, noyau engagé.",
                  "Bas de la poitrine au plancher, en gardant les jambes, les hanches et le dos en ligne droite.",
                  "Appuyez dans les paumes pour le soulever."]
      },
      { title: "Planche latérale (Côté gauche)",
        instructions: ["Allongez-vous d'un côté avec les jambes et les pieds empilés les uns sur les autres.",
                  "Soulevez les hanches pour soutenir le corps sur le coude, en gardant les pieds empilés.",
                  "Appuyez l'avant-bras dans le sol pour garder le torse et les hanches en ligne droite.",
                  "Tenir",]
      },
      { title: "Planche latérale (Côté droit)",
        instructions: ["Allongez-vous d'un côté avec les jambes et les pieds empilés les uns sur les autres.",
                  "Soulevez les hanches pour soutenir le corps sur le coude, en gardant les pieds empilés.",
                  "Appuyez l'avant-bras dans le sol pour garder le torse et les hanches en ligne droite.",
                  "Tenir",]
      },
      { title: "Haut genoux",
        instructions: ["Tenez-vous debout avec la largeur de la hanche des pieds. Engagez le noyau et utilisez des abdominaux inférieurs pour soulever et abaisser un genou à la fois comme s'il était en place.",
                  "Apportez les genoux à la même hauteur que les hanches, les cuisses parallèles au plancher, et essayez de ne pas vous pencher en arrière.",
                  "Restez sur les balles de pieds et alterner les jambes aussi vite que possible.",]
      },
      { title: "Dead Bug",
        instructions: ["Commencez de couché sur le dos avec vos mains étendues au-dessus de vous vers le plafond.",
                  "Apportez les pieds, les genoux et les hanches jusqu'à 90 °.",
                  "Exhale fort pour amener votre cage thoracique vers le bas et aplatiez votre dos sur le sol, en tournant votre bassin vers le haut et en serrant vos jambes. Tenir cette position tout au long du mouvement. Ce sera votre position de départ.",
                  "Lancez l'exercice en prolongeant une jambe, en redressant le genou et la hanche pour amener la jambe juste au-dessus du sol.",
                  "Maintenez la position de votre lombaire et votre bassin lorsque vous effectuez le mouvement, car votre dos voudra arroser. Restez serré et retournez la jambe de travail à la position de départ.",
                  "Répétez sur le côté opposé, en alternant jusqu'à ce que l'ensemble soit terminé.",]
      },
      { title: "Superman",
        instructions: ["Pour commencer, lissez droit et face vers le bas sur le sol ou un tapis d'exercice. Vos bras devraient être complètement étendus en face de vous. C'est la position de départ.",
                   "Soulevez un bras et une jambe à la fois. Éloignez simplement votre jambe et le bras opposé",
                   "Commencez lentement à abaisser les bras, les jambes et la poitrine jusqu'à la position de départ tout en inhalant.",]
      },
    ],
  },
  es: {
    settings: {
      settings: "Configuración",
      language: "Idioma",
      gender: "Género",
      male: "Masculino",
      female: "Femenino",
      other: "Otro",
      weight: "Peso",
    },
    home: {
      beginnerButton: "Comenzar rutina para principiantes",
      intermediateButton: "Comenzar rutina intermedia",
      quote1: "Yo puedo ",
      quote2: "... Y lo haré.",
    },
    selectRoutine: {
      title: "Selecciona tiempo de la rutina",
      time: "Tiempo",
      select: "Seleccionar",
    },
    videoPage: {
      title: "Entrenamiento",
      exitTitle: "Salir del entrenamiento",
      exitMessage: "Estás seguro?",
      exitCancel: "Cancelar",
      exitOK: "OK",
    },
    exercises: [
      { title: "Jumping Jack",
        instructions: ["Saltar con los pies abiertos mientras levanta los brazos para formar una X.",
                  "Saltar con los pies hacia atrás juntos bajando los brazos al costado del cuerpo.",]
      },
      { title: "Sentarse en la pared",
        instructions: ["Coloquese de espaldas a la pared.",
                  "Ponga sus pies lejos de la pared mientras se desliza hacia abajo en la pared, bajando el cuerpo hasta que las caderas, las rodillas y los tobillos estén en ángulos de 90 grados.",
                  "Ponga su torso para mantener la espalda baja presionada contra la pared."]
      },
      { title: "Flexiones de brazos arrodillado",
        instructions: ["Comience con las manos y las rodillas en una variación de la tradicional tabla. Sus brazos deben ser rectos, con los hombros por encima de las muñecas.",
                  "Deje las rodillas en el suelo, las piernas juntas, con los pies suspendidos en el aire",
                  "Doble lentamente los codos y baje el pecho hasta el suelo, manteniendo una línea recta desde la parte superior de la cabeza hasta las rodillas. A continuación, presione hacia arriba, subiendo su pecho y torso."]
      },
      { title: "Crunch",
        instructions: ["Acuéstese boca arriba en el suelo con las rodillas flexionadas y los brazos extendidos hacia afuera.",
                  "Mover despacio la cabeza y el tronco hacia las rodillas hasta que las escápulas se aparten del suelo",]
      },
      { title: "Step-Up",
        instructions: ["Coloque la silla (o banqueta) de frente y levante el pie derecho sobre el asiento.",
                  "Presione en el talón del pie derecho para levantar su peso corporal sobre la silla, balanceandose en la pierna derecha.",
                  "Baje lentamente hasta el piso.",
                  "Cambiar las piernas y repetir. Continuar alternando."]
      },
      { title: "Agacharse",
        instructions: ["Párese con los pies más anchos que el ancho de la cadera, deje las caderas sobre las rodillas, las rodillas sobre los tobillos.",
                  "Mueva las caderas hacia atrás y doblar las rodillas para bajar el cuerpo.",
                  "Mantenga el pecho levantado y baje a por lo menos 90 grados.",
                  "Levántese y repita",]
      },
      { title: "Triceps Dip",
        instructions: ["Siéntese en el borde de la silla y coloque las manos en el borde justo afuera de las caderas.",
                  "Pase los pies unos cuantos pasos, deslice la cola de la silla y enderezar los brazos.",
                  "Doble los codos y la parte inferior del cuerpo hasta que los brazos se doblen a unos 90 grados.",
                  "Presione hacia abajo en la silla para volver a la posición inicial."]
      },
      { title: 'Plancha',
        instructions: ["Ponga las manos directamente debajo de los hombros como si estuviera a punto de hacer un push-up.",
                 "Ponga los dedos del pie en el suelo y apriete los glúteos para estabilizar el cuerpo.También sus piernas deben estar trabajando en el movimiento, cuidado de no bloquear o hiperextender sus rodillas.",
                 "Neutralizar el cuello y la columna vertebral mirando un punto en el suelo alrededor de un pie más allá de las manos.Tu cabeza debe estar en línea con su espalda.",
                 "Mantenga la posición."]
      },
      { title: "Rodillas arriba (despacio)",
        instructions: ["Póngase de pie con el ancho de la cadera sobre los pies. Enganche el núcleo y use abdominales inferiores para levantar y bajar una rodilla a la vez como si estuviera en su lugar.",
                  "Lleve las rodillas a la misma altura que las caderas, los muslos paralelos al suelo, e intenta no recostarte.",
                  "Alterne las piernas lo más rápido posible.",]
      },
      { title: "Zancadas",
        instructions: ["Parado. Dé un paso grande hacia adelante con la pierna derecha y la parte inferior del cuerpo hasta el muslo derecho en paralelo al piso y la espinilla derecha vertical (no deje que la rodilla valla más allá del dedo del pie derecho)",
                  "Presione en el talón derecho para volver a la posición inicial.",
                  "Repita en el otro lado. Continúe alternando las piernas.",]
      },
      { title: "Flexiones de brazos",
        instructions: ["Pongase boca abajo con muñecas bajo los hombros y su torso recto.",
                  "Baje el pecho al piso, manteniendo las piernas, las caderas y la espalda en línea recta.",
                  "Presione las palmas de sus manos para levantarse de nuevo."]
      },
      { title: "Plancha lateral (Lado izquierdo)",
        instructions: ["Acuéstese de un lado con las piernas y los pies encima del otro.",
                  "Levante las caderas para apoyar el cuerpo sobre el codo, manteniendo los pies apilados.",
                  "Presione el antebrazo en el suelo para mantener el torso y las caderas en línea recta.",
                  "Mantengáse",]
      },
      { title: "Plancha lateral (Lado derecho)",
        instructions: ["Acuéstese de un lado con las piernas y los pies encima del otro.",
                  "Levante las caderas para apoyar el cuerpo sobre el codo, manteniendo los pies apilados.",
                  "Presione el antebrazo en el suelo para mantener el torso y las caderas en línea recta.",
                  "Mantengáse",]
      },
      { title: "Rodillas arriba",
        instructions: ["Póngase de pie con el ancho de la cadera sobre los pies. Enganche el núcleo y use abdominales inferiores para levantar y bajar una rodilla a la vez como si estuviera en su lugar.",
                  "Lleve las rodillas a la misma altura que las caderas, los muslos paralelos al suelo, e intenta no recostarte.",
                  "Alterne las piernas lo más rápido posible.",]
      },
      { title: "Dead Bug",
        instructions: ["Comience acostado sobre su espalda con sus manos extendidas sobre usted hacia el techo.",
                   "Traiga sus pies, rodillas y caderas hasta 90 grados.",
                   "Exhale profundamente hasta traer su caja torácica hacia abajo y aplanar su espalda en el suelo, girando la pelvis hacia arriba y apretando los glúteos. Mantener esta posición durante todo el movimiento. Esta será su posición inicial.",
                   "Inicie el ejercicio extendiendo una pierna, enderezando la rodilla y la cadera para traer la pierna justo por encima del suelo.",
                   "Mantenga la posición de su columna lumbar y pelvis mientras realiza el movimiento, ya que su espalda va a querer arquear. Manténgase apretado y regrese la pierna de trabajo a la posición inicial.",
                   "Repita en el lado opuesto, alternando hasta que el conjunto esté completo.",]
      },
      { title: "Superman",
        instructions: ["Para comenzar, acostarse recto y boca abajo en el suelo o en la colchoneta de ejercicios, tus brazos deben estar completamente extendidos delante de ti. Esta es la posición inicial.",
                   "Levanta un brazo y una pierna a la vez, simplemente eleva tu pierna y el brazo opuesto.",
                   "Lentamente comienza a bajar los brazos, las piernas y el pecho hasta la posición inicial mientras inhala.",]
      },
    ],
  },

}
