# B - Configuración IP inicial, firewall y actualizaciones

Cambiar el nombre del hostname:
`sudo hostnamectl set-hostname srv-wiki`

![](/img-arodwa/hostname1.png)

Aca muestro como cambia el nombre del computador o servidor a srv-wiki, ese nombre es el que identifica al equipo dentro de una red.

aplicar el comando `hostname`
![](/img-arodwa/hostname1.png)

## - Direccionamiento IP

Para ver la información de las tarjetas de red, como las direcciones IP, el estado de la conexión y otros datos relacionados con la red, aplico el comando:

`ip a`

![](/img-arodwa/ip-a.png)
## - Modificar ajustes de red:
en la terminal abrir el archivo de configuración 
"00-installer-config.yaml" con editor nano y permisos de root con "sudo"

`sudo nano /etc/netplan/00-installer-config.yaml`

![](/img-arodwa/sudonano-abrir-yaml.png)

### - Esta es la configuración por defecto
![](/img-arodwa/edito-yaml.png)

### - Se edita el archivo de configuración con los siguientes parámetros respetando la indentación o dará error al intentar aplicar...

![](/img-arodwa/edito-yaml2.png)


### Para que los ajustes de red tengan efecto en el sistema operativo aplicar: 

`sudo netplan apply`

![](/img-arodwa/aplico-yaml3-netplan.png)

## Configurando reglas de firewall

### - Verificar estado de las reglas de firewall, muestra el estado detallado del firewall, indicando si está activo y qué reglas tiene configuradas (puertos permitidos o bloqueados).

`sudo ufw status verbose`

![](/img-arodwa/verificar-estado-fw.png)

## Aplicar todos los comandos que están a continuación:

`sudo ufw default deny incoming`
`sudo ufw default allow outgoing`
`sudo ufw allow ssh`
`sudo ufw enable`
`sudo ufw allow 80/tcp`
`sudo ufw allow 443/tcp`

![](/img-arodwa/reglas-firewall.png)

### Resumen de los comandos:

1. Establecer las políticas predeterminadas por defecto, lo más seguro es bloquear todas las conexiones entrantes y permitir las salientes.
`sudo ufw default deny incoming`
`sudo ufw default allow outgoing`

2. Permitir servicios esenciales (Ej. SSH)Si administras el servidor de forma remota, es obligatorio habilitar el acceso SSH antes de encender el firewall, de lo contrario te bloquearás a ti mismo.
`sudo ufw allow ssh`

3. Habilitar el firewall: activa el cortafuegos y asegúrate de que se inicie automáticamente cada vez que reinicies el servidor.
`sudo ufw enable`

4. Abrir otros puertos necesarios: si estás ejecutando servicios específicos como un servidor web, puedes permitir el tráfico fácilmente:
`HTTP (Web sin encriptar): sudo ufw allow 80/tcp`
`HTTPS (Web segura): sudo ufw allow 443/tcp`

5. Verificar el estado y las reglas activas para comprobar que el firewall está activo y ver qué puertos están abiertos:
`sudo ufw status verbose`

## Actualizaciones

`sudo apt update && sudo apt upgrade -y`

`apt update: actualiza la lista de programas y versiones disponibles en los repositorios.`

![](/img-arodwa/update-aptupdate-aptupgrade.png)


&&: hace que el siguiente comando se ejecute solo si el anterior terminó correctamente.

apt upgrade -y : instala todas las actualizaciones disponibles para los programas ya instalados. La opción -y responde automáticamente "sí" a las preguntas de confirmación.