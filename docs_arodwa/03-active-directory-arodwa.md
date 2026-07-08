# Active Directory en Windows Server

En esta sección se muestra de forma visual cómo se prepara y organiza el servidor para usar Active Directory.

## ¿Qué es Active Directory?

Active Directory es como una libreta central del servidor. Allí se guardan los usuarios, las computadoras y los permisos para que todo funcione de forma ordenada.

## Propósito de la estructura

La idea principal es que todas las cuentas y equipos del dominio estén bien organizados. Así, una persona puede iniciar sesión con una cuenta única y el administrador puede controlar quién entra, quién puede usar ciertos recursos y cómo se manejan los equipos.

## Proceso visual de instalación y configuración

### 1. Inicio de la configuración

![Paso 1: inicio de la configuración](/images/active-directory/roles-y-caracteristicas1.jpg)

Se inicia el proceso para agregar las funciones necesarias que permitirán usar Active Directory.

### 2. Selección de funciones

![Paso 2: selección de funciones](/images/active-directory/roles-y-caracteristicas2.jpg)

Aquí se eligen las herramientas que el servidor necesita para trabajar como controlador de dominio.

### 3. Continuación de la instalación

![Paso 3: continuación del proceso](/images/active-directory/roles-y-caracteristicas3.jpg)

Se sigue avanzando en la instalación para dejar listo el servicio de directorio.

### 4. Confirmación de opciones

![Paso 4: confirmación de opciones](/images/active-directory/roles-y-caracteristicas4.jpg)

En este paso se revisa que todo lo seleccionado sea correcto antes de continuar.

### 5. Proceso de instalación en marcha

![Paso 5: instalación en progreso](/images/active-directory/roles-y-caracteristicas5.jpg)

El sistema empieza a instalar los componentes necesarios para que Active Directory funcione.

### 6. Finalización de la instalación de roles

![Paso 6: finalización de roles](/images/active-directory/roles-y-caracteristicas6.jpg)

Ya casi está listo el servidor para pasar a la siguiente parte del proceso.

### 7. Preparación para promover el servidor

![Paso 7: preparación para promover el servidor](/images/active-directory/roles-y-caracteristicas7.jpg)

Se prepara el equipo para convertirse en un controlador de dominio, que es el corazón del Active Directory.

### 8. Configuración adicional

![Paso 8: configuración adicional](/images/active-directory/roles-y-caracteristicas8.jpg)

Aquí se definen detalles importantes para que el dominio quede bien configurado.

### 9. Promoción del servidor a controlador de dominio

![Paso 9: promoción del servidor](/images/active-directory/roles-y-caracteristicas9-promoverelsv.jpg)

Este es un paso clave, porque el servidor pasa a ser el encargado de administrar la identidad y el acceso de los usuarios.

### 10. Creación del bosque

![Paso 10: creación del bosque](/images/active-directory/roles-y-caracteristicas10bosque.jpg)

En este punto se define la estructura principal del entorno. El bosque es la base general del sistema y agrupa los dominios y recursos que se van a administrar.

### 11. Creación OU (Orden organizativa)

![Paso 11: Creación OU](/images/active-directory/1creacion-ou.jpg)

### 12. Creación de usuarios
![Paso 12: Creación OU](/images/active-directory/2usuarios.jpg)

### 13. Creación grupos

![Paso 13: Creación grupos](/images/active-directory/3incorporacion-a-grupo.jpg)


## En resumen

Active Directory ayuda a mantener el sistema ordenado y seguro. Gracias a esta estructura, los usuarios, equipos y permisos pueden manejarse desde un solo lugar, lo que facilita la administración.
