## B - Instalación y configuración básica

sudo hostnamectl set-hostname srv-wiki
ip a

![](public/img-ardowa/.png)

sudo apt update && sudo apt upgrade -y
sudo ufw allow OpenSSH && sudo ufw allow 80/tcp && sudo ufw enable
sudo ufw status verbose

Cada comando hace lo siguiente:

sudo hostnamectl set-hostname srv-wiki

para ver si se cambió el nombre del hostname:
aplicar el comando `hostname`
![](public/img-arodwa/hostname1.png)

Cambia el nombre del computador o servidor a srv-wiki. Ese nombre es el que identifica al equipo dentro de una red.

`ip a`

Muestra la información de las tarjetas de red, como las direcciones IP, el estado de la conexión y otros datos relacionados con la red.

![](public/img-arodwa/ip-a.png)

`sudo apt update && sudo apt upgrade -y`

`apt update: actualiza la lista de programas y versiones disponibles en los repositorios.`

&&: hace que el siguiente comando se ejecute solo si el anterior terminó correctamente.

apt upgrade -y: instala todas las actualizaciones disponibles para los programas ya instalados. La opción -y responde automáticamente "sí" a las preguntas de confirmación.

sudo ufw allow OpenSSH && sudo ufw allow 80/tcp && sudo ufw enable

Configura el firewall (UFW) para permitir ciertas conexiones:
ufw allow OpenSSH: permite conexiones por SSH, para administrar el servidor de forma remota.
ufw allow 80/tcp: permite el tráfico por el puerto 80, utilizado por los sitios web con HTTP.
ufw enable: activa el firewall con las reglas configuradas.

sudo ufw status verbose
Muestra el estado detallado del firewall, indicando si está activo y qué reglas tiene configuradas (puertos permitidos o bloqueados).

## - Direccionamiento IP

![](public/img-arodwa/edito-yaml.png)

![](public/img-arodwa/edito-yaml2.png)

### Acá tuve que corregir la indentación...
para aplicar los ajustes de red aplicar: 
`sudo netplan apply`

![](public/img-arodwa/aplico-yaml3-netplan.png)