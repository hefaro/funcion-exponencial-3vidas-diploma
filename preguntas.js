const allQuestions = [
    {
        id: 1,
        question: "Un estudiante analiza el crecimiento de una bacteria descrita por $f(x) = 3^x$. Para hallar la población en $x = 2 + 3$, realiza el siguiente procedimiento:",
        procedure: [
            "Evaluación: $f(2 + 3) = 3^{2+3}$",
            "Aplicación de propiedad: $3^{2+3} = 3^2 + 3^3$",
            "Cálculo: $9 + 27 = 36$"
        ],
        options: [
            "El procedimiento es correcto.",
            "El error está en el Paso 2: la propiedad correcta es $a^{m+n} = a^m \\cdot a^n$, por lo que se debió multiplicar $3^2 \\cdot 3^3 = 243$.",
            "El error está en el Paso 3: $3^2 = 6$ y $3^3 = 9$, la suma debía dar 15.",
            "El error está en el Paso 1: la variable no se puede sustituir por una suma."
        ],
        correctAnswer: "El error está en el Paso 2: la propiedad correcta es $a^{m+n} = a^m \\cdot a^n$, por lo que se debió multiplicar $3^2 \\cdot 3^3 = 243$."
    },
    {
        id: 2,
        question: "Para simplificar la expresión $(2^3)^4$ en una fórmula de interés compuesto, se presentó la siguiente solución:",
        procedure: [
            "Expresión original: $(2^3)^4$",
            "Aplicación de potencia de una potencia: $2^{3+4}$",
            "Resultado: $2^7 = 128$"
        ],
        options: [
            "El procedimiento es totalmente correcto.",
            "El error está en el Paso 2: al elevar una potencia a otra potencia los exponentes se multiplican, $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12} = 4096$.",
            "El error está en el Paso 3: $2^7$ es igual a 14 y no a 128.",
            "El error está en el Paso 1: falta multiplicar por la base."
        ],
        correctAnswer: "El error está en el Paso 2: al elevar una potencia a otra potencia los exponentes se multiplican, $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12} = 4096$."
    },
    {
        id: 3,
        question: "Al analizar el comportamiento de la función $f(x) = (-2)^x$ para definir si es una función exponencial en los números reales, un grupo argumenta lo siguiente:",
        procedure: [
            "Paso 1: Evaluamos la función para $x = \\frac{1}{2}$.",
            "Paso 2: Sustituimos en la función: $f\\left(\\frac{1}{2}\\right) = (-2)^{\\frac{1}{2}} = \\sqrt{-2}$.",
            "Paso 3: Como $\\sqrt{-2} = -1.41$, la función decrece rápidamente en los números reales."
        ],
        options: [
            "El razonamiento es correcto y demuestra que la base puede ser negativa.",
            "El error está en el Paso 3: la raíz cuadrada de un número negativo no existe en los números reales, por ello en $f(x)=a^x$ la base debe ser estricta $a > 0$.",
            "El error está en el Paso 2: $(-2)^{\\frac{1}{2}}$ es igual a $-2 / 2 = -1$.",
            "El error está en el Paso 1: no se pueden usar fracciones como exponentes en una función exponencial."
        ],
        correctAnswer: "El error está en el Paso 3: la raíz cuadrada de un número negativo no existe en los números reales, por ello en $f(x)=a^x$ la base debe ser estricta $a > 0$."
    },
    {
        id: 4,
        question: "Se quiere resolver la ecuación exponencial $5^{2x - 1} = 125$. Un estudiante presenta los siguientes pasos:",
        procedure: [
            "Igualación de bases: $5^{2x - 1} = 5^3$",
            "Igualación de exponentes: $2x - 1 = 3$",
            "Despeje: $2x = 3 - 1 \\implies 2x = 2 \\implies x = 1$"
        ],
        options: [
            "El procedimiento es correcto y $x = 1$.",
            "El error está en el Paso 1: $125$ no equivale a $5^3$.",
            "El error está en el Paso 3: al pasar el $-1$ al otro lado debía sumar, dando $2x = 4 \\implies x = 2$.",
            "El error está en el Paso 2: no se pueden cancelar las bases exponenciales."
        ],
        correctAnswer: "El error está en el Paso 3: al pasar el $-1$ al otro lado debía sumar, dando $2x = 4 \\implies x = 2$."
    },
    {
        id: 5,
        question: "Un análisis comparativo entre una función lineal $y = 2x$ y una exponencial $y = 2^x$ afirma lo siguiente:",
        procedure: [
            "Evaluación en $x=1$: Línea $\\rightarrow y=2$, Exponencial $\\rightarrow y=2$.",
            "Evaluación en $x=3$: Línea $\\rightarrow y=6$, Exponencial $\\rightarrow y=8$.",
            "Conclusión: La función lineal crece más rápido porque suma una cantidad constante, mientras la exponencial solo multiplica."
        ],
        options: [
            "La conclusión es correcta.",
            "El error está en el Paso 2: $2^3$ es 6.",
            "El error está en el Paso 3: el crecimiento exponencial superará al lineal porque la variable está en el exponente (factor multiplicativo constante).",
            "El error está en el Paso 1: $2^1$ no es igual a 2."
        ],
        correctAnswer: "El error está en el Paso 3: el crecimiento exponencial superará al lineal porque la variable está en el exponente (factor multiplicativo constante)."
    },
    {
        id: 6,
        question: "Al simplificar la expresión con exponentes negativos $\\frac{4^{-2} \\cdot 4^5}{4^3}$, se documentó el siguiente proceso:",
        procedure: [
            "Numerador: $4^{-2} \\cdot 4^5 = 4^{-2 + 5} = 4^3$",
            "Cociente: $\\frac{4^3}{4^3} = 4^{3 + 3}$",
            "Resultado: $4^6 = 4096$"
        ],
        options: [
            "El procedimiento es totalmente correcto.",
            "El error está en el Paso 1: se debió restar $-2 - 5 = -7$.",
            "El error está en el Paso 2: en el cociente de potencias de igual base los exponentes se restan, $4^{3-3} = 4^0 = 1$.",
            "El error está en el Paso 3: $4^0$ es igual a 0."
        ],
        correctAnswer: "El error está en el Paso 2: en el cociente de potencias de igual base los exponentes se restan, $4^{3-3} = 4^0 = 1$."
    },
    {
        id: 7,
        question: "Un estudiante calcula el corte con el eje $Y$ de la función exponencial $g(x) = 4 \\cdot 3^x$. Su procedimiento es:",
        procedure: [
            "Condición: Hacer $x = 0$, entonces $g(0) = 4 \\cdot 3^0$",
            "Operación previa: $4 \\cdot 3 = 12$, luego $12^0$",
            "Resultado: El corte con el eje $Y$ está en $(0, 1)$"
        ],
        options: [
            "El procedimiento es totalmente correcto.",
            "El error está en el Paso 2: por jerarquía de operaciones primero se evalúa la potencia $3^0 = 1$, luego $4 \\cdot 1 = 4$. El corte es $(0,4)$.",
            "El error está en el Paso 1: para hallar el corte en $Y$ se debe hacer $y = 0$.",
            "El error está en el Paso 3: $12^0$ es igual a 0."
        ],
        correctAnswer: "El error está en el Paso 2: por jerarquía de operaciones primero se evalúa la potencia $3^0 = 1$, luego $4 \\cdot 1 = 4$. El corte es $(0,4)$."
    },
    {
        id: 8,
        question: "Analizando la función de decaimiento $f(x) = \\left(\\frac{1}{2}\\right)^x$, un estudiante afirma que la gráfica cruzará el eje $X$ hacia abajo. Argumenta:",
        procedure: [
            "Paso 1: Si tomamos un valor de $x$ muy grande, por ejemplo $x = 10$.",
            "Paso 2: $f(10) = \\left(\\frac{1}{2}\\right)^{10} = \\frac{1}{1024}$, que es un valor casi cercano a cero.",
            "Paso 3: Si $x = 1000$, la fracción se vuelve negativa, por lo tanto la gráfica atraviesa el eje $X$."
        ],
        options: [
            "El razonamiento es correcto.",
            "El error está en el Paso 2: $\\left(\\frac{1}{2}\\right)^{10}$ es un número entero grande.",
            "El error está en el Paso 3: una potencia de base positiva jamás será negativa ni cero. El eje $X$ ($y=0$) actúa como asíntota horizontal.",
            "El error está en el Paso 1: no se pueden evaluar números mayores a 10."
        ],
        correctAnswer: "El error está en el Paso 3: una potencia de base positiva jamás será negativa ni cero. El eje $X$ ($y=0$) actúa como asíntota horizontal."
    },
    {
        id: 9,
        question: "Para resolver la operación $(e^x \\cdot e^y)^2$, se propuso el siguiente desarrollo algebraico:",
        procedure: [
            "Producto interno: $e^x \\cdot e^y = e^{x \\cdot y}$",
            "Potencia de potencia: $(e^{x \\cdot y})^2$",
            "Resultado final: $e^{2xy}$"
        ],
        options: [
            "El procedimiento es correcto en todos sus pasos.",
            "El error está en el Paso 1: al multiplicar potencias de igual base se suman los exponentes ($e^{x+y}$), dando como resultado final $e^{2x+2y}$.",
            "El error está en el Paso 2: no se puede elevar una función exponencial a un número entero.",
            "El error está en el Paso 3: el 2 solo multiplica a la variable $y$."
        ],
        correctAnswer: "El error está en el Paso 1: al multiplicar potencias de igual base se suman los exponentes ($e^{x+y}$), dando como resultado final $e^{2x+2y}$."
    },
    {
        id: 10,
        question: "Dada la ecuación $2^{x+1} = 8^{x}$, se busca hallar el valor de $x$ realizando estos pasos:",
        procedure: [
            "Expresar en base común 2: $2^{x+1} = (2^3)^x$",
            "Aplicar potencia de potencia: $2^{x+1} = 2^{3+x}$",
            "Igualar exponentes: $x + 1 = 3 + x \\implies 1 = 3$ (Sin solución)"
        ],
        options: [
            "El procedimiento es correcto, la ecuación no tiene solución.",
            "El error está en el Paso 2: $(2^3)^x$ es igual a $2^{3x}$. La igualdad correcta de exponentes es $x + 1 = 3x$, dando $x = 0.5$.",
            "El error está en el Paso 1: el número 8 no se puede escribir como potencia de 2.",
            "El error está en el Paso 3: se debió restar los exponentes en lugar de igualarlos."
        ],
        correctAnswer: "El error está en el Paso 2: $(2^3)^x$ es igual a $2^{3x}$. La igualdad correcta de exponentes es $x + 1 = 3x$, dando $x = 0.5$."
    }
];