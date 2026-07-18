# Objetivo del laboratorio

La idea de este wiki es documentar el proceso de instalación de linux server en una maquina virtual utilizando Virtual Box, aplicando algunas configuraciones básicas de direccionamiento IP, configuraciones de Firewall, actualizaciones, y gestión de permisos de archivos.

## Topología

Capa Lógica y de Servicios (Servidores)Servidor Principal (Nivel 1): Un equipo que actúa como nodo central, conteniendo diferentes servicios desplegados en máquinas virtuales (VM) o contenedores.Servicios Independientes: Cada servicio crítico se levanta en un contenedor o máquina virtual distinta.Web/Base de Datos: Aloja el servidor HTTP y el motor de datos.Gestión y Monitoreo: Aloja herramientas de control centralizado.Seguridad: Servidor cortafuegos o IDS (Sistema de Detección de Intrusos).2. Capa Física / Recursos AnfitriónHardware Base: La computadora física o servidor (con procesador compatible con virtualización y suficiente memoria RAM) que soporta el laboratorio.Hipervisor / Motor de Contenedores: Software encargado de la virtualización. Las herramientas estándar de la industria incluyen:VirtualBox o VMware Workstation para equipos de escritorio.

## Propósito

- Conocer el entorno de Linux server, y algunas configuraciones iniciales básicas.
- Mostrar como operar Linux server a través de la "CLI" o consola de comandos.
- Mostrar los primeros paso luego de instalar Linux server.

> El wiki contiene imágenes del proceso de configuración para apoyar en el proceso y sea mas amigable al usuario lector.
