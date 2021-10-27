
let questions = [
    {
        id: "1",
        enunciado: "En un negocio sería más interesante encargarse de:",
        opcionA: "A. Las máquinas o llevar registros",
        opcionB: "B. ?",
        opcionC: "C. Entrevistar y hablar con personas"
    },
    {
        id: "2",
        enunciado: "Normalmente me voy a dormir sintiéndome satisfecho de cómo ha ido el día.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "3",
        enunciado: "Si observo que la línea de razonamiento de otra persona es incorrecta, normalmente:",
        opcionA: "A. Se lo señalo.",
        opcionB: "B. ?",
        opcionC: "C. Lo paso por alto"
    },
    {
        id: "4",
        enunciado: "Me gusta muchísimo tener invitados y hacer que se lo pasen bien.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "5",
        enunciado: "Cuando tomo una decisión siempre pienso cuidadosamente en lo que es correcto y justo.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "6",
        enunciado: "Me atrae más pasar una tarde ocupado en una tarea tranquila a la que tenga afición que estar en una reunión animada.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "7",
        enunciado: "Admiro más a:",
        opcionA: "A. Una persona con capacidad de tipo medio, pero con una moral estricta",
        opcionB: "B. ?",
        opcionC: "C. Una persona con talento, aunque a veces no sea responsable. "
    },
    {
        id: "8",
        enunciado: "Sería más interesante ser:",
        opcionA: "A. Ingeniero de la construcción.",
        opcionB: "B. ?",
        opcionC: "C.  Escritor de teatro. "
    },
    {
        id: "9",
        enunciado: "Normalmente soy el que da el primer paso al hacer amigos",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "10",
        enunciado: "Me encantan las buenas novelas u obras de teatro / cine.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "11",
        enunciado: "Cuando la gente autoritaria trata de dominarte hago justamente lo contrario de lo que quiere. ",
        opcionA: "A. Si.",
        opcionB: "B. ?",
        opcionC: "C. No."
    },
    {
        id: "12",
        enunciado: "Algunas veces no congenio muy bien con los demás porque mis ideas no son convencionales y corrientes.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "13",
        enunciado: "Muchas personas te “apuñalarían por la espalda” para salir ellas adelante. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "14",
        enunciado: "Me meto en problemas porque a veces sigo adelante con mis ideas sin comentarlas con las personas que puedan estar implicadas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "15",
        enunciado: "Hablo de mis sentimientos",
        opcionA: "A. Con facilidad cuando las personas parecen estar interesadas. ",
        opcionB: "B. ?",
        opcionC: "C. Solo si no tengo más remedio."
    },
    {
        id: "16",
        enunciado: "Me aprovecho de la gente. ",
        opcionA: "A. Algunas veces.  ",
        opcionB: "B. ?",
        opcionC: "C. Nunca"
    },
    {
        id: "17",
        enunciado: "Mis pensamientos son demasiado complicados y profundos para ser comprendidos por muchas personas. ",
        opcionA: "A. Casi nunca  ",
        opcionB: "B. ?",
        opcionC: "C. A menudo"
    },
    {
        id: "18",
        enunciado: " Prefiero: ",
        opcionA: "A. Prefiero:   ",
        opcionB: "B. ?",
        opcionC: "C. Guardarlos para mis adentros"
    },
    {
        id: "19",
        enunciado: "Pienso a cerca de cosas que debería haber dicho, pero que no las dije ",
        opcionA: "A. Casi nunca  ",
        opcionB: "B. ?",
        opcionC: "C. A menudo"
    },
    {
        id: "20",
        enunciado: "Siempre estoy alerta ante los intentos de propagandas en las cosas que leo ",
        opcionA: "A. Si.",
        opcionB: "B. ?",
        opcionC: "C. No."
    },
    {
        id: "21",
        enunciado: "Si las personas actúan como si yo no les gustara: ",
        opcionA: "A. No me perturba ",
        opcionB: "B. ?",
        opcionC: "C. Normalmente me hace daño"
    },
    {
        id: "22",
        enunciado: "Cuando observo que difiero de alguien en puntos de vista sociales, prefiero: ",
        opcionA: "A. discutir el significado de nuestras diferencias básicas",
        opcionB: "B. ?",
        opcionC: "C. Cambiar el tema"
    },
    {
        id: "23",
        enunciado: "He dicho cosas que hirieron los sentimientos de otros. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "24",
        enunciado: "Si tuviera que cocinar o construir algo seguiría las instrucciones exactamente.",
        opcionA: "A. Verdadero, para evitar problemas ",
        opcionB: "B. ?",
        opcionC: "C. Falso, porque podría hacer algo más interesante"
    },
    {
        id: "25",
        enunciado: "Si tuviera que cocinar o construir algo seguiría las instrucciones exactamente.",
        opcionA: "A. Con otros ",
        opcionB: "B. ?",
        opcionC: "C. Yo solo"
    },
    {
        id: "26",
        enunciado: "Me gusta hacer planes con antelación para no perder tiempo en las tareas.",
        opcionA: "A.  Raras veces ",
        opcionB: "B. ?",
        opcionC: "C. A menudo"
    },
    {
        id: "27",
        enunciado: " Normalmente me gusta hacer mis planes yo solo, sin interrupciones y sugerencias de otros. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "28",
        enunciado: "Cuando me siento tenso incluso pequeñas cosas me sacan de quicio. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "29",
        enunciado: "Puedo encontrarme bastante a gusto en un ambiente desorganizado. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "30",
        enunciado: "Si mis planes, cuidadosamente elaborados, tuvieran que ser cambiados a causa de otras personas",
        opcionA: "A.  Eso me molestaría e irritaría",
        opcionB: "B. ?",
        opcionC: "C. Me parecería bien y estaría contento de cambiarlos"
    },
    {
        id: "31",
        enunciado: "Si mis planes, cuidadosamente elaborados, tuvieran que ser cambiados a causa de otras personas",
        opcionA: "A. Estar en una oficina, organizando y atendiendo a personas",
        opcionB: "B. ?",
        opcionC: "C.Estar en una oficina, organizando y atendiendo a personas "
    },
    {
        id: "32",
        enunciado: "Cuando las pequeñas cosas comienzan a marchar mal unas detrás de otras:",
        opcionA: "A. Me siento como si no pudiera dormi",
        opcionB: "B. ?",
        opcionC: "C. Continúo de un modo norma"
    },
    {
        id: "33",
        enunciado: "Me satisface y entretiene cuidarme de las necesidades de los demás.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "34",
        enunciado: "A veces hago observaciones tontas , a modode broma, para sorprender a los demás",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "35",
        enunciado: "Cuando llega él momento de hacer algo que he planeado y esperado, a veces no me apetece ya continuarlo",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "36",
        enunciado: "Cuando llega él momento de hacer algo que he planeado y esperado, a veces no me apetece ya continuarlo",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "37",
        enunciado: "Preferiría emplear una tarde: ",
        opcionA: "A. Haciendo con tranquilidad y sosiego algo por lo que tenga afición ",
        opcionB: "B. ?",
        opcionC: "C. En una fiesta animada. "
    },
    {
        id: "38",
        enunciado: "Cuando yo sé muy bien lo que el grupo tiene que hacer, me gusta ser el único en dar las órdenes. ",
        opcionA: "A. Si.",
        opcionB: "B. ?",
        opcionC: "C. No."
    },
    {
        id: "39",
        enunciado: "Me divierte mucho el humor rápido y vivaz de algunas series de televisión",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "40",
        enunciado: "Le doy más valor y respeto a las normas y buenas maneras, que a una vida fácil. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "41",
        enunciado: "Me encuentro tímido y retraído a la hora de hacer amigos entre personas desconocidas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "42",
        enunciado: "Si pudiera, preferiría hacer ejercicio con:",
        opcionA: "A. La esgrima o la danza ",
        opcionB: "B. ?",
        opcionC: "C. El tenis o la lucha libre"
    },
    {
        id: "43",
        enunciado: "Normalmente hay una gran diferencia entre lo que la gente dice y lo que hace. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "44",
        enunciado: "Resultaría más interesante ser músico que mecánico. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "45",
        enunciado: "Las personas forman su opinión acerca de mí demasiado rápidamente. ",
        opcionA: "A. Casi nunca ",
        opcionB: "B. ?",
        opcionC: "C. A menudo"
    },
    {
        id: "46",
        enunciado: "Soy de esas personas que: ",
        opcionA: "A. Siempre están haciendo cosas prácticas que necesitan ser hechas ",
        opcionB: "B. ?",
        opcionC: "C. Imaginan o piensan acerca de cosas sobre sí mismas "
    },
    {
        id: "47",
        enunciado: "Algunas personas creen que es difícil intimar conmigo. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "48",
        enunciado: " Puedo engañar a las personas siendo amigable cuando en realidad me desagradan. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "49",
        enunciado: "Mis pensamientos tienden más a girar sobre cosas realistas y prácticas.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "50",
        enunciado: "Suelo ser reservado y guardar mis problemas para mis adentros. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "51",
        enunciado: "Después de tomar una decisión sobre algo sigo pensando si será acertada o errónea. ",
        opcionA: "A. Normalmente verdadero ",
        opcionB: "B. ?",
        opcionC: "C. Normalmente falso "
    },
    {
        id: "52",
        enunciado: "En el fondo no me gustan las personas que son “diferentes” u originales.",
        opcionA: "A. Verdadero, normalmente no me gustan  ",
        opcionB: "B. ?",
        opcionC: "C. Falso, normalmente las encuentro interesantes "
    },
    {
        id: "53",
        enunciado: "Estoy más interesado en:",
        opcionA: "A. Buscar un significado personal a la vida ",
        opcionB: "B. ?",
        opcionC: "C. Asegurarme un trabajo con un buen sueldo "
    },
    {
        id: "54",
        enunciado: "Me perturbo más que otros cuando las personas se enfadan entre ellas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "55",
        enunciado: "Lo que este mundo necesita es: ",
        opcionA: "A. Más ciudadanos íntegros y constantes",
        opcionB: "B. ?",
        opcionC: "C. Más reformadores con opiniones sobre cómo mejorar el mundo"
    },
    {
        id: "56",
        enunciado: "Prefiero los juegos en lo que: ",
        opcionA: "A. Se forman equipos o se tiene un compañero",
        opcionB: "B. ?",
        opcionC: "C. . Cada uno hace su partida "
    },
    {
        id: "57",
        enunciado: "Normalmente dejo algunas cosas a la buena suerte, en vez de hacer planes complejos y con todo detalle.  ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "58",
        enunciado: "Frecuentemente tengo periodos de tiempo en que me es difícil abandonar el sentimiento de compadecerme a mí mismo. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "59",
        enunciado: "Mis mejores horas del día son aquellas que estoy solo con mis pensamientos y proyectos. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "60",
        enunciado: "Si la gente me interrumpe cuando estoy intentando hacer algo, eso no me perturba. ",
        opcionA: "A. Verdadero, no me siento mal",
        opcionB: "B. ?",
        opcionC: "C. Falso, me molesta "
    },
    {
        id: "61",
        enunciado: "Siempre conservo mis pertenencias en perfectas condiciones. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "62",
        enunciado: "A veces me siento frustrado por las personas demasiado rápidamente.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "63",
        enunciado: "No me siento a gusto cuando hablo o muestro mis sentimientos de afecto o cariño.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "64",
        enunciado: "En mi vida personal, casi siempre alcanzo las metas que me pongo",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "65",
        enunciado: "Si el sueldo fuera el mismo, preferiría ser un científico más que un directivo de ventas.  ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "66",
        enunciado: "Si la gente hace algo incorrecto, normalmente le digo lo que pienso. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "67",
        enunciado: "Pienso que mis necesidades emocionales: ",
        opcionA: "A. No están demasiado satisfechas",
        opcionB: "B. ?",
        opcionC: "C. Están bien satisfechas"
    },
    {
        id: "68",
        enunciado: " Normalmente me gusta estar en medio de mucha actividad y excitación.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "69",
        enunciado: "La gente debería insistir, más de lo que hace ahora, en que las normas morales sean seguidas estrictamente.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "70",
        enunciado: "Preferiría vestir:",
        opcionA: "A. De modo aseado y sencillo",
        opcionB: "B. ?",
        opcionC: "C. A la moda y original"
    },
    {
        id: "71",
        enunciado: "Me suelo sentir desconcertado si de pronto paso a ser el centro de la atención en un grupo social. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "72",
        enunciado: "Me pone irritado que la gente insista en que yosiga las mínimas reglas de seguridad. ",
        opcionA: "A. Verdadero, porque no siempre son necesarias",
        opcionB: "B. ?",
        opcionC: "C. Falso, por que es importante hacer las cosas correctamente "
    },
    {
        id: "73",
        enunciado: "Comenzar a conversar con extraños:",
        opcionA: "A. Nunca me ha dado problemas ",
        opcionB: "B. ?",
        opcionC: "C. Me cuesta bastante"
    },
    {
        id: "74",
        enunciado: "Si trabajara en un periódico preferiría los temas de: ",
        opcionA: "A.  Literatura o cine",
        opcionB: "B. ?",
        opcionC: "C. Deportes o política"
    },
    {
        id: "75",
        enunciado: "Dejo que pequeñas cosas me perturben más de lo que deberían. ",
        opcionA: "A. A veces",
        opcionB: "B. ?",
        opcionC: "C.Raras veces"
    },
    {
        id: "76",
        enunciado: "Es acertado estar en guardia con los que hablan de modo amable, por que se pueden aprovechar de uno. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "77",
        enunciado: "En la calle me detendría más a contemplar un artista pintando que a ver la construcción de un edificio ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "78",
        enunciado: "Las personas se hacen perezosas en su trabajo cuando consiguen hacerlo con facilidad. ",
        opcionA: "A. Casi nunca ",
        opcionB: "B. ?",
        opcionC: "C. A menudo "
    },
    {
        id: "79",
        enunciado: "Se me ocurren ideas nuevas sobre todo tipo de cosas, demasiadas para ponerlas en práctica.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "80",
        enunciado: "Cuando hablo con alguien que no conozco todavía, no doy más información que la necesaria. ",
        opcionA: "A. Normalmente Verdadero",
        opcionB: "B. ?",
        opcionC: "C. Normalmente Falso"
    },
    {
        id: "81",
        enunciado: "Pongo más atención en:",
        opcionA: "A. Las cosas prácticas que me rodean",
        opcionB: "B. ?",
        opcionC: "C. Los pensamientos y la imaginación "
    },
    {
        id: "82",
        enunciado: "Cuando la gente me critica delante de otros me siento muy descorazonado y herido. ",
        opcionA: "A. Casi nunca ",
        opcionB: "B. ?",
        opcionC: "C. A menudo "
    },
    {
        id: "83",
        enunciado: "Encuentro más interesante a la gente si sus puntos de vista son diferentes de los de la mayoría.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "84",
        enunciado: "Al tratar con la gente es mejor: ",
        opcionA: "A. “Poner todas las cartas sobre la mesa” ",
        opcionB: "B. ?",
        opcionC: "C. “No descubrir tu propio juego” "
    },
    {
        id: "85",
        enunciado: "A veces me gustaría más ponerme en mi sitio que perdonar y olvidar  ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "86",
        enunciado: "Me gusta la gente que:",
        opcionA: "A. Es estable y tradicional en sus intereses",
        opcionB: "B. ?",
        opcionC: "C. Reconsidera seriamente sus puntos de vista sobre la vida "
    },
    {
        id: "87",
        enunciado: "A veces me siento demasiado responsable sobre cosas que suceden a mí alrededor. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "88",
        enunciado: "El trabajo que me es familiar y habitual:",
        opcionA: "A. Me aburre y me da sueño",
        opcionB: "B. ?",
        opcionC: "C. Me da seguridad y confianza"
    },
    {
        id: "89",
        enunciado: "Logro terminar las cosas mejor cuando trabajo solo que cuando lo hago en equipo ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "90",
        enunciado: "Normalmente no me importa si mi habitación está desordenada.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "91",
        enunciado: "Me resulta fácil ser paciente, aun cuando alguien es lento para comprender lo que estoy explicándole. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso, me cuesta ser paciente"
    },
    {
        id: "92",
        enunciado: "Me gusta unirme a otros que van a hacer algo juntos, como ir a un museo o de excursión. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "93",
        enunciado: "Soy algo perfeccionista y me gusta que las cosas se hagan bien. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "94",
        enunciado: "Cuándo tengo que hacer una larga cola por algún motivo, no me pongo tan intranquilo y nervioso como la mayoría  ",
        opcionA: "A. Verdadero, no me pongo ",
        opcionB: "B. ?",
        opcionC: "C. Falso, me pongo intranquilo"
    },
    {
        id: "95",
        enunciado: "La gente me trata menos razonablemente de lo que merecen mis buenas intenciones.",
        opcionA: "A. A veces",
        opcionB: "B. ?",
        opcionC: "C. Nunca"
    },
    {
        id: "96",
        enunciado: "Me lo paso bien con gente que muestra abiertamente sus emociones.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "97",
        enunciado: "No dejo que me depriman pequeñas cosas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "98",
        enunciado: "Si pudiera ayudar en el desarrollo de un invento útil preferiría encargarme de:",
        opcionA: "A. Investigarlo en el laboratorio ",
        opcionB: "B. ?",
        opcionC: "C. Mostrar a las personas su utilización"
    },
    {
        id: "99",
        enunciado: "Si ser cortés y amable no da resultado puedo ser rudo y astuto cuando sea necesario.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "100",
        enunciado: "Me gusta ir a menudo a espectáculos y diversiones.  ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "101",
        enunciado: "Me siento insatisfecho conmigo mismo. ",
        opcionA: "A. A veces ",
        opcionB: "B. ?",
        opcionC: "C. Rara veces"
    },
    {
        id: "102",
        enunciado: "Si nos perdiéramos en una cuidad y los amigos no estuvieran de acuerdo conmigo en el camino a seguir: ",
        opcionA: "A. No protestaría y les seguiría",
        opcionB: "B. ?",
        opcionC: "C. Les haría saber que yo creía que mi camino era mejor "
    },
    {
        id: "103",
        enunciado: " La gente me considera una persona animada y sin preocupaciones. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "104",
        enunciado: "Si el banco se descuidara y no me cobrara algo que debiera, creo que: ",
        opcionA: "A. Lo indicaría y lo pagaría",
        opcionB: "B. ?",
        opcionC: "C. Yo no tengo por qué decírselo "
    },
    {
        id: "105",
        enunciado: "Siempre tengo que estar luchando contra mi timidez. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "106",
        enunciado: "Los profesores, sacerdotes y otras personas emplean mucho tiempo intentando impedirnos hacer lo que deseamos. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "107",
        enunciado: "Cuando estoy con un grupo, normalmente me siento, escucho y dejo que los demás lleven el peso de la conversación. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "108",
        enunciado: "Normalmente aprecio más belleza de un poema que una excelente estrategia en un deporte.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "109",
        enunciado: "Si uno es franco y abierto los demás intentan aprovecharse de él.",
        opcionA: "A. Lo indicaría y lo pagaría",
        opcionB: "B. ?",
        opcionC: "C. Yo no tengo por qué decírselo "
    },
    {
        id: "110",
        enunciado: "Siempre me interesan las cosas mecánicas y soy bastante bueno para arreglarlas.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "111",
        enunciado: "A veces estoy tan enfrascado en mis pensamientos que, a no ser que salga de ellos, pierdo la noción del tiempo y desordeno o no encuentro mis cosa.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "112",
        enunciado: "Parece como si no pudiera confiar en más de la mitad de la gente que voy conociendo.",
        opcionA: "A. Verdadero, no se puede confiar en ella",
        opcionB: "B. ?",
        opcionC: "C. Falso, se puede confiar en ella "
    },
    {
        id: "113",
        enunciado: "Normalmente descubro que conozco a los demás mejor que ellos me conocen a mí.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "114",
        enunciado: "A menudo los demás dicen que mis ideas son realistas y prácticas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "115",
        enunciado: "Si creo que lo merecen, hago agudas y sarcásticas observaciones a los demás.",
        opcionA: "A. A veces",
        opcionB: "B. ?",
        opcionC: "C. Nunca"
    },
    {
        id: "116",
        enunciado: "A veces me siento como si hubiera hecho algo malo, aunque realmente no lo haya hecho. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "117",
        enunciado: "Me resulta fácil hablar sobre mi vida, incluso sobre aspectos que otros considerarían muy personales. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "118",
        enunciado: "Me gusta diseñar modos por los que el mundo pudiera cambiar y mejorar.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "119",
        enunciado: "Tiendo a ser muy sensible y preocuparme mucho acerca de algo que he hecho. ",
        opcionA: "A. Casi nunca",
        opcionB: "B. ?",
        opcionC: "C. A menudo"
    },
    {
        id: "120",
        enunciado: "En el periódico que acostumbro a hojear me intereso más por: ",
        opcionA: "A. Los artículos sobre los problemas sociales ",
        opcionB: "B. ?",
        opcionC: "C. Todas las noticias locales."
    },
    {
        id: "121",
        enunciado: "Preferiría emplear una tarde libre en:",
        opcionA: "A. Leer o trabajar en solitario en un proyecto.",
        opcionB: "B. ?",
        opcionC: "C. Hacer alguna tarea con los amigos."
    },
    {
        id: "122",
        enunciado: "Cuando hay algo molesto que hacer, prefiero:",
        opcionA: "A. Dejarlo a un lado hasta que no haya más remedio que hacerlo",
        opcionB: "B. ?",
        opcionC: "C. Comenzar a hacerlo de inmediato."
    },
    {
        id: "123",
        enunciado: "Prefiero tomar la comida de medio día:",
        opcionA: "A. Con un grupo de gente.",
        opcionB: "B. ?",
        opcionC: "C. En solitario"
    },
    {
        id: "124",
        enunciado: "Soy paciente con las personas, incluso cuando no son corteses y consideradas con mis sentimientos. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "125",
        enunciado: "Cuando hago algo, normalmente me tomo tiempo para pensar antes en todo lo que necesito para la tarea.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "126",
        enunciado: "Me siento molesto cuando la gente emplea mucho tiempo para explicar algo. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "127",
        enunciado: "Mis amigos probablemente me describen como una persona",
        opcionA: "A. Cálida y amigable. ",
        opcionB: "B. ?",
        opcionC: "C.  Formal y objetiva."
    },
    {
        id: "128",
        enunciado: "Cuando algo me perturba, normalmente me olvido pronto de ello.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "129",
        enunciado: "Como afición agradable prefiero: ",
        opcionA: "A. Hacer o reparar algo.",
        opcionB: "B. ?",
        opcionC: "C. Trabajar en grupo en una tarea comunitaria."
    },
    {
        id: "130",
        enunciado: "Creo que debo reclamar si en el restaurant recibo mal servicio o alimentos deficientes. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "131",
        enunciado: "Tengo más cambios de humor que la mayoría de las personas que conozco.",
        opcionA: "A. Normalmente Verdadero",
        opcionB: "B. ?",
        opcionC: "C. Normalmente Falso"
    },
    {
        id: "132",
        enunciado: "Cuando los demás no ven las cosas como la veo yo, normalmente logro convencerlos.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "133",
        enunciado: "Creo que ser libre para ser lo que desee es más importante que tener buenos modales y respetar las normas.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "134",
        enunciado: "Me encanta hacer reír a la gente con historias ingeniosas.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "135",
        enunciado: "Me considero una persona socialmente muy atrevida y comunicativa.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "136",
        enunciado: "Si una persona es lo suficientemente lista para eludir las normas sin que parezca que las incumple: ",
        opcionA: "A. Podría incumplirlas si tiene razonas especiales para ello. ",
        opcionB: "B. ?",
        opcionC: "C. Debería seguirlas a pesar de todo. "
    },
    {
        id: "137",
        enunciado: "Cuando me uno a un nuevo grupo, normalmente encajo pronto.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "138",
        enunciado: "Prefiero leer historias rudas o de acción realista más que novelas sentimentales e imaginativas ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "139",
        enunciado: "Sospecho que la persona que se muestra abiertamente amigable conmigo pueda ser desleal cuando yo no esté delante.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "140",
        enunciado: "Cuando era niño empleaba la mayor parte de mi tiempo en: ",
        opcionA: "A. Hacer o construir algo. ",
        opcionB: "B. ?",
        opcionC: "C. Leer o imaginar cosas ideales. "
    },
    {
        id: "141",
        enunciado: "Muchas personas son demasiado quisquillosas y sensibles, y por su propio bien deberían “endurecerse”. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "142",
        enunciado: "Me muestro tan interesado en pensar en las ideas que a veces paso por alto los detalles prácticos. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "143",
        enunciado: "Si alguien me hace una pregunta demasiado personal intento cuidadosamente evitar contestarla. ",
        opcionA: "A. Normalmente Verdadero",
        opcionB: "B. ?",
        opcionC: "C. Normalmente Falso"
    },
    {
        id: "144",
        enunciado: "Cuando me piden hacer una tarea voluntaria digo que estoy demasiado ocupado. ",
        opcionA: "A. A veces.",
        opcionB: "B. ?",
        opcionC: "C. Rara veces."
    },
    {
        id: "145",
        enunciado: "Mis amigos me consideran una persona algo abstraída y no siempre práctica.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "146",
        enunciado: "Me siento muy abatido cuando la gente me critica en un grupo. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "147",
        enunciado: "Les surgen más problemas a quienes:",
        opcionA: "A. Se cuestionan o cambian métodos que son ya satisfactorios.",
        opcionB: "B. ?",
        opcionC: "C. Descartan enfoques nuevos o prometedores."
    },
    {
        id: "148",
        enunciado: "Soy muy cuidadoso cuando se trata de elegir a alguien con quien “abrirme” francamente. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "149",
        enunciado: "Me gusta más intentar nuevos modos de hacer las cosas que seguir caminos ya conocidos. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "150",
        enunciado: "Los demás dicen que suelo ser demasiado critico conmigo mismo.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "151",
        enunciado: "Generalmente me gusta más una comida si contiene alimentos familiares y cotidianos que si tiene alimentos poco corrientes. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "152",
        enunciado: " Puedo pasar fácilmente una mañana entera sin tener necesidad de hablar con alguien.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "153",
        enunciado: "Deseo ayudar a las personas.",
        opcionA: "A. Siempre.",
        opcionB: "B. ?",
        opcionC: "C. A veces."
    },
    {
        id: "154",
        enunciado: "Yo creo que: ",
        opcionA: "A. Algunos trabajos no deberían ser hechos tan cuidadosamente como otros.",
        opcionB: "B. ?",
        opcionC: "C. Cualquier trabajo habría que hacerlo bien si es que se va a hacer."
    },
    {
        id: "155",
        enunciado: "Me resulta difícil ser paciente cuando la gente me critica. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "156",
        enunciado: "Prefiero los momentos en que hay gente a mí alrededor.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "157",
        enunciado: "Cuando realizo una tarea no me encuentro satisfecho a no ser que ponga especial atención incluso a los pequeños detalles. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "158",
        enunciado: "Algunas veces me “ sacan de quicio” de un modo insoportable pequeñas cosas, aunque reconozca que son triviales.",
        opcionA: "A. Si.",
        opcionB: "B. ?",
        opcionC: "C. No."
    },
    {
        id: "159",
        enunciado: "Me gusta más escuchar a la gente hablar de sus sentimientos personales que de otros temas. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "160",
        enunciado: "Hay ocasiones en que no me siento de humar para ver a nadie.",
        opcionA: "A. Muy raras veces.",
        opcionB: "B. ?",
        opcionC: "C. Bastante a menudo."
    },
    {
        id: "161",
        enunciado: "Me gustaría más ser consejero orientador que arquitecto. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "162",
        enunciado: "En mi vida cotidiana casi nunca me encuentro con problemas que no puedo afrontar. ",
        opcionA: "A. Verdadero, puedo afrontarlos fácilmente.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "163",
        enunciado: "Cuando las personas hacen algo que me molesta, normalmente:",
        opcionA: "A. No le doy importancia. ",
        opcionB: "B. ?",
        opcionC: "C. Se lo digo."
    },
    {
        id: "164",
        enunciado: "Yo creo más en:",
        opcionA: "A. Ser claramente serio en la vida cotidiana.",
        opcionB: "B. ?",
        opcionC: "C. Seguir casi siempre el dicho “Diviértete y sé feliz”. "
    },
    {
        id: "165",
        enunciado: "Me gusta que haya alguna competitividad en las cosas que hago. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "166",
        enunciado: "La mayoría de las normas se han hecho para no cumplirlas cuando haya buenas razones para ello.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "167",
        enunciado: "Me cuesta bastante hablar delante de un grupo numeroso de personas.",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "168",
        enunciado: "Preferiría un hogar en el que:",
        opcionA: "A. Se sigan normas estrictas de conducta.",
        opcionB: "B. ?",
        opcionC: "C. No haya muchas normas."
    },
    {
        id: "169",
        enunciado: "En las reuniones sociales suelo sentirme tímido e inseguro de mí mismo. ",
        opcionA: "A. Verdadero.",
        opcionB: "B. ?",
        opcionC: "C. Falso."
    },
    {
        id: "170",
        enunciado: "En la televisión prefiero: ",
        opcionA: "A. Un programa sobre nuevos inventos prácticos.",
        opcionB: "B. ?",
        opcionC: "C. Un concierto de un artista famoso."
    },
    {
        id: "171",
        enunciado: "“Minuto” es a “hora” como “Segundo” es a:",
        opcionA: "A. Minuto.",
        opcionB: "B. Milisegundo.",
        opcionC: "C. Hora."
    },
    {
        id: "172",
        enunciado: "“Renacuajo” es a “rana” como “larva” es a:",
        opcionA: "A. Araña.",
        opcionB: "B. Gusano.",
        opcionC: "C. Insecto."
    },
    {
        id: "173",
        enunciado: "“Jamón” es a “cerdo” como “chuleta” es a: ",
        opcionA: "A. Cordero.",
        opcionB: "B. Pollo.",
        opcionC: "C. Merluza."
    },
    {
        id: "174",
        enunciado: "“Hielo” es a “agua” como “roca” es a",
        opcionA: "A. Lava.",
        opcionB: "B. Arena.",
        opcionC: "C. Petróleo. "
    },
    {
        id: "175",
        enunciado: "“Mejor” es a “pésimo” como “peor” es a :  ",
        opcionA: "A. Malo.",
        opcionB: "B. Santo.",
        opcionC: "C. Óptimo."
    },
    {
        id: "176",
        enunciado: "Cual de las tres palabras indica algo diferente de las otras dos:",
        opcionA: "A. Terminal.",
        opcionB: "B. Estacional.",
        opcionC: "C. Cíclico."
    },
    {
        id: "177",
        enunciado: "¿Cuál de las tres palabras indica algo diferente de las otras dos?",
        opcionA: "A. Gato.",
        opcionB: "B. Cerca.",
        opcionC: "C. Planeta."
    },
    {
        id: "178",
        enunciado: "Lo opuesto de “correcto” es lo opuesto de:",
        opcionA: "A. Bueno.",
        opcionB: "B. Erróneo.",
        opcionC: "C. Adecuado."
    },
    {
        id: "179",
        enunciado: "¿Cuál de las tres palabras indica algo diferente de las otras dos?  ",
        opcionA: "A. Probable.",
        opcionB: "B. Eventual.",
        opcionC: "C. Inseguro."
    },
    {
        id: "180",
        enunciado: "Lo opuesto de lo opuesto de “inexacto” es:  ",
        opcionA: "A. Casual.",
        opcionB: "B. Puntual.",
        opcionC: "C. Incorrecto."
    },
    {
        id: "181",
        enunciado: "¿Qué número debe seguir al final de éstos? 1 – 4 – 9 – 16 .... ",
        opcionA: "A. 20.",
        opcionB: "B. 25.",
        opcionC: "C. 25."
    },
    {
        id: "182",
        enunciado: "¿Qué letra debe seguir al final de éstas? A – B – D – G .... ",
        opcionA: "A. H. ",
        opcionB: "B. K. ",
        opcionC: "C. J. "
    },
    {
        id: "183",
        enunciado: "¿Qué letra debe seguir al final de éstas? E – I – L .... ",
        opcionA: "A. M.",
        opcionB: "B. N.",
        opcionC: "C. O."
    },
    {
        id: "184",
        enunciado: "¿Qué número debe seguir al final de éstos? 1/12 – 1/6 – 1/3 – 2/3 ....",
        opcionA: "A. 3 / 4.",
        opcionB: "B. 4 / 3.",
        opcionC: "C. 3 / 2. "
    },
    {
        id: "185",
        enunciado: "¿Qué número debe seguir al final de éstos? 1 2 0 3 –1.... ",
        opcionA: "A. 5.",
        opcionB: "B. 4.",
        opcionC: "C. -3."
    }
];
//Valores de decatipos
var matrizResultados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//columna 0 Limite Inferior
//columna 1 Limite Superior
var factorA_MujeresConversion = [
    [0, 5],
    [6, 6],
    [7, 8],
    [9, 9],
    [10, 11],
    [12, 12],
    [13, 13],
    [14, 14],
    [5, 15],
    [16, 20]
];

var factorA_HombresConversion = [
    [0, 3],
    [4, 5],
    [6, 7],
    [8, 8],
    [9, 10],
    [11, 12],
    [13, 13],
    [14, 15],
    [16, 16],
    [17, 20]
];
var factorC_MujeresConversion = [
    [0, 12],
    [13, 13],
    [14, 14],
    [15, 17],
    [18, 19],
    [20, 20],
    [21, 22],
    [23, 23],
    [24, 25],
    [26, 26]
];

var factorC_HombresConversion = [
    [0, 9],
    [10, 12],
    [13, 14],
    [15, 17],
    [18, 19],
    [20, 21],
    [22, 23],
    [24, 24],
    [25, 25],
    [26, 26]
];
var factorF_MujeresConversion = [
    [0, 3],
    [4, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 17],
    [18, 21],
    [22, 26]
];

var factorF_HombresConversion = [
    [0, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 13],
    [14, 15],
    [16, 17],
    [18, 20],
    [21, 22],
    [23, 26]
];
var factorH_MujeresConversion = [
    [0, 5],
    [6, 7],
    [8, 9],
    [10, 12],
    [13, 14],
    [15, 16],
    [17, 20],
    [21, 23],
    [24, 24],
    [25, 26]
];

var factorH_HombresConversion = [
    [0, 6],
    [7, 7],
    [8, 10],
    [11, 13],
    [14, 17],
    [18, 19],
    [20, 22],
    [23, 24],
    [25, 25],
    [26, 26]

];
var factorL_MujeresConversion = [
    [0, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 10],
    [11, 11],
    [12, 13],
    [14, 14],
    [15, 20]
];

var factorL_HombresConversion = [
    [0, 2],
    [3, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 10],
    [11, 12],
    [13, 14],
    [15, 15],
    [16, 20]
];
var factorQ1_MujeresConversion = [
    [0, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 12],
    [13, 14],
    [15, 15],
    [16, 16],
    [17, 20]
];

var factorQ1_HombresConversion = [
    [0, 4],
    [5, 6],
    [7, 7],
    [8, 9],
    [10, 10],
    [11, 12],
    [13, 14],
    [15, 15],
    [16, 16],
    [17, 20]
];
var factorQ3_MujeresConversion = [
    [0, 4],
    [5, 6],
    [7, 9],
    [10, 11],
    [12, 12],
    [13, 15],
    [16, 16],
    [17, 17],
    [19, 19],
    [19, 20]
];

var factorQ3_HombresConversion = [
    [0, 5],
    [6, 8],
    [9, 10],
    [11, 12],
    [13, 13],
    [14, 15],
    [16, 16],
    [17, 17],
    [18, 18],
    [19, 20]
];
var factorB_MujeresConversion = [
    [0, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 11],
    [12, 13]
];

var factorB_HombresConversion = [
    [0, 1],
    [2, 2],
    [3, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [8, 8],
    [9, 9],
    [10, 13]
];
var factorE_MujeresConversion = [
    [0, 4],
    [5, 5],
    [6, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 17],
    [18, 26]
];

var factorE_HombresConversion = [
    [0, 5],
    [6, 6],
    [7, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 15],
    [16, 18],
    [19, 20],
    [21, 26]
];
var factorG_MujeresConversion = [
    [0, 7],
    [8, 8],
    [9, 9],
    [10, 11],
    [12, 13],
    [14, 15],
    [16, 16],
    [17, 17],
    [18, 18],
    [19, 20]
];

var factorG_HombresConversion = [
    [0, 8],
    [9, 9],
    [10, 11],
    [12, 12],
    [13, 14],
    [15, 16],
    [17, 17],
    [18, 18],
    [19, 19],
    [20, 20]
];
var factorI_MujeresConversion = [
    [0, 3],
    [4, 5],
    [6, 6],
    [7, 7],
    [8, 10],
    [11, 12],
    [13, 14],
    [15, 15],
    [16, 16],
    [17, 20]
];

var factorI_HombresConversion = [
    [0, 1],
    [2, 3],
    [4, 4],
    [5, 5],
    [6, 7],
    [8, 9],
    [10, 10],
    [11, 12],
    [13, 13],
    [14, 20]
];
var factorM_MujeresConversion = [
    [0, 6],
    [7, 8],
    [9, 9],
    [10, 10],
    [11, 13],
    [14, 15],
    [16, 16],
    [17, 18],
    [19, 20],
    [21, 26]
];

var factorM_HombresConversion = [
    [0, 6],
    [7, 7],
    [8, 9],
    [10, 10],
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 17],
    [18, 18],
    [19, 26]
];
var factorO_MujeresConversion = [
    [0, 2],
    [3, 3],
    [4, 5],
    [6, 8],
    [9, 10],
    [11, 11],
    [12, 13],
    [14, 14],
    [15, 16],
    [17, 26]
];

var factorO_HombresConversion = [
    [0, 3],
    [4, 5],
    [6, 6],
    [7, 7],
    [8, 10],
    [11, 11],
    [12, 14],
    [15, 16],
    [17, 19],
    [20, 26]
];
var factorQ2_MujeresConversion = [
    [0, 5],
    [6, 6],
    [7, 8],
    [9, 9],
    [10, 11],
    [12, 12],
    [13, 14],
    [15, 16],
    [17, 17],
    [18, 20]
];

var factorQ2_HombresConversion = [
    [0, 3],
    [4, 5],
    [6, 7],
    [8, 8],
    [9, 10],
    [11, 12],
    [13, 13],
    [14, 15],
    [16, 17],
    [18, 20]
];
var factorQ4_MujeresConversion = [
    [0, 2],
    [3, 3],
    [4, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 15],
    [16, 17],
    [18, 26]
];

var factorQ4_HombresConversion = [
    [0, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 16],
    [17, 26]
];
var factorN_MujeresConversion = [
    [0, 5],
    [6, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 12],
    [13, 13],
    [14, 14],
    [15, 15],
    [16, 20]
];

var factorN_HombresConversion = [
    [0, 5],
    [6, 6],
    [7, 8],
    [9, 10],
    [11, 11],
    [12, 12],
    [13, 14],
    [15, 15],
    [16, 17],
    [18, 20]
];

let factorA = [
    {
        id: "3",
        opcion: "A",
        PB: 2
    },
    {
        id: "3",
        opcion: "B",
        PB: 1
    },
    {
        id: "26",
        opcion: "B",
        PB: 1
    },
    {
        id: "26",
        opcion: "C",
        PB: 2
    },
    {
        id: "27",
        opcion: "B",
        PB: 1
    },
    {
        id: "27",
        opcion: "C",
        PB: 2
    },
    {
        id: "51",
        opcion: "B",
        PB: 1
    },
    {
        id: "51",
        opcion: "C",
        PB: 2
    },
    {
        id: "52",
        opcion: "A",
        PB: 2
    },
    {
        id: "52",
        opcion: "B",
        PB: 1
    },
    {
        id: "76",
        opcion: "B",
        PB: 1
    },
    {
        id: "76",
        opcion: "C",
        PB: 2
    },
    {
        id: "101",
        opcion: "A",
        PB: 2
    },
    {
        id: "101",
        opcion: "B",
        PB: 1
    },
    {
        id: "126",
        opcion: "A",
        PB: 2
    },
    {
        id: "126",
        opcion: "B",
        PB: 1
    },
    {
        id: "151",
        opcion: "B",
        PB: 1
    },
    {
        id: "151",
        opcion: "C",
        PB: 2
    },
    {
        id: "176",
        opcion: "A",
        PB: 2
    },
    {
        id: "176",
        opcion: "B",
        PB: 1
    }
];
let factorC = [
    {
        id: "4",
        opcion: "A",
        PB: 2
    },
    {
        id: "4",
        opcion: "B",
        PB: 1
    },
    {
        id: "5",
        opcion: "B",
        PB: 1
    },
    {
        id: "5",
        opcion: "C",
        PB: 2
    },
    {
        id: "29",
        opcion: "B",
        PB: 1
    },
    {
        id: "29",
        opcion: "C",
        PB: 2
    },
    {
        id: "30",
        opcion: "A",
        PB: 2
    },
    {
        id: "30",
        opcion: "B",
        PB: 1
    },
    {
        id: "55",
        opcion: "A",
        PB: 2
    },
    {
        id: "55",
        opcion: "B",
        PB: 1
    },
    {
        id: "79",
        opcion: "B",
        PB: 1
    },
    {
        id: "79",
        opcion: "C",
        PB: 2
    },
    {
        id: "80",
        opcion: "B",
        PB: 1
    },
    {
        id: "80",
        opcion: "C",
        PB: 2
    },
    {
        id: "104",
        opcion: "A",
        PB: 2
    },
    {
        id: "104",
        opcion: "B",
        PB: 1
    },
    {
        id: "105",
        opcion: "A",
        PB: 2
    },
    {
        id: "105",
        opcion: "B",
        PB: 1
    },
    {
        id: "129",
        opcion: "B",
        PB: 1
    },
    {
        id: "129",
        opcion: "C",
        PB: 2
    },
    {
        id: "130",
        opcion: "A",
        PB: 2
    },
    {
        id: "130",
        opcion: "B",
        PB: 1
    },
    {
        id: "154",
        opcion: "B",
        PB: 1
    },
    {
        id: "154",
        opcion: "C",
        PB: 2
    },
    {
        id: "179",
        opcion: "A",
        PB: 2
    },
    {
        id: "179",
        opcion: "B",
        PB: 1
    }
];

let factorF = [
    {
        id: "8",
        opcion: "B",
        PB: 1
    },
    {
        id: "8",
        opcion: "C",
        PB: 2
    },
    {
        id: "33",
        opcion: "A",
        PB: 2
    },
    {
        id: "33",
        opcion: "B",
        PB: 1
    },
    {
        id: "58",
        opcion: "A",
        PB: 1
    },
    {
        id: "58",
        opcion: "B",
        PB: 2
    },
    {
        id: "82",
        opcion: "B",
        PB: 1
    },
    {
        id: "82",
        opcion: "C",
        PB: 2
    },
    {
        id: "83",
        opcion: "A",
        PB: 2
    },
    {
        id: "83",
        opcion: "B",
        PB: 1
    },
    {
        id: "107",
        opcion: "B",
        PB: 1
    },
    {
        id: "107",
        opcion: "C",
        PB: 2
    },
    {
        id: "108",
        opcion: "B",
        PB: 1
    },
    {
        id: "108",
        opcion: "C",
        PB: 2
    },
    {
        id: "132",
        opcion: "A",
        PB: 2
    },
    {
        id: "132",
        opcion: "B",
        PB: 1
    },
    {
        id: "133",
        opcion: "A",
        PB: 2
    },
    {
        id: "133",
        opcion: "B",
        PB: 1
    },
    {
        id: "157",
        opcion: "B",
        PB: 1
    },
    {
        id: "157",
        opcion: "C",
        PB: 2
    },
    {
        id: "158",
        opcion: "B",
        PB: 1
    },
    {
        id: "158",
        opcion: "C",
        PB: 2
    },
    {
        id: "182",
        opcion: "A",
        PB: 2
    },
    {
        id: "182",
        opcion: "B",
        PB: 1
    },
    {
        id: "183",
        opcion: "A",
        PB: 2
    },
    {
        id: "183",
        opcion: "B",
        PB: 1
    }
];
let factorH = [
    {
        id: "10",
        opcion: "A",
        PB: 2
    },
    {
        id: "10",
        opcion: "B",
        PB: 1
    },
    {
        id: "35",
        opcion: "B",
        PB: 1
    },
    {
        id: "35",
        opcion: "C",
        PB: 2
    },
    {
        id: "36",
        opcion: "A",
        PB: 2
    },
    {
        id: "36",
        opcion: "B",
        PB: 1
    },
    {
        id: "60",
        opcion: "B",
        PB: 1
    },
    {
        id: "60",
        opcion: "C",
        PB: 2
    },
    {
        id: "61",
        opcion: "B",
        PB: 1
    },
    {
        id: "61",
        opcion: "C",
        PB: 2
    },
    {
        id: "85",
        opcion: "B",
        PB: 1
    },
    {
        id: "85",
        opcion: "C",
        PB: 2
    },
    {
        id: "86",
        opcion: "B",
        PB: 1
    },
    {
        id: "86",
        opcion: "C",
        PB: 2
    },
    {
        id: "110",
        opcion: "A",
        PB: 2
    },
    {
        id: "110",
        opcion: "B",
        PB: 1
    },
    {
        id: "111",
        opcion: "A",
        PB: 2
    },
    {
        id: "111",
        opcion: "B",
        PB: 1
    },
    {
        id: "135",
        opcion: "A",
        PB: 2
    },
    {
        id: "135",
        opcion: "B",
        PB: 1
    },
    {
        id: "136",
        opcion: "A",
        PB: 2
    },
    {
        id: "136",
        opcion: "B",
        PB: 1
    },
    {
        id: "161",
        opcion: "B",
        PB: 1
    },
    {
        id: "161",
        opcion: "C",
        PB: 2
    }
];
let factorL = [
    {
        id: "13",
        opcion: "B",
        PB: 1
    },
    {
        id: "13",
        opcion: "C",
        PB: 2
    },
    {
        id: "38",
        opcion: "A",
        PB: 2
    },
    {
        id: "38",
        opcion: "B",
        PB: 1
    },
    {
        id: "63",
        opcion: "B",
        PB: 1
    },
    {
        id: "63",
        opcion: "C",
        PB: 2
    },
    {
        id: "64",
        opcion: "B",
        PB: 1
    },
    {
        id: "64",
        opcion: "C",
        PB: 2
    },
    {
        id: "88",
        opcion: "A",
        PB: 2
    },
    {
        id: "88",
        opcion: "B",
        PB: 1
    },
    {
        id: "89",
        opcion: "B",
        PB: 1
    },
    {
        id: "89",
        opcion: "C",
        PB: 2
    },
    {
        id: "113",
        opcion: "A",
        PB: 2
    },
    {
        id: "113",
        opcion: "B",
        PB: 1
    },
    {
        id: "114",
        opcion: "A",
        PB: 2
    },
    {
        id: "114",
        opcion: "B",
        PB: 1
    },
    {
        id: "139",
        opcion: "B",
        PB: 1
    },
    {
        id: "139",
        opcion: "C",
        PB: 2
    },
    {
        id: "164",
        opcion: "A",
        PB: 2
    },
    {
        id: "164",
        opcion: "B",
        PB: 1
    }
];

let factorQ1 = [
    {
        id: "20",
        opcion: "A",
        PB: 2
    },
    {
        id: "20",
        opcion: "B",
        PB: 1
    },
    {
        id: "21",
        opcion: "B",
        PB: 1
    },
    {
        id: "21",
        opcion: "C",
        PB: 2
    },
    {
        id: "45",
        opcion: "B",
        PB: 1
    },
    {
        id: "45",
        opcion: "C",
        PB: 2
    },
    {
        id: "46",
        opcion: "A",
        PB: 2
    },
    {
        id: "46",
        opcion: "B",
        PB: 1
    },
    {
        id: "70",
        opcion: "A",
        PB: 2
    },
    {
        id: "70",
        opcion: "B",
        PB: 1
    },
    {
        id: "95",
        opcion: "B",
        PB: 1
    },
    {
        id: "95",
        opcion: "C",
        PB: 2
    },
    {
        id: "120",
        opcion: "B",
        PB: 1
    },
    {
        id: "120",
        opcion: "C",
        PB: 2
    },
    {
        id: "145",
        opcion: "A",
        PB: 2
    },
    {
        id: "145",
        opcion: "B",
        PB: 1
    },
    {
        id: "169",
        opcion: "A",
        PB: 2
    },
    {
        id: "169",
        opcion: "B",
        PB: 1
    },
    {
        id: "170",
        opcion: "B",
        PB: 1
    },
    {
        id: "170",
        opcion: "C",
        PB: 2
    }
];
let factorQ3 = [
    {
        id: "23",
        opcion: "B",
        PB: 1
    },
    {
        id: "23",
        opcion: "C",
        PB: 2
    },
    {
        id: "24",
        opcion: "B",
        PB: 1
    },
    {
        id: "24",
        opcion: "C",
        PB: 2
    },
    {
        id: "48",
        opcion: "A",
        PB: 2
    },
    {
        id: "48",
        opcion: "B",
        PB: 1
    },
    {
        id: "73",
        opcion: "A",
        PB: 2
    },
    {
        id: "73",
        opcion: "B",
        PB: 1
    },
    {
        id: "98",
        opcion: "A",
        PB: 2
    },
    {
        id: "98",
        opcion: "B",
        PB: 1
    },
    {
        id: "123",
        opcion: "B",
        PB: 1
    },
    {
        id: "123",
        opcion: "C",
        PB: 2
    },
    {
        id: "147",
        opcion: "B",
        PB: 1
    },
    {
        id: "147",
        opcion: "C",
        PB: 2
    },
    {
        id: "148",
        opcion: "A",
        PB: 2
    },
    {
        id: "148",
        opcion: "B",
        PB: 1
    },
    {
        id: "172",
        opcion: "B",
        PB: 1
    },
    {
        id: "172",
        opcion: "C",
        PB: 2
    },
    {
        id: "173",
        opcion: "A",
        PB: 2
    },
    {
        id: "173",
        opcion: "B",
        PB: 1
    }
];
let factorB = [
    {
        id: "28",
        opcion: "B",
        PB: 1
    },
    {
        id: "53",
        opcion: "B",
        PB: 1
    },
    {
        id: "54",
        opcion: "B",
        PB: 1
    },
    {
        id: "77",
        opcion: "C",
        PB: 1
    },
    {
        id: "78",
        opcion: "B",
        PB: 1
    },
    {
        id: "102",
        opcion: "B",
        PB: 1
    },
    {
        id: "103",
        opcion: "B",
        PB: 1
    },
    {
        id: "127",
        opcion: "C",
        PB: 1
    },
    {
        id: "128",
        opcion: "B",
        PB: 1
    },
    {
        id: "152",
        opcion: "A",
        PB: 1
    },
    {
        id: "153",
        opcion: "C",
        PB: 1
    },
    {
        id: "177",
        opcion: "A",
        PB: 1
    },
    {
        id: "178",
        opcion: "A",
        PB: 1
    }
];

let factorE = [
    {
        id: "6",
        opcion: "B",
        PB: 1
    },
    {
        id: "6",
        opcion: "C",
        PB: 2
    },
    {
        id: "7",
        opcion: "A",
        PB: 2
    },
    {
        id: "7",
        opcion: "B",
        PB: 1
    },
    {
        id: "31",
        opcion: "B",
        PB: 1
    },
    {
        id: "31",
        opcion: "C",
        PB: 2
    },
    {
        id: "32",
        opcion: "B",
        PB: 1
    },
    {
        id: "32",
        opcion: "C",
        PB: 2
    },
    {
        id: "56",
        opcion: "A",
        PB: 2
    },
    {
        id: "56",
        opcion: "B",
        PB: 1
    },
    {
        id: "57",
        opcion: "B",
        PB: 1
    },
    {
        id: "57",
        opcion: "C",
        PB: 2
    },
    {
        id: "81",
        opcion: "B",
        PB: 1
    },
    {
        id: "81",
        opcion: "C",
        PB: 2
    },
    {
        id: "106",
        opcion: "B",
        PB: 1
    },
    {
        id: "106",
        opcion: "C",
        PB: 2
    },
    {
        id: "131",
        opcion: "A",
        PB: 2
    },
    {
        id: "131",
        opcion: "B",
        PB: 1
    },
    {
        id: "155",
        opcion: "A",
        PB: 2
    },
    {
        id: "155",
        opcion: "B",
        PB: 1
    },
    {
        id: "156",
        opcion: "A",
        PB: 2
    },
    {
        id: "156",
        opcion: "B",
        PB: 1
    },
    {
        id: "180",
        opcion: "A",
        PB: 2
    },
    {
        id: "180",
        opcion: "B",
        PB: 1
    },
    {
        id: "181",
        opcion: "A",
        PB: 2
    },
    {
        id: "181",
        opcion: "B",
        PB: 1
    }
];

let factorG = [
    {
        id: "9",
        opcion: "B",
        PB: 1
    },
    {
        id: "9",
        opcion: "C",
        PB: 2
    },
    {
        id: "34",
        opcion: "B",
        PB: 1
    },
    {
        id: "34",
        opcion: "C",
        PB: 2
    },
    {
        id: "59",
        opcion: "B",
        PB: 1
    },
    {
        id: "59",
        opcion: "C",
        PB: 2
    },
    {
        id: "84",
        opcion: "B",
        PB: 1
    },
    {
        id: "84",
        opcion: "C",
        PB: 2
    },
    {
        id: "109",
        opcion: "A",
        PB: 2
    },
    {
        id: "109",
        opcion: "B",
        PB: 1
    },
    {
        id: "134",
        opcion: "A",
        PB: 2
    },
    {
        id: "134",
        opcion: "B",
        PB: 1
    },
    {
        id: "159",
        opcion: "B",
        PB: 1
    },
    {
        id: "159",
        opcion: "C",
        PB: 2
    },
    {
        id: "160",
        opcion: "A",
        PB: 2
    },
    {
        id: "160",
        opcion: "B",
        PB: 1
    },
    {
        id: "184",
        opcion: "A",
        PB: 2
    },
    {
        id: "184",
        opcion: "B",
        PB: 1
    },
    {
        id: "185",
        opcion: "A",
        PB: 2
    },
    {
        id: "185",
        opcion: "B",
        PB: 1
    }
];

let factorI = [
    {
        id: "11",
        opcion: "B",
        PB: 1
    },
    {
        id: "11",
        opcion: "C",
        PB: 2
    },
    {
        id: "12",
        opcion: "A",
        PB: 2
    },
    {
        id: "12",
        opcion: "B",
        PB: 1
    },
    {
        id: "37",
        opcion: "A",
        PB: 2
    },
    {
        id: "37",
        opcion: "B",
        PB: 1
    },
    {
        id: "62",
        opcion: "B",
        PB: 1
    },
    {
        id: "62",
        opcion: "C",
        PB: 2
    },
    {
        id: "87",
        opcion: "B",
        PB: 1
    },
    {
        id: "87",
        opcion: "C",
        PB: 2
    },
    {
        id: "112",
        opcion: "A",
        PB: 2
    },
    {
        id: "112",
        opcion: "B",
        PB: 1
    },
    {
        id: "137",
        opcion: "B",
        PB: 1
    },
    {
        id: "137",
        opcion: "C",
        PB: 2
    },
    {
        id: "138",
        opcion: "A",
        PB: 2
    },
    {
        id: "138",
        opcion: "B",
        PB: 1
    },
    {
        id: "162",
        opcion: "B",
        PB: 1
    },
    {
        id: "162",
        opcion: "C",
        PB: 2
    },
    {
        id: "163",
        opcion: "A",
        PB: 2
    },
    {
        id: "163",
        opcion: "B",
        PB: 1
    }
];

let factorM = [
    {
        id: "14",
        opcion: "B",
        PB: 1
    },
    {
        id: "14",
        opcion: "C",
        PB: 2
    },
    {
        id: "15",
        opcion: "B",
        PB: 1
    },
    {
        id: "15",
        opcion: "C",
        PB: 2
    },
    {
        id: "39",
        opcion: "A",
        PB: 2
    },
    {
        id: "39",
        opcion: "B",
        PB: 1
    },
    {
        id: "40",
        opcion: "A",
        PB: 2
    },
    {
        id: "40",
        opcion: "B",
        PB: 1
    },
    {
        id: "65",
        opcion: "A",
        PB: 1
    },
    {
        id: "65",
        opcion: "B",
        PB: 2
    },
    {
        id: "90",
        opcion: "B",
        PB: 1
    },
    {
        id: "90",
        opcion: "C",
        PB: 2
    },
    {
        id: "91",
        opcion: "A",
        PB: 2
    },
    {
        id: "91",
        opcion: "B",
        PB: 1
    },
    {
        id: "115",
        opcion: "A",
        PB: 2
    },
    {
        id: "115",
        opcion: "B",
        PB: 1
    },
    {
        id: "116",
        opcion: "A",
        PB: 2
    },
    {
        id: "116",
        opcion: "B",
        PB: 1
    },
    {
        id: "140",
        opcion: "A",
        PB: 2
    },
    {
        id: "140",
        opcion: "B",
        PB: 1
    },
    {
        id: "141",
        opcion: "B",
        PB: 1
    },
    {
        id: "141",
        opcion: "C",
        PB: 2
    },
    {
        id: "165",
        opcion: "B",
        PB: 1
    },
    {
        id: "165",
        opcion: "C",
        PB: 2
    },
    {
        id: "166",
        opcion: "B",
        PB: 1
    },
    {
        id: "166",
        opcion: "C",
        PB: 2
    }
];
let factorO = [
    {
        id: "18",
        opcion: "A",
        PB: 2
    },
    {
        id: "18",
        opcion: "B",
        PB: 1
    },
    {
        id: "19",
        opcion: "B",
        PB: 1
    },
    {
        id: "19",
        opcion: "C",
        PB: 2
    },
    {
        id: "43",
        opcion: "A",
        PB: 2
    },
    {
        id: "43",
        opcion: "B",
        PB: 1
    },
    {
        id: "44",
        opcion: "B",
        PB: 1
    },
    {
        id: "44",
        opcion: "C",
        PB: 2
    },
    {
        id: "68",
        opcion: "B",
        PB: 1
    },
    {
        id: "68",
        opcion: "C",
        PB: 2
    },
    {
        id: "69",
        opcion: "A",
        PB: 2
    },
    {
        id: "69",
        opcion: "B",
        PB: 1
    },
    {
        id: "93",
        opcion: "B",
        PB: 1
    },
    {
        id: "93",
        opcion: "C",
        PB: 2
    },
    {
        id: "94",
        opcion: "A",
        PB: 2
    },
    {
        id: "94",
        opcion: "B",
        PB: 1
    },
    {
        id: "118",
        opcion: "A",
        PB: 2
    },
    {
        id: "118",
        opcion: "B",
        PB: 1
    },
    {
        id: "119",
        opcion: "A",
        PB: 2
    },
    {
        id: "119",
        opcion: "B",
        PB: 1
    },
    {
        id: "143",
        opcion: "A",
        PB: 2
    },
    {
        id: "143",
        opcion: "B",
        PB: 1
    },
    {
        id: "144",
        opcion: "B",
        PB: 1
    },
    {
        id: "144",
        opcion: "C",
        PB: 2
    },
    {
        id: "168",
        opcion: "B",
        PB: 1
    },
    {
        id: "168",
        opcion: "C",
        PB: 2
    }
];
let factorQ2 = [
    {
        id: "22",
        opcion: "B",
        PB: 1
    },
    {
        id: "22",
        opcion: "C",
        PB: 2
    },
    {
        id: "47",
        opcion: "A",
        PB: 2
    },
    {
        id: "47",
        opcion: "B",
        PB: 1
    },
    {
        id: "71",
        opcion: "A",
        PB: 2
    },
    {
        id: "71",
        opcion: "B",
        PB: 1
    },
    {
        id: "72",
        opcion: "A",
        PB: 2
    },
    {
        id: "72",
        opcion: "B",
        PB: 1
    },
    {
        id: "96",
        opcion: "B",
        PB: 1
    },
    {
        id: "96",
        opcion: "C",
        PB: 2
    },
    {
        id: "97",
        opcion: "B",
        PB: 1
    },
    {
        id: "97",
        opcion: "C",
        PB: 2
    },
    {
        id: "121",
        opcion: "B",
        PB: 1
    },
    {
        id: "121",
        opcion: "C",
        PB: 2
    },
    {
        id: "122",
        opcion: "B",
        PB: 1
    },
    {
        id: "122",
        opcion: "C",
        PB: 2
    },
    {
        id: "146",
        opcion: "A",
        PB: 2
    },
    {
        id: "146",
        opcion: "B",
        PB: 1
    },
    {
        id: "171",
        opcion: "A",
        PB: 2
    },
    {
        id: "171",
        opcion: "B",
        PB: 1
    }
];
let factorQ4 = [
    {
        id: "25",
        opcion: "B",
        PB: 1
    },
    {
        id: "25",
        opcion: "C",
        PB: 2
    },
    {
        id: "49",
        opcion: "A",
        PB: 2
    },
    {
        id: "49",
        opcion: "B",
        PB: 1
    },
    {
        id: "50",
        opcion: "A",
        PB: 2
    },
    {
        id: "50",
        opcion: "B",
        PB: 1
    },
    {
        id: "74",
        opcion: "A",
        PB: 2
    },
    {
        id: "74",
        opcion: "B",
        PB: 1
    },
    {
        id: "75",
        opcion: "B",
        PB: 1
    },
    {
        id: "75",
        opcion: "C",
        PB: 2
    },
    {
        id: "99",
        opcion: "A",
        PB: 2
    },
    {
        id: "99",
        opcion: "B",
        PB: 1
    },
    {
        id: "100",
        opcion: "A",
        PB: 1
    },
    {
        id: "100",
        opcion: "B",
        PB: 2
    },
    {
        id: "124",
        opcion: "A",
        PB: 2
    },
    {
        id: "124",
        opcion: "B",
        PB: 1
    },
    {
        id: "125",
        opcion: "B",
        PB: 1
    },
    {
        id: "125",
        opcion: "C",
        PB: 2
    },
    {
        id: "149",
        opcion: "A",
        PB: 2
    },
    {
        id: "149",
        opcion: "B",
        PB: 1
    },
    {
        id: "150",
        opcion: "B",
        PB: 1
    },
    {
        id: "150",
        opcion: "C",
        PB: 2
    },
    {
        id: "174",
        opcion: "A",
        PB: 2
    },
    {
        id: "174",
        opcion: "B",
        PB: 1
    },
    {
        id: "175",
        opcion: "B",
        PB: 1
    },
    {
        id: "175",
        opcion: "C",
        PB: 2
    }
];

let factorN = [
    {
        id: "16",
        opcion: "B",
        PB: 1
    },
    {
        id: "16",
        opcion: "C",
        PB: 2
    },
    {
        id: "17",
        opcion: "A",
        PB: 2
    },
    {
        id: "17",
        opcion: "B",
        PB: 1
    },
    {
        id: "41",
        opcion: "B",
        PB: 1
    },
    {
        id: "41",
        opcion: "C",
        PB: 2
    },
    {
        id: "42",
        opcion: "A",
        PB: 2
    },
    {
        id: "42",
        opcion: "B",
        PB: 1
    },
    {
        id: "66",
        opcion: "B",
        PB: 1
    },
    {
        id: "66",
        opcion: "C",
        PB: 2
    },
    {
        id: "67",
        opcion: "B",
        PB: 1
    },
    {
        id: "67",
        opcion: "C",
        PB: 2
    },
    {
        id: "92",
        opcion: "B",
        PB: 1
    },
    {
        id: "92",
        opcion: "C",
        PB: 2
    },
    {
        id: "117",
        opcion: "A",
        PB: 2
    },
    {
        id: "117",
        opcion: "B",
        PB: 1
    },
    {
        id: "142",
        opcion: "A",
        PB: 2
    },
    {
        id: "142",
        opcion: "B",
        PB: 1
    },
    {
        id: "167",
        opcion: "A",
        PB: 2
    },
    {
        id: "157",
        opcion: "B",
        PB: 1
    }
];

var respuestas = new Array(185, 2);
var factoresConvertidos = new Array(16);
let question_count = 0;
let points = 0;
let factorA_PB = 0;
let factorB_PB = 0;
let factorC_PB = 0;
let factorE_PB = 0;
let factorF_PB = 0;
let factorG_PB = 0;
let factorH_PB = 0;
let factorI_PB = 0;
let factorL_PB = 0;
let factorM_PB = 0;
let factorN_PB = 0
let factorO_PB = 0;
let factorQ1_PB = 0;
let factorQ2_PB = 0;
let factorQ3_PB = 0;
let factorQ4_PB = 0;
let factorA_Convert_PB = 0;
let factorB_Convert_PB = 0;
let factorC_Convert_PB = 0;
let factorE_Convert_PB = 0;
let factorF_Convert_PB = 0;
let factorG_Convert_PB = 0;
let factorH_Convert_PB = 0;
let factorI_Convert_PB = 0;
let factorL_Convert_PB = 0;
let factorM_Convert_PB = 0;
let factorN_Convert_PB = 0
let factorO_Convert_PB = 0;
let factorQ1_Convert_PB = 0;
let factorQ2_Convert_PB = 0;
let factorQ3_Convert_PB = 0;
let factorQ4_Convert_PB = 0;
var sexo = "M";
window.onload = function () {
    
    show(question_count);
 
};
$(document).ready(function () {
    $('#btnTerminar').hide();
   
});

function next() {
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
    }
    console.log(question_count);

    for (var i = 0; i < 185; i++) {
        respuestas[i, 0] = i + 1;
    }

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    respuestas[question_count, 0] = question_count + 1; //numero de respuesta
    respuestas[question_count, 1] = user_answer[0].toString(); //Opcion seleccionada
    console.log(user_answer);
    console.log(user_answer[0]);
    console.log("Longitud: " + respuestas.length + " : " + factorA.length);

    factorA_PB = totalPuntajeBruto(factorA, respuestas, question_count, factorA_PB);
    factorB_PB = totalPuntajeBruto(factorB, respuestas, question_count, factorB_PB);
    factorC_PB = totalPuntajeBruto(factorC, respuestas, question_count, factorC_PB);
    factorE_PB = totalPuntajeBruto(factorE, respuestas, question_count, factorE_PB);
    factorF_PB = totalPuntajeBruto(factorF, respuestas, question_count, factorF_PB);
    factorG_PB = totalPuntajeBruto(factorG, respuestas, question_count, factorG_PB);
    factorH_PB = totalPuntajeBruto(factorH, respuestas, question_count, factorH_PB);
    factorI_PB = totalPuntajeBruto(factorI, respuestas, question_count, factorI_PB);
    factorL_PB = totalPuntajeBruto(factorL, respuestas, question_count, factorL_PB);
    factorM_PB = totalPuntajeBruto(factorM, respuestas, question_count, factorM_PB);
    factorN_PB = totalPuntajeBruto(factorN, respuestas, question_count, factorN_PB);
    factorO_PB = totalPuntajeBruto(factorO, respuestas, question_count, factorO_PB);
    factorQ1_PB = totalPuntajeBruto(factorQ1, respuestas, question_count, factorQ1_PB);
    factorQ2_PB = totalPuntajeBruto(factorQ2, respuestas, question_count, factorQ2_PB);
    factorQ3_PB = totalPuntajeBruto(factorQ3, respuestas, question_count, factorQ3_PB);
    factorQ4_PB = totalPuntajeBruto(factorQ4, respuestas, question_count, factorQ4_PB);
    //
    factorA_Convert_PB = conversionPuntajeBrutoSexo(factorA_HombresConversion, factorA_MujeresConversion, factorA_PB, matrizResultados, sexo, factorA_Convert_PB);
    factorB_Convert_PB = conversionPuntajeBrutoSexo(factorB_HombresConversion, factorB_MujeresConversion, factorB_PB, matrizResultados, sexo, factorB_Convert_PB);
    factorC_Convert_PB = conversionPuntajeBrutoSexo(factorC_HombresConversion, factorC_MujeresConversion, factorC_PB, matrizResultados, sexo, factorC_Convert_PB);
    factorE_Convert_PB = conversionPuntajeBrutoSexo(factorE_HombresConversion, factorE_MujeresConversion, factorE_PB, matrizResultados, sexo, factorE_Convert_PB);
    factorF_Convert_PB = conversionPuntajeBrutoSexo(factorF_HombresConversion, factorF_MujeresConversion, factorF_PB, matrizResultados, sexo, factorF_Convert_PB);
    factorG_Convert_PB = conversionPuntajeBrutoSexo(factorG_HombresConversion, factorG_MujeresConversion, factorG_PB, matrizResultados, sexo, factorG_Convert_PB);
    factorH_Convert_PB = conversionPuntajeBrutoSexo(factorH_HombresConversion, factorH_MujeresConversion, factorH_PB, matrizResultados, sexo, factorH_Convert_PB);
    factorI_Convert_PB = conversionPuntajeBrutoSexo(factorI_HombresConversion, factorI_MujeresConversion, factorI_PB, matrizResultados, sexo, factorI_Convert_PB);
    factorL_Convert_PB = conversionPuntajeBrutoSexo(factorL_HombresConversion, factorL_MujeresConversion, factorL_PB, matrizResultados, sexo, factorL_Convert_PB);
    factorM_Convert_PB = conversionPuntajeBrutoSexo(factorM_HombresConversion, factorM_MujeresConversion, factorM_PB, matrizResultados, sexo, factorM_Convert_PB);
    factorN_Convert_PB = conversionPuntajeBrutoSexo(factorN_HombresConversion, factorN_MujeresConversion, factorN_PB, matrizResultados, sexo, factorN_Convert_PB);
    factorO_Convert_PB = conversionPuntajeBrutoSexo(factorO_HombresConversion, factorO_MujeresConversion, factorO_PB, matrizResultados, sexo, factorO_Convert_PB);
    factorQ1_Convert_PB = conversionPuntajeBrutoSexo(factorQ1_HombresConversion, factorQ1_MujeresConversion, factorQ1_PB, matrizResultados, sexo, factorQ1_Convert_PB);
    factorQ2_Convert_PB = conversionPuntajeBrutoSexo(factorQ2_HombresConversion, factorQ2_MujeresConversion, factorQ2_PB, matrizResultados, sexo, factorQ2_Convert_PB);
    factorQ3_Convert_PB = conversionPuntajeBrutoSexo(factorQ3_HombresConversion, factorQ3_MujeresConversion, factorQ3_PB, matrizResultados, sexo, factorQ3_Convert_PB);
    factorQ4_Convert_PB = conversionPuntajeBrutoSexo(factorQ4_HombresConversion, factorQ4_MujeresConversion, factorQ4_PB, matrizResultados, sexo, factorQ4_Convert_PB);
    sessionStorage.setItem("factorA_PB", factorA_PB);

    function totalPuntajeBruto(factor, respuestas, question_count, factor_PB) {
        for (var j = 0; j < factor.length; j++) {
            if ((respuestas[question_count, 0] == factor[j].id) && (respuestas[question_count, 1] === factor[j].opcion)) {
                factor_PB += factor[j].PB;
            }
        }
        return factor_PB;
    }



    function conversionPuntajeBrutoSexo(matrizConversionHombres, matrizConversionMujeres, factor_PB, matrizResultados, sexo, factorConvert_PB) {
        if (sexo == "M") {
            for (var j = 0; j < matrizConversionHombres.length; j++) {
                if (factor_PB >= matrizConversionHombres[j][0] && factor_PB <= matrizConversionHombres[j][1]) {
                    factorConvert_PB = matrizResultados[j];
                }
            }
        } if (sexo == "F") {
            for (var j = 0; j < matrizConversionMujeres.length; j++) {
                if (factor_PB >= matrizConversionMujeres[j][0] && factor_PB <= matrizConversionMujeres[j][1]) {
                    factorConvert_PB = matrizResultados[j];
                }
            }
        }
        return factorConvert_PB;
    }
    console.log("BRUTOS");
    console.log("Valor del factor A: " + factorA_PB);
    console.log("Valor del factor B: " + factorB_PB);
    console.log("Valor del factor C: " + factorC_PB);
    console.log("Valor del factor E: " + factorE_PB);
    console.log("Valor del factor F: " + factorF_PB);
    console.log("Valor del factor G: " + factorG_PB);
    console.log("Valor del factor H: " + factorH_PB);
    console.log("Valor del factor I: " + factorI_PB);
    console.log("Valor del factor L: " + factorL_PB);
    console.log("Valor del factor M: " + factorM_PB);
    console.log("Valor del factor N: " + factorN_PB);
    console.log("Valor del factor O: " + factorO_PB);
    console.log("Valor del factor Q1: " + factorQ1_PB);
    console.log("Valor del factor Q2: " + factorQ2_PB);
    console.log("Valor del factor Q3: " + factorQ3_PB);
    console.log("Valor del factor Q4: " + factorQ4_PB);


    console.log("CONVERTIDOS");
    console.log("Valor del factor A: " + factorA_Convert_PB);
    console.log("Valor del factor B: " + factorB_Convert_PB);
    console.log("Valor del factor C: " + factorC_Convert_PB);
    console.log("Valor del factor E: " + factorE_Convert_PB);
    console.log("Valor del factor F: " + factorF_Convert_PB);
    console.log("Valor del factor G: " + factorG_Convert_PB);
    console.log("Valor del factor H: " + factorH_Convert_PB);
    console.log("Valor del factor I: " + factorI_Convert_PB);
    console.log("Valor del factor L: " + factorL_Convert_PB);
    console.log("Valor del factor M: " + factorM_Convert_PB);
    console.log("Valor del factor N: " + factorN_Convert_PB);
    console.log("Valor del factor O: " + factorO_Convert_PB);
    console.log("Valor del factor Q1: " + factorQ1_Convert_PB);
    console.log("Valor del factor Q2: " + factorQ2_Convert_PB);
    console.log("Valor del factor Q3: " + factorQ3_Convert_PB);
    console.log("Valor del factor Q4: " + factorQ4_Convert_PB);


    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);

    if(question_count==184){
        $("#btnTerminar").attr('disabled', false);
        $('#btnTerminar').show();
        $('#btnSiguiente').hide();
    }
}

function show(count) {
    $("#leyendaIndice").html('Pregunta ' + (count + 1) + ' de 185');
    let question = document.getElementById("questions");
    question.innerHTML = `
  
  <p>${questions[count].enunciado}</p>

   <ul class="option_group">
  <li class="option" value="A" id="A" >${questions[count].opcionA}</li>
  <li class="option" value="B" id="B">${questions[count].opcionB}</li>
  <li class="option" value="C" id="C">${questions[count].opcionC}</li>
</ul> 

  `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
    $("#btnTerminar").attr('disabled', false);

}
