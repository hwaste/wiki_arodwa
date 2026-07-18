# Objetivo del laboratorio

La idea de este wiki es documentar el proceso de instalación de linux server en una maquina virtual utilizando Virtual Box, aplicando algunas configuraciones básicas de direccionamiento IP, configuraciones de Firewall, actualizaciones, y gestión de permisos de archivos.

## Topología

- Capa Lógica y de Servicios (Servidores)Servidor Principal (Nivel 1): Un equipo que actúa como nodo central, conteniendo diferentes servicios desplegados en máquinas virtuales (VM) o contenedores.

Servicios Independientes: Cada servicio crítico se levanta en un contenedor o máquina virtual distinta.Web/Base de Datos: Aloja el servidor HTTP y el motor de datos.

Gestión y Monitoreo: Aloja herramientas de control centralizado.

Seguridad: Servidor cortafuegos o IDS (Sistema de Detección de Intrusos).

- Capa Física / Recursos Anfitrión Hardware Base: La computadora física o servidor (con procesador compatible con virtualización y suficiente memoria RAM) que soporta el laboratorio.

Caracteristicas tecnicas del pc anfitrión utilizado:

    Nombre del SO	Microsoft Windows 11 Pro
    Versión	10.0.26200 compilación 26200
    Fabricante del SO	Microsoft Corporation
    Fabricante del sistema	HP
    Modelo del sistema	OMEN Laptop 15-ek0xxx
    Tipo de sistema	PC basado en x64
    Procesador	Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz, 2496 Mhz, 4 procesadores principales, 8 procesadores lógicos
    Fabricante de la placa base	HP
    Memoria física instalada (RAM)	16,0 GB


Hipervisor / Motor de Contenedores: Software encargado de la virtualización. Las herramientas estándar de la industria incluyen: VirtualBox o VMware Workstation para equipos de escritorio, en este caso se utilizó Virtual Box.

## Propósito

- Conocer el entorno de Linux server, y algunas configuraciones iniciales básicas.
- Mostrar como operar Linux server a través de la "CLI" o consola de comandos.
- Mostrar los primeros paso luego de instalar Linux server.

> El wiki contiene imágenes del proceso de configuración para apoyar en el proceso y sea mas amigable al usuario lector.
