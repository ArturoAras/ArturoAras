#Lista
lista = ["hola", "mundo", "arturo", "aras"]

dato = input('Ingresa tu palabra: ') #Se le pide al usuario que ingrese un dato

if lista.count(dato): #.count() busca el dato en la lista
    print("El dato", dato, "existe")
else:
    print("El dato", dato, "no existe")

#IF ternario
print("hola mundo") if 1 == 1 else print('no se imprime')