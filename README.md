
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

      - scss: lenguaje de extensión CSS.
      - ion-header: es un componente principal que contiene el componente de la barra de herramientas. Es importante tener en cuenta que el encabezado de ionic debe ser uno de los tres elementos raíz de una página.
        - style: Es el elemento encargado de indicar la información de estilo CSS.
          - heigth: El height atributo especifica la altura del elemento, en píxeles.
            - píxeles: Ampliando lo suficiente una imagen (zoom) en la pantalla de una computadora, pueden observarse los píxeles que la componen, basta con ver esta pantalla a través de una gota de agua. Los píxeles son los puntos de color (siendo la escala de grises una gama de color monocromática) ![pixeles](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/220px-Pixeles_de_telefono.jpg)
          - background-color: es una propiedad de CSS que define el color de fondo de un elemento, puede ser el valor de un color.
        - ion-icon: Para utilizarlos usaremos la etiqueta " ion-icon " y el nombre del icono deseado. Estos iconos los podremos utilizar de forma separada o junto a otros.
          - onclick: El evento onclick ocurre cuando el usuario hace clic en un elemento. 
            - history.back(): Clic en javascript para que el navegador vuelva a la página anterior.
              - style
                - margin-top: La margin-toppropiedad establece el margen superior de un elemento.
                - color: Determina el color de un elemento.
                - font-size: La font-size propiedad establece el tamaño de una fuente.
                  - fuente: es el tipo de letra o familia de tipos de letra es el tipo de letra que se aplicará al cuerpo de texto en un navegador.
          - name: Nombre del icono a colocar.
      - ion-content: El componente de contenido proporciona un área de contenido fácil de usar con algunos métodos útiles para controlar el área desplazable. Solo debe haber un contenido en una sola vista.
        - ion-row: Las filas son componentes horizontales del sistema de cuadrícula y contienen diferentes números de columnas . Aseguran que las columnas estén colocadas correctamente. 
          - style
            - padding: La propiedad CSS  paddingestablece el espacio de relleno requerido por todos los lados de un elemento. El área de padding  es el espacio entre el contenido del elemento y su borde ( border). No se permiten valores negativos.
          - ion-col: Las columnas son componentes celulares del sistema de cuadrícula y van dentro de una fila . Se expandirán para llenar su fila. Todo el contenido dentro de una cuadrícula debe ir dentro de una columna.
            - size: Numero de columnas a ocupar.
              - text-align: La text-align propiedad especifica la alineación horizontal del texto en un elemento.
                - ion-button
                  - class: CSS y JavaScript pueden utilizar el nombre de la clase para realizar determinadas tareas para los elementos con el nombre de clase especificado.
          - ion-col
            - div: div de "division" -división . Sirve para crear secciones o agrupar contenidos.
              - ngFor: La directiva ngFor es la que se encarga de presentar una lista de elementos en pantalla de una forma sencilla combinando el concepto de bucle y plantilla.
                - Directiva de angular: Las directivas de Angular son básicamente funciones que son invocadas cuando el DOM (Document Object Model) es compilado por el framework de Angular. Se podría decir que las directivas están ligadas a sus correspondientes elementos del DOM cuando el documento es cargado.
                  ![asjkdfjaksdlf](https://static.wikia.nocookie.net/wadguia/images/c/c3/Doom_cover.png/revision/latest?cb=20160522155501)
                  - Compilar: En informática, un compilador es un programa que traduce código escrito en un lenguaje de programación a otro lenguaje.​ En este tipo de traductor, el lenguaje fuente es generalmente un lenguaje de alto nivel, y el objeto un lenguaje de bajo nivel.​
                  - Framework: Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno, los cuales proveen a los desarrolladores herramientas probadas y testeadas para la creación de aplicaciones web interactivas y escalables.
                  - DOM: El DOM (Document Object Model en español Modelo de Objetos del Documento) es una API definida para representar e interactuar con cualquier documento HTML o XML. ... El DOM es una de las APIs más usadas en la Web, pues permite ejecutar código en el navegador para acceder e interactuar con cualquier nodo del documento.
                    - API: Una API es una interfaz de programación de aplicaciones (del inglés API: Application Programming Interface). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.
                      - Funciones: En la informática, más precisamente en los lenguajes de programación, una función es un tipo de subalgoritmo que describe una secuencia de órdenes.
                        - Subalgoritmo: Se llama subalgoritmo es un método de programación para dividir las partes de un algoritmo más general que resuelve cada una de las tareas particulares necesarias para que dicho algoritmo general alcance el objetivo para el que fue diseñado, es decir resolver un problema.
                          - Algoritmo: Un algoritmo informático es un conjunto de instrucciones definidas, ordenadas y acotadas para resolver un problema, realizar un cálculo o desarrollar una tarea
                      - Interfaz: Zona de comunicación o acción de un sistema sobre otro.
                      - Rutina: Conjunto de instrucciones que puede utilizarse en distintas partes de un programa.
                  - Angular: Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página

    2. [ ] Entender logica del TS.
    3. [ ] Entender estructura general del routing y el module para ese componente.
    4. [ ] Entender como se accede al componente 'retiros'


## CREAR MODAL
1. Crear componente para la modal
   
   VIDEO "Angular Material Tutorial"

  DIALOG EN ANGULAR MATERIAL: - Un dialog es un tipo de ventana modal que aparece 
  frente al contenido de la aplicacion para proporcionar informacion o solicitar informacion
  
  1. Importar MatDialogModule y se debe agregar al Material module
  2. En el HTML crear un boton que abra el dialog, se debe agregar el atributo: mat-raised-button 
  3. Para poder abrir el dialog, se necesita el servicio de dialog MATT, asi que se debe
   importar en el ts, despues de importarlo, se tiene que inyectar en el constructor 

## Comando para hacer commit
   Bash tab
   co tab
   enter



## Como anadir Angular Material
- En la terminal, ejecutar el siguiente comando:
ng add @angular/material y se comienza a descargar el paquete 

Despues de instalar pregunta el tema o plantilla que desea utilizar
Pregunta si desea instalar Hammer JS (yes)
Si desea importa el modulo de animaciones (yes)

Luego, al revisar en el app.module.ts, se observa que importo el browserAnimationModule, etc. 

Lo correcto seria trabajar en un nuevo modulo, por lo que se crea uno nuevo con el comando: ng generate module (nombre del modulo) + --flat para que lo cree directamente sin ninguna carpeta.

instalacion: ejecutar angular cli: npm i -g @angular/cli
luego ejecutar: ng add @angular/material

row: para las filas
col: para las columnas

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)