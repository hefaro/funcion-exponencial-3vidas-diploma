// ==========================================
// 1. BANCO BÁSICO (ÁLGEBRA BÁSICA)
// ==========================================
const bancoBasicoRaw = [
    { pregunta: "¿Cuál es el resultado de reducir los términos semejantes: 3x + 5x - 2x?", correcta: "6x", distractoras: ["10x", "6x²", "4x"] },
    { pregunta: "Si x = 3, ¿cuál es el valor numérico de 2x + 4?", correcta: "10", distractoras: ["9", "14", "6"] },
    { pregunta: "¿Cuál es el coeficiente numérico del término -7x²y?", correcta: "-7", distractoras: ["7", "2", "-2"] },
    { pregunta: "¿Qué nombre recibe una expresión algebraica que consta de un solo término?", correcta: "Monomio", distractoras: ["Binomio", "Trinomio", "Polinomio"] },
    { pregunta: "Al multiplicar x³ · x², ¿cuál es el resultado?", correcta: "x⁵", distractoras: ["x⁶", "2x⁵", "x"] },
    { pregunta: "¿Cuál es el resultado de la suma: (2a + 3b) + (5a - b)?", correcta: "7a + 2b", distractoras: ["10a - 3b", "7a + 4b", "8ab"] },
    { pregunta: "¿Cuál es el grado absoluto del monomio 4x³y²?", correcta: "5", distractoras: ["3", "2", "6"] },
    { pregunta: "¿Cuál es el valor numérico de a² cuando a = -4?", correcta: "16", distractoras: ["-16", "-8", "8"] },
    { pregunta: "Al dividir x⁸ / x², ¿cuál es el exponente resultante?", correcta: "x⁶", distractoras: ["x⁴", "x¹⁰", "x¹⁶"] },
    { pregunta: "¿Qué expresión representa 'el triple de un número aumentado en 5'?", correcta: "3x + 5", distractoras: ["x³ + 5", "3(x + 5)", "5x + 3"] },
    { pregunta: "Simplifica la expresión: 4m - 9m", correcta: "-5m", distractoras: ["5m", "-13m", "13m"] },
    { pregunta: "¿Cuál es el resultado de (a²)(a³)(a)?", correcta: "a⁶", distractoras: ["a⁵", "a⁹", "3a⁶"] },
    { pregunta: "Dos términos son semejantes cuando tienen:", correcta: "La misma parte literal y mismos exponentes", distractoras: ["El mismo coeficiente", "El mismo signo", "Los mismos números"] },
    { pregunta: "¿Cuál es el resultado de evaluar 5 - x cuando x = -2?", correcta: "7", distractoras: ["3", "-7", "-3"] },
    { pregunta: "Si restamos (3x) de (8x), obtenemos:", correcta: "5x", distractoras: ["-5x", "11x", "-11x"] },
    { pregunta: "¿Cuál es el resultado de 0 · (4x² - 2x + 1)?", correcta: "0", distractoras: ["4x² - 2x + 1", "1", "x"] },
    { pregunta: "¿Cómo se llama una expresión algebraica de tres términos?", correcta: "Trinomio", distractoras: ["Monomio", "Binomio", "Cuatrinomio"] },
    { pregunta: "Al elevar (2x)³, ¿cuál es el resultado?", correcta: "8x³", distractoras: ["6x³", "2x³", "8x"] },
    { pregunta: "Identifica la parte literal en el término -12ab²:", correcta: "ab²", distractoras: ["-12", "12", "a²b"] },
    { pregunta: "Reduce la expresión: y + y + y", correcta: "3y", distractoras: ["y³", "3 + y", "y/3"] }
];

// ==========================================
// 2. BANCO INTERMEDIO (FUNCIÓN EXPONENCIAL)
// ==========================================
const bancoIntermedioRaw = [
    { pregunta: "Si $f(x) = 2^x$, ¿cuál es el valor de $f(4)$?", correcta: "16", distractoras: ["8", "32", "64"] },
    { pregunta: "En la función exponencial $g(x) = 3^x$, el punto de corte con el eje Y es:", correcta: "(0, 1)", distractoras: ["(0, 3)", "(1, 0)", "(0, 0)"] },
    { pregunta: "Al simplificar la expresión exponencial $e^x \\cdot e^3$, obtenemos:", correcta: "$e^{x + 3}$", distractoras: ["$e^{3x}$", "$e^{x - 3}$", "$3e^x$"] },
    { pregunta: "Dada la función $f(x) = (0.5)^x$, ¿cuál es su comportamiento gráfico?", correcta: "Es una función estrictamente decreciente", distractoras: ["Es una función strictly creciente", "Es una recta horizontal", "Atraviesa el eje X"] },
    { pregunta: "¿Cuál es la solución de la ecuación exponencial $2^x = 32$?", correcta: "x = 5", distractoras: ["x = 4", "x = 16", "x = 6"] },
    { pregunta: "Al evaluar $f(x) = 5^x$ en $x = -2$, se obtiene:", correcta: "1 / 25", distractoras: ["-25", "-10", "25"] },
    { pregunta: "Simplifica la potencia de una potencia $(3^x)^2$:", correcta: "$3^{2x}$", distractoras: ["$3^{x + 2}$", "$9^{2x}$", "$3^{x^2}$"] },
    { pregunta: "¿Cuál es la asíntota horizontal de la función $f(x) = 4^x$?", correcta: "y = 0", distractoras: ["x = 0", "y = 1", "y = 4"] },
    { pregunta: "Resuelve la ecuación exponencial $3^{2x - 1} = 27$:", correcta: "x = 2", distractoras: ["x = 1", "x = 3", "x = 4"] },
    { pregunta: "En el modelo de crecimiento $P(t) = 100 \\cdot 2^t$, ¿cuál es la población inicial ($t = 0$)?", correcta: "100", distractoras: ["200", "0", "1002"] },
    { pregunta: "¿Cuál es el resultado de dividir $5^x / 5^2$?", correcta: "$5^{x - 2}$", distractoras: ["$5^{x / 2}$", "$1^{x - 2}$", "$5^{2 - x}$"] },
    { pregunta: "Si la base 'a' de una función $f(x) = a^x$ cumple que $a > 1$, la función es:", correcta: "Creciente", distractoras: ["Decreciente", "Constante", "Negativa"] },
    { pregunta: "Al expresar $\\sqrt{2^x}$ en forma exponente fraccionario se obtiene:", correcta: "$2^{x/2}$", distractoras: ["$2^{2x}$", "$2^{x - 2}$", "$4^x$"] },
    { pregunta: "En la función $f(x) = 2 \\cdot 3^x$, ¿cuál es el corte con el eje Y?", correcta: "(0, 2)", distractoras: ["(0, 3)", "(0, 6)", "(0, 1)"] },
    { pregunta: "Resuelve para $x$: $4^x = 1/16$", correcta: "x = -2", distractoras: ["x = 2", "x = -4", "x = 1/4"] },
    { pregunta: "Al aplicar la propiedad del producto $(2^x)(4^x)$, expresado en base 2 equivale a:", correcta: "$2^{3x}$", distractoras: ["$8^{2x}$", "$2^{2x}$", "$6^x$"] },
    { pregunta: "Si $f(x) = 10^x$, ¿cuál es el valor de $f(-1)$?", correcta: "0.1", distractoras: ["-10", "-0.1", "1"] },
    { pregunta: "¿Por qué la base $a$ de una función exponencial no puede ser negativa en los reales?", correcta: "Porque genera valores no reales al elevar a exponentes fraccionarios pares", distractoras: ["Porque la función se vuelve cero", "Porque siempre daría positivos", "Porque los exponentes no son negativos"] },
    { pregunta: "Resuelve la ecuación $e^{x+1} = e^5$:", correcta: "x = 4", distractoras: ["x = 5", "x = 6", "x = 1"] },
    { pregunta: "Una sustancia se desintegra según $N(t) = N_0 \\cdot (1/2)^t$. Al cabo de 3 periodos ($t = 3$), ¿qué fracción queda?", correcta: "1 / 8", distractoras: ["1 / 6", "1 / 4", "1 / 2"] }
];

// ==========================================
// 3. BANCO AVANZADO (DETECCIONAL DE ERROR EN PASOS)
// ==========================================
const bancoAvanzadoRaw = [
    {
        pregunta: "Un estudiante analiza el crecimiento $f(x) = 3^x$. Para $x = 2 + 3$, aplica $3^{2+3} = 3^2 + 3^3 = 36$.",
        correcta: "El error está en aplicar la propiedad: se debió multiplicar $3^2 \\cdot 3^3 = 243$.",
        distractoras: ["El procedimiento es correcto.", "El error está en el cálculo: $3^2=6$ y $3^3=9$.", "La variable no se puede sustituir por una suma."]
    },
    {
        pregunta: "Para simplificar $(2^3)^4$, un alumno escribe $2^{3+4} = 2^7 = 128$.",
        correcta: "El error está en sumar exponentes: debió multiplicarlos, $(2^3)^4 = 2^{12} = 4096$.",
        distractoras: ["El procedimiento es totalmente correcto.", "El error es que $2^7 = 14$.", "Falta multiplicar por la base."]
    },
    {
        pregunta: "En la ecuación $5^{2x - 1} = 125$, el estudiante despeja: $2x - 1 = 3 \\implies 2x = 2 \\implies x = 1$.",
        correcta: "El error está en el despeje: el -1 pasa a sumar, dando $2x = 4 \\implies x = 2$.",
        distractoras: ["El procedimiento es correcto y $x=1$.", "125 no equivale a $5^3$.", "No se pueden igualar exponentes."]
    },
    {
        pregunta: "En $g(x) = 4 \\cdot 3^x$, para $x=0$ se calcula: $4 \\cdot 3 = 12$, luego $12^0 = 1$.",
        correcta: "El error está en la jerarquía: primero se calcula $3^0 = 1$, luego $4 \\cdot 1 = 4$.",
        distractoras: ["El procedimiento es totalmente correcto.", "Para el corte en Y se hace $y=0$.", "$12^0$ es igual a 0."]
    },
    {
        pregunta: "Al simplificar $\\frac{4^{-2} \\cdot 4^5}{4^3}$, se obtiene $\\frac{4^3}{4^3} = 4^{3+3} = 4^6$.",
        correcta: "El error está en el cociente: los exponentes se restan, $4^{3-3} = 4^0 = 1$.",
        distractoras: ["El procedimiento es totalmente correcto.", "En el numerador se debió restar -2 - 5.", "$4^0$ es igual a 0."]
    }
];

// ==========================================
// LÓGICA DE MEZCLA Y SELECCIÓN DE BANCO
// ==========================================
function mezclarArreglo(arreglo) {
    let copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function obtenerPreguntasJuego(nivel) {
    let bancoSeleccionado = bancoBasicoRaw;

    if (nivel === "Intermedio") {
        bancoSeleccionado = bancoIntermedioRaw;
    } else if (nivel === "Avanzado") {
        bancoSeleccionado = bancoAvanzadoRaw;
    }

    // Seleccionar preguntas al azar (máximo 10)
    const cantidad = Math.min(10, bancoSeleccionado.length);
    const seleccionadas = mezclarArreglo(bancoSeleccionado).slice(0, cantidad);

    // Formatear desordenando las respuestas
    return seleccionadas.map(q => {
        const opcionesMezcladas = mezclarArreglo([q.correcta, ...q.distractoras]);
        return {
            question: q.pregunta,
            options: opcionesMezcladas,
            correctAnswer: q.correcta
        };
    });
}