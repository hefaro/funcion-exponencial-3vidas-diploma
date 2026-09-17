// Banco de preguntas de Nivel Alto (Auditoría y Detección de Errores)
const bancoAlto = [
    {
        pregunta: "Un estudiante analiza $f(x) = 3^x$. Para $x = 2 + 3$, calcula $3^{2+3} = 3^2 + 3^3 = 36$.",
        correcta: "Error de propiedad: debió multiplicar los términos $3^2 \\cdot 3^3 = 243$.",
        distractoras: ["Procedimiento correcto.", "Error de cálculo: $3^2=6$ y $3^3=9$.", "No se puede sustituir la variable por una suma."]
    },
    {
        pregunta: "Para simplificar $(2^3)^4$, un alumno escribe $2^{3+4} = 2^7 = 128$.",
        correcta: "Error en leyes de exponentes: debió multiplicar exponentes $(2^3)^4 = 2^{12} = 4096$.",
        distractoras: ["Procedimiento correcto.", "El error es que $2^7 = 14$.", "Falta multiplicar la base."]
    },
    {
        pregunta: "En la ecuación $5^{2x - 1} = 125$, el estudiante resuelve: $2x - 1 = 3 \\implies 2x = 2 \\implies x = 1$.",
        correcta: "Error en el despeje: el $-1$ pasa a sumar, obteniendo $2x = 4 \\implies x = 2$.",
        distractoras: ["Procedimiento correcto y $x=1$.", "$125$ no equivale a $5^3$.", "No se pueden igualar los exponentes."]
    },
    {
        pregunta: "En $g(x) = 4 \\cdot 3^x$, para $x=0$ efectúa: $4 \\cdot 3 = 12$, luego $12^0 = 1$.",
        correcta: "Error de jerarquía: primero evalúa $3^0 = 1$, luego $4 \\cdot 1 = 4$.",
        distractoras: ["Procedimiento correcto.", "Para el corte en Y se debe hacer $y=0$.", "$12^0$ es igual a $0$."]
    },
    {
        pregunta: "Al simplificar $\\frac{4^{-2} \\cdot 4^5}{4^3}$, un estudiante obtiene $\\frac{4^3}{4^3} = 4^{3+3} = 4^6$.",
        correcta: "Error en el cociente: los exponentes se restan, $4^{3-3} = 4^0 = 1$.",
        distractoras: ["Procedimiento correcto.", "En el numerador debió restar $-2 - 5$.", "$4^0$ es igual a $0$."]
    },
    {
        pregunta: "Al resolver $2^x = -8$, un alumno afirma que $x = -3$ porque $2^{-3} = -8$.",
        correcta: "Error conceptual: $2^{-3} = \\frac{1}{8}$. La ecuación no tiene solución real.",
        distractoras: ["El procedimiento es totalmente correcto.", "El valor correcto es $x = 3$.", "Se debió tomar la raíz cúbica de $-8$."]
    },
    {
        pregunta: "Para despejar $3^{x+1} = 9^x$, se hace: $3^{x+1} = (3^2)^x \\implies x+1 = 2+x \\implies 1=2$ (Sin solución).",
        correcta: "Error algebraico: $(3^2)^x = 3^{2x}$, luego la igualdad correcta es $x+1 = 2x \\implies x = 1$.",
        distractoras: ["Procedimiento correcto, no hay solución.", "$9^x$ no equivale a $(3^2)^x$.", "Se debió restar $9-3$."]
    },
    {
        pregunta: "Un alumno afirma que el dominio de $f(x) = 2^x$ son todos los números reales positivos $(0, \\infty)$.",
        correcta: "Error conceptual: confunde el dominio $(-\\infty, \\infty)$ con el rango $(0, \\infty)$.",
        distractoras: ["La afirmación del alumno es correcta.", "El dominio exclude al cero únicamente.", "El dominio son solo los enteros."]
    },
    {
        pregunta: "Al evaluar $f(x) = -3^x$ en $x = 2$, se calcula: $(-3)^2 = 9$.",
        correcta: "Error de signos: el signo no está entre paréntesis, $- (3^2) = -9$.",
        distractoras: ["El cálculo es totalmente correcto.", "Toda potencia par es positiva.", "El resultado debió ser $6$."]
    },
    {
        pregunta: "Para resolver $e^{2x} - e^x = 0$, el alumno simplifica dividiendo entre $e^x$ y obtiene $e^2 - 1 = 0$.",
        correcta: "Error en exponentes: $\\frac{e^{2x}}{e^x} = e^{2x-x} = e^x$, resultando $e^x - 1 = 0 \\implies x=0$.",
        distractoras: ["El procedimiento es correcto.", "$e^x$ se elimina completamente.", "No se puede factorizar."]
    },
    {
        pregunta: "Un estudiante indica que la gráfica de $f(x) = (1/3)^x$ sube de izquierda a derecha porque la base es positiva.",
        correcta: "Error conceptual: al ser la base $0 < a < 1$, la función es decreciente.",
        distractoras: ["La afirmación es correcta.", "Las bases fraccionarias son negativas.", "Es una recta decreciente."]
    },
    {
        pregunta: "Para calcular $2^{x+2}$ cuando $2^x = 5$, el alumno hace: $5 + 2 = 7$.",
        correcta: "Error de propiedad: $2^{x+2} = 2^x \\cdot 2^2 = 5 \\cdot 4 = 20$.",
        distractoras: ["El cálculo es correcto.", "Debió calcular $5^2 = 25$.", "Se debió restar $5 - 4 = 1$."]
    },
    {
        pregunta: "Se simplifica $\\sqrt{9^x}$ como $3^{x/2}$.",
        correcta: "Error en la potencia: $\\sqrt{9^x} = (3^2)^{x/2} = 3^x$.",
        distractoras: ["El procedimiento es totalmente correcto.", "$\\sqrt{9}$ es $4.5$.", "Debió dar $9^{2x}$."]
    },
    {
        pregunta: "Al resolver $10^x = 0$, el alumno concluye que $x = 0$.",
        correcta: "Error conceptual: $10^0 = 1$. La función exponencial jamás es cero.",
        distractoras: ["El procedimiento es correcto.", "El resultado es $x = -1$.", "El resultado es $x = 10$."]
    },
    {
        pregunta: "En la ecuación $2^{x^2} = 16$, un estudiante plantea: $x^2 = 4 \\implies x = 2$ únicamente.",
        correcta: "Error en la raíz: olvidó la solución negativa $x = -2$, ya que $(-2)^2 = 4$.",
        distractoras: ["Procedimiento correcto.", " $16$ es $2^8$.", "La única solución es $x = 4$."]
    },
    {
        pregunta: "Al derivar u operativamente transformar $f(x) = 2 \\cdot 5^x$, el alumno multiplica la base y obtiene $10^x$.",
        correcta: "Error de jerarquía: no se puede multiplicar el coeficiente por la base elevada a un exponente variable.",
        distractoras: ["La transformación es equivalente.", "Se debió sumar $2 + 5 = 7^x$.", "Solo aplica si $x=1$."]
    },
    {
        pregunta: "Para graficar $y = 2^x - 4$, el alumno ubica la asíntota horizontal en $y = 0$.",
        correcta: "Error de traslación: el término $-4$ desplaza la asíntota a $y = -4$.",
        distractoras: ["La asíntota siempre permanece en $y = 0$.", "La asíntota cambia a $x = -4$.", "No tiene asíntota."]
    },
    {
        pregunta: "Al resolver $(x - 1)^0 = 1$, el estudiante afirma que se cumple para todo número real $x$.",
        correcta: "Error de restricción: la base no puede ser cero, por lo que $x \\neq 1$.",
        distractoras: ["La afirmación es completamente correcta.", "Solo se cumple si $x = 0$.", "Nunca se cumple."]
    },
    {
        pregunta: "Un alumno simplifica $\\frac{e^x + e^{2x}}{e^x}$ como $1 + e^{2x}$.",
        correcta: "Error de división: debió dividir ambos términos, obteniendo $1 + e^x$.",
        distractoras: ["Procedimiento correcto.", "El resultado debió ser $e^x$.", "No se pueden simplificar sumas."]
    },
    {
        pregunta: "Para calcular la mitad de $2^{10}$, un estudiante responde $2^5$.",
        correcta: "Error de propiedades: la mitad es $\\frac{2^{10}}{2^1} = 2^9 = 512$.",
        distractoras: ["El procedimiento es correcto.", "La mitad es $1^{10} = 1$.", "La mitad es $2^5 = 32$."]
    },
    {
        pregunta: "En la ecuación $3^{-x} = -9$, un alumno afirma que $x = 2$.",
        correcta: "Error conceptual: $3^{-2} = \\frac{1}{9} > 0$. Una potencia con base positiva nunca es negativa.",
        distractoras: ["El resultado es correcto.", "El valor debió ser $x = -2$.", "El valor debió ser $x = 0$."]
    },
    {
        pregunta: "Para simplificar $2^x + 2^x$, el estudiante escribe $4^{2x}$.",
        correcta: "Error de suma: $2^x + 2^x = 2 \\cdot 2^x = 2^{x+1}$.",
        distractoras: ["Procedimiento correcto.", "El resultado es $4^x$.", "El resultado es $2^{2x}$."]
    },
    {
        pregunta: "Un estudiante evalúa $f(x) = (0.2)^{-1}$ y afirma que el resultado es $-0.2$.",
        correcta: "Error en exponente negativo: $(0.2)^{-1} = (1/5)^{-1} = 5$.",
        distractoras: ["Cálculo correcto.", "El resultado debió ser $0.02$.", "El resultado es $-5$."]
    },
    {
        pregunta: "Para resolver $4^{x-1} = 2$, un alumno convierte a base 2: $2^{x-1} = 2^1 \\implies x - 1 = 1 \\implies x = 2$.",
        correcta: "Error de conversión: $4^{x-1} = (2^2)^{x-1} = 2^{2x-2}$, luego $2x - 2 = 1 \\implies x = 1.5$.",
        distractoras: ["Procedimiento correcto.", "$4$ en base $2$ es $2^1$.", "El resultado es $x = 3$."]
    },
    {
        pregunta: "Se afirma que la función $y = 3^{-x}$ es creciente porque la base $3$ es mayor que $1$.",
        correcta: "Error conceptual: $3^{-x} = (1/3)^x$, al ser la base efectiva menor a $1$, es decreciente.",
        distractoras: ["La afirmación es correcta.", "Es una función constante.", "Es una parábola."]
    },
    {
        pregunta: "Un alumno evalúa $f(x) = 2^{x+1}$ en $x=3$ haciendo: $2^3 + 1 = 8 + 1 = 9$.",
        correcta: "Error en el exponente: debió sumar primero en el exponente $2^{3+1} = 2^4 = 16$.",
        distractoras: ["Procedimiento correcto.", "El resultado es $2^3 = 8$.", "Debió multiplicar $2 \\cdot 3 = 6$."]
    },
    {
        pregunta: "Al resolver $e^{\\ln(x)} = 5$, el alumno dice que no se puede resolver sin calculadora.",
        correcta: "Error de simplificación: las funciones $e^x$ y $\\ln(x)$ son inversas, luego $x = 5$.",
        distractoras: ["Es correcto, requiere calculadora.", "El resultado es $e^5$.", "El resultado es $0$."]
    },
    {
        pregunta: "Se simplifica $(a^x)^y$ como $a^{x^y}$.",
        correcta: "Error de ley exponente: la potencia de una potencia requiere multiplicar exponentes $a^{x \\cdot y}$.",
        distractoras: ["El procedimiento es correcto.", "Se debieron sumar los exponentes $a^{x+y}$.", "Se debió dividir $x/y$."]
    },
    {
        pregunta: "Al resolver la inecuación $2^x > 8$, el estudiante concluye $x < 3$.",
        correcta: "Error de sentido de inecuación: como la base $2 > 1$, la desigualdad se conserva $x > 3$.",
        distractoras: ["El sentido cambia siempre en exponenciales.", "La solución es $x = 3$.", "La solución es $x > 8$."]
    },
    {
        pregunta: "Para calcular el valor de $16^{3/4}$, el estudiante calcula $(16 \\cdot 3) / 4 = 12$.",
        correcta: "Error conceptual: $16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$.",
        distractoras: ["El procedimiento es correcto.", "El resultado debió ser $64$.", "El resultado es $4$."]
    }
];