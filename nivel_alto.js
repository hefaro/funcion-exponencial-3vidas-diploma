// Banco de preguntas de Nivel Alto - Optimizado para pantallas móviles
const bancoAlto = [
    {
        pregunta: "Un estudiante evalúa $f(x) = 3^x$. Para $x = 2 + 3$, calcula $3^{2+3} = 3^2 + 3^3 = 36$.",
        correcta: "Malo: Debió aplicar producto de potencias: $3^2 \\cdot 3^3 = 243$.",
        distractoras: [
            "Malo: La propiedad es correcta, pero $3^2=6$ y $3^3=9$.",
            "Malo: No se puede sustituir $x$ por una suma de enteros.",
            "Correcto: La propiedad distributiva aplica en potencias."
        ]
    },
    {
        pregunta: "Para simplificar $(2^3)^4$, un alumno escribe $2^{3+4} = 2^7 = 128$.",
        correcta: "Malo: En potencia de potencia se multiplican: $2^{12} = 4096$.",
        distractoras: [
            "Malo: Sumó bien los exponentes pero $2^7 = 14$.",
            "Malo: Debió multiplicar la base por el exponente: $4^7$.",
            "Correcto: Los exponentes de igual base siempre se suman."
        ]
    },
    {
        pregunta: "En la ecuación $5^{2x - 1} = 125$, se resuelve: $2x - 1 = 3 \\implies 2x = 2 \\implies x = 1$.",
        correcta: "Malo: Al trasponer, el $-1$ pasa a sumar: $2x = 4 \\implies x = 2$.",
        distractoras: [
            "Malo: La potencia equivale a $125 = 5^2$ y no a $5^3$.",
            "Malo: No se pueden igualar exponentes con variables.",
            "Correcto: El despeje es adecuado y la solución es $x = 1$."
        ]
    },
    {
        pregunta: "En $g(x) = 4 \\cdot 3^x$, para $x=0$ efectúa: $4 \\cdot 3 = 12$, luego $12^0 = 1$.",
        correcta: "Malo: Primero se evalúa $3^0 = 1$ y luego $4 \\cdot 1 = 4$.",
        distractoras: [
            "Malo: Multiplicó bien pero el resultado de $12^0$ es $0$.",
            "Malo: Para hallar el corte Y se debía igualar $g(x) = 0$.",
            "Correcto: Se agrupó el producto antes de potenciar."
        ]
    },
    {
        pregunta: "Al simplificar $\\frac{4^{-2} \\cdot 4^5}{4^3}$, obtiene $\\frac{4^3}{4^3} = 4^{3+3} = 4^6$.",
        correcta: "Malo: En el cociente los exponentes se restan: $4^{3-3} = 4^0 = 1$.",
        distractoras: [
            "Malo: En el numerador sumó mal: $-2 - 5 = -7$.",
            "Malo: La simplificación falla porque $4^0$ es $0$.",
            "Correcto: Al cancelar la fracción los exponentes se suman."
        ]
    },
    {
        pregunta: "Al resolver $2^x = -8$, un alumno afirma que $x = -3$ porque $2^{-3} = -8$.",
        correcta: "Malo: $2^{-3} = \\frac{1}{8}$. Una base positiva no produce negativos.",
        distractoras: [
            "Malo: El valor es correcto pero debió ser $x = -1/3$.",
            "Malo: Se debió calcular la raíz cúbica negativa de $-8$.",
            "Correcto: El exponente negativo convierte la base en negativa."
        ]
    },
    {
        pregunta: "Para $3^{x+1} = 9^x$, hace: $3^{x+1} = (3^2)^x \\implies x+1 = 2+x \\implies 1=2$.",
        correcta: "Malo: $(3^2)^x = 3^{2x}$, la igualdad real es $x+1 = 2x \\implies x = 1$.",
        distractoras: [
            "Malo: La base $9$ convertida a base $3$ equivale a $3^3$.",
            "Malo: Debió restar las bases $9 - 3 = 6$ antes de igualar.",
            "Correcto: La ecuación es inconsistente y no tiene solución."
        ]
    },
    {
        pregunta: "Un alumno indica que el dominio de $f(x) = 2^x$ son los reales positivos $(0, \\infty)$.",
        correcta: "Malo: Confundió el dominio (todos los Reales) con el rango.",
        distractoras: [
            "Malo: El dominio incluye únicamente enteros positivos.",
            "Malo: El dominio contiene todos los reales excepto el cero.",
            "Correcto: La función no acepta valores de $x$ negativos."
        ]
    },
    {
        pregunta: "Al evaluar $f(x) = -3^x$ en $x = 2$, se calcula: $(-3)^2 = 9$.",
        correcta: "Malo: El signo no lo afecta la potencia: $-(3^2) = -9$.",
        distractoras: [
            "Malo: Base negativa con exponente par da $6$.",
            "Malo: Se debió multiplicar coeficiente por exponente: $-6$.",
            "Correcto: Todo número negativo al cuadrado da positivo."
        ]
    },
    {
        pregunta: "Para resolver $e^{2x} - e^x = 0$, divide entre $e^x$ y obtiene $e^2 - 1 = 0$.",
        correcta: "Malo: Al dividir se restan exponentes: $\\frac{e^{2x}}{e^x} = e^x$, dando $e^x - 1 = 0$.",
        distractoras: [
            "Malo: Dividió bien pero omitió el $1$, dando $e^2 = 0$.",
            "Malo: No se puede dividir entre $e^x$ porque se anula en $0$.",
            "Correcto: Al simplificar la variable queda la constante $e^2$."
        ]
    },
    {
        pregunta: "Un alumno dice que $f(x) = (1/3)^x$ crece porque su base es positiva.",
        correcta: "Malo: Como la base cumple $0 < a < 1$, es decreciente.",
        distractoras: [
            "Malo: Crece hasta volverse una recta horizontal en $y=1$.",
            "Malo: Es decreciente porque la base se considera negativa.",
            "Correcto: Las potencias con base positiva siempre crecen."
        ]
    },
    {
        pregunta: "Para calcular $2^{x+2}$ sabiendo que $2^x = 5$, el alumno calcula $5 + 2 = 7$.",
        correcta: "Malo: Por propiedad: $2^{x+2} = 2^x \\cdot 2^2 = 5 \\cdot 4 = 20$.",
        distractoras: [
            "Malo: Sumó bien pero debió elevar al cuadrado: $7^2 = 49$.",
            "Malo: La propiedad indica elevar la constante: $5^2 = 25$.",
            "Correcto: Se suma la constante directamente al resultado."
        ]
    },
    {
        pregunta: "Se simplifica la expresión $\\sqrt{9^x}$ obteniendo $3^{x/2}$.",
        correcta: "Malo: $\\sqrt{9^x} = (3^2)^{x/2} = 3^{2x/2} = 3^x$.",
        distractoras: [
            "Malo: La raíz elimina la variable $x$ dejando solo $3$.",
            "Malo: La raíz de $9$ es $4.5$, resultando $(4.5)^x$.",
            "Correcto: El radical se convierte en divisor del exponente."
        ]
    },
    {
        pregunta: "Al resolver la ecuación $10^x = 0$, el alumno concluye que $x = 0$.",
        correcta: "Malo: $10^0 = 1$. La ecuación no tiene solución real.",
        distractoras: [
            "Malo: La solución es $x = -1$ por desplazamiento.",
            "Malo: El resultado es $x = 10$ por la base.",
            "Correcto: Cualquier base elevada a cero da cero."
        ]
    },
    {
        pregunta: "En la ecuación $2^{x^2} = 16$, plantea: $x^2 = 4 \\implies x = 2$ únicamente.",
        correcta: "Malo: Omitió la solución negativa $x = -2$, pues $(-2)^2 = 4$.",
        distractoras: [
            "Malo: Expresó mal la base, pues $16$ equivale a $2^8$.",
            "Malo: La solución es única y corresponde a $x = 4$.",
            "Correcto: La raíz cuadrada solo produce valores positivos."
        ]
    },
    {
        pregunta: "Al transformar $f(x) = 2 \\cdot 5^x$, multiplica coeficientes obteniendo $10^x$.",
        correcta: "Malo: No se puede multiplicar la base mientras tenga exponente $x$.",
        distractoras: [
            "Malo: Debió sumar exponentes obteniendo $10^{x+1}$.",
            "Malo: La combinación genera suma de bases: $7^x$.",
            "Correcto: El producto numérico consolida la base."
        ]
    },
    {
        pregunta: "Para graficar $y = 2^x - 4$, el alumno ubica la asíntota horizontal en $y = 0$.",
        correcta: "Malo: El término $-4$ desplaza la asíntota a $y = -4$.",
        distractoras: [
            "Malo: El cambio mueve la asíntota a la vertical $x = -4$.",
            "Malo: Pierde la asíntota al restar una constante.",
            "Correcto: La asíntota siempre permanece en el eje X."
        ]
    },
    {
        pregunta: "Al resolver $(x - 1)^0 = 1$, afirma que se cumple para todo $x \\in \\mathbb{R}$.",
        correcta: "Malo: Existe la restricción $x \\neq 1$, pues $0^0$ es indeterminado.",
        distractoras: [
            "Malo: Solo cumple para $x = 0$ por ser neutro.",
            "Malo: Es falso, toda expresión a la cero da cero.",
            "Correcto: Toda base elevada a cero da siempre $1$."
        ]
    },
    {
        pregunta: "Un alumno simplifica $\\frac{e^x + e^{2x}}{e^x}$ obteniendo $1 + e^{2x}$.",
        correcta: "Malo: Debe dividir ambos términos: $\\frac{e^x}{e^x} + \\frac{e^{2x}}{e^x} = 1 + e^x$.",
        distractoras: [
            "Malo: Omitió cancelar la constante $e$, dando $e^x$.",
            "Malo: Los términos con $x$ no se pueden dividir.",
            "Correcto: Se cancela $e^x$ del numerador directamente."
        ]
    },
    {
        pregunta: "Para calcular la mitad del valor de $2^{10}$, se responde que es $2^5$.",
        correcta: "Malo: Dividir entre 2 resta 1 al exponente: $\\frac{2^{10}}{2^1} = 2^9 = 512$.",
        distractoras: [
            "Malo: Sacar la mitad divide la base: $1^{10} = 1$.",
            "Malo: La mitad se calcula multiplicando: $10 \\cdot 2 = 20$.",
            "Correcto: La mitad de una potencia divide su exponente."
        ]
    },
    {
        pregunta: "En la ecuación $3^{-x} = -9$, un alumno afirma que la solución es $x = 2$.",
        correcta: "Malo: $3^{-2} = \\frac{1}{9}$. Bases positivas no dan resultados negativos.",
        distractoras: [
            "Malo: El cálculo es correcto pero debió ser $x = -2$.",
            "Malo: Se resuelve con logaritmo dando $x = 0$.",
            "Correcto: El exponente negativo vuelve negativo el resultado."
        ]
    },
    {
        pregunta: "Para simplificar la suma $2^x + 2^x$, el estudiante escribe $4^{2x}$.",
        correcta: "Malo: Sumar dos términos iguales es duplicar: $2 \\cdot 2^x = 2^{x+1}$.",
        distractoras: [
            "Malo: Se suman bases manteniendo el exponente: $4^x$.",
            "Malo: La suma multiplica las bases dando $2^{2x}$.",
            "Correcto: Se multiplican bases y exponentes al sumar."
        ]
    },
    {
        pregunta: "Un estudiante evalúa $f(x) = (0.2)^{-1}$ y afirma que el resultado es $-0.2$.",
        correcta: "Malo: El exponente $-1$ invierte la fracción: $(1/5)^{-1} = 5$.",
        distractoras: [
            "Malo: El exponente divide por diez dando $0.02$.",
            "Malo: Conserva el valor pero cambia signo a $-5$.",
            "Correcto: El exponente negativo le añade signo menos."
        ]
    },
    {
        pregunta: "Para resolver $4^{x-1} = 2$, hace $2^{x-1} = 2^1 \\implies x - 1 = 1 \\implies x = 2$.",
        correcta: "Malo: $4^{x-1} = 2^{2x-2}$, la ecuación real es $2x - 2 = 1 \\implies x = 1.5$.",
        distractoras: [
            "Malo: Expresó mal la potencia, pues $4$ equivale a $2^1$.",
            "Malo: El despeje final debió ser $x = 1 - 1 = 0$.",
            "Correcto: Al cambiar $4$ por $2$ los exponentes son iguales."
        ]
    },
    {
        pregunta: "Se afirma que $y = 3^{-x}$ es creciente porque la base $3$ es mayor que $1$.",
        correcta: "Malo: $3^{-x} = (1/3)^x$. Al ser la base menor que $1$, decrece.",
        distractoras: [
            "Malo: Es constante porque el signo anula el cambio.",
            "Malo: Se vuelve parábola cóncava por el signo menos.",
            "Correcto: La base decide el crecimiento sin mirar el exponente."
        ]
    },
    {
        pregunta: "Un alumno evalúa $f(x) = 2^{x+1}$ en $x=3$ haciendo: $2^3 + 1 = 8 + 1 = 9$.",
        correcta: "Malo: Primero se suma el exponente: $2^{3+1} = 2^4 = 16$.",
        distractoras: [
            "Malo: Calculó bien pero olvidó multiplicar por la base.",
            "Malo: Se debe multiplicar la base por $x$: $2 \\cdot 3 = 6$.",
            "Correcto: La constante del exponente se suma al final."
        ]
    },
    {
        pregunta: "Al resolver $e^{\\ln(x)} = 5$, afirma que no se puede resolver sin calculadora.",
        correcta: "Malo: $e^x$ y $\\ln(x)$ son inversas y se cancelan: $x = 5$.",
        distractoras: [
            "Malo: Se despeja la base Euler como exponente: $x = e^5$.",
            "Malo: La propiedad logarítmica anula todo dando $x = 0$.",
            "Correcto: Estas funciones siempre requieren decimales."
        ]
    },
    {
        pregunta: "Se simplifica la expresión $(a^x)^y$ argumentando que equivale a $a^{x^y}$.",
        correcta: "Malo: En potencia de potencia se multiplican: $a^{x \\cdot y}$.",
        distractoras: [
            "Malo: La regla exige sumar los exponentes: $a^{x+y}$.",
            "Malo: La operación entre exponentes es división: $a^{x/y}$.",
            "Correcto: El exponente exterior potencia al interior."
        ]
    },
    {
        pregunta: "Al resolver la inecuación $2^x > 8$, el estudiante concluye que $x < 3$.",
        correcta: "Malo: Como la base $2 > 1$, la desigualdad se conserva: $x > 3$.",
        distractoras: [
            "Malo: En inecuaciones exponenciales siempre se invierte.",
            "Malo: No hay intervalo solución, solo un valor $x = 3$.",
            "Correcto: El sentido cambia siempre al trabajar potencias."
        ]
    },
    {
        pregunta: "Para calcular el valor de $16^{3/4}$, realiza: $(16 \\cdot 3) / 4 = 12$.",
        correcta: "Malo: Exponente fraccionario es raíz y potencia: $(\\sqrt[4]{16})^3 = 2^3 = 8$.",
        distractoras: [
            "Malo: Omitió elevar al cuadrado obteniendo $64$.",
            "Malo: La fracción invierte la base dando $1/4$.",
            "Correcto: Los exponentes fraccionarios son multiplicaciones."
        ]
    }
];