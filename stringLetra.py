def comprimir(cadena):
    if not cadena:
        return ""

    resultado = ""
    i = 0
    while i < len(cadena):
        caracter_actual = cadena[i]
        conteo = 1
        j = i + 1
        while j < len(cadena) and cadena[j] == caracter_actual:
            conteo += 1
            j += 1

        resultado += caracter_actual
        if conteo > 1:
            resultado += str(conteo)
        i = j
    return resultado

# Almacenar la palabra en una lista (opcional, el string ya es iterable)
palabra = "galleta"
lista_letras = list(palabra)
print(f"Lista de letras: {lista_letras}")

# Comprimir la cadena
cadena_comprimida = comprimir(palabra)
print(f"Cadena comprimida: {cadena_comprimida}")

# descomrpimir vector

import re

def descomprimir(cadena_comprimida):
    if not cadena_comprimida:
        return ""

    # Usa expresiones regulares para encontrar el patrón de letra seguida de números (opcional)
    # Ejemplo: 'a2' o 'b'
    matches = re.findall(r'([a-zA-Z])(\d*)', cadena_comprimida)
    
    resultado = ""
    for caracter, conteo_str in matches:
        conteo = int(conteo_str) if conteo_str else 1
        resultado += caracter * conteo
        
    return resultado

cadena_descomprimida = descomprimir(cadena_comprimida)
print(f"Cadena descomprimida: {cadena_descomprimida}")
