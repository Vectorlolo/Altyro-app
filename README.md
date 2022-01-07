
![altyroimagen](https://altyro.cl/wp-content/uploads/2020/06/Logo-altyro-1-300x120.png)
# Bienvenido al Repositorio Altyro Repartidores

## Trabajo Nahomi

### Cambios Generales:

* Modo Oscuro Deshabilitado:
  - index.html 
    <meta name="color-scheme" content="light"/>
  - variables.scss 
    @media (prefers-color-scheme: light) 

### Componente Informes:

  - [x] Punto final añadido en el texto del login "te espera un gran día"
  - [x] Texto de Asignados agregado.


### Componente Retiros:

  - [x] Color en letras en cantidad de paquetes y ajuste del texto.
  - [x] Boton de total.
  - [x] Linea de separcion en la tabla, color rosa.
  - [x] Subrayado del texto "semana actual"



### Shortcuts y otras informaciones utiles:

- Git Bash:
  * "code ." Abre visual studio desde la Git Bash.

### Reglas para programar bien:

  1. Entender todas y cada una de las etiquetas, variables, selectores, funciones, etc. (HTML, CSS, TS, ANGULAR, IONIC)
  2. Be a first principle thinker.

#### Logs de Trabajo

##### 06/01/2022

###### Objetivos

1. Terminar vista Entregas de la manera correcta.

###### Analisis del Problema

- Problema: Se requiere hacer un componente parecido al componente 'retiros' pero con algunos detalles cambiados, el nuevo componente se llamara 'entregas' y servira para manejar las entregas que realice el repartidor.

- Descripción: Esta vista debera contener una lista de entregas que el repartidor procedera a entregar, el tendra dos posibles opciones a elegir en cada entrega estas son 'Entregado' y 'No Entregado' las cuales abriran una modal diferente dependiendo del caso para explicar el motivo, esta vista contendra a su vez un filtro por el cual se podran filtrar las entregas, en la parte inferior tendra el total de entregas disponible.

- Solución: 
  1. [ ] Entender el código de retiros.
  2. [ ] Usar de base el código de retiros.
  3. [ ] Agregar detalles faltantes en congruencia con los requisitos del componente 'entregas' 

- Implementar Solución:
  - [ ] Entendiendo el código de retiros:

    1. [ ] Entender todas las etiquetas HTML.

      - ion-header: es un componente principal que contiene el componente de la barra de herramientas. Es importante tener en cuenta que el encabezado de ionic debe ser uno de los tres elementos raíz de una página.
        - style: Es el elemento encargado de indicar la información de estilo CSS.
          - heigth: El height atributo especifica la altura del elemento, en píxeles.
            - píxeles: Ampliando lo suficiente una imagen (zoom) en la pantalla de una computadora, pueden observarse los píxeles que la componen, basta con ver esta pantalla a través de una gota de agua. Los píxeles son los puntos de color (siendo la escala de grises una gama de color monocromática) ![pixeles](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/220px-Pixeles_de_telefono.jpg)
          - background-color: es una propiedad de CSS que define el color de fondo de un elemento, puede ser el valor de un color.
        - ion-icon: Para utilizarlos usaremos la etiqueta " ion-icon " y el nombre del icono deseado. Estos iconos los podremos utilizar de forma separada o junto a otros.
          - onclick: El evento onclick ocurre cuando el usuario hace clic en un elemento. 
            - history.back()

    2. [ ] Entender logica del TS.
    3. [ ] Entender estructura general del routing y el module para ese componente.
    4. [ ] Entender como se accede al componente 'retiros'






![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)