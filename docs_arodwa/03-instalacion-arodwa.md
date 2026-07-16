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
para que los ajustes de red tengan efecto en el sistema operativo aplicar: 
`sudo netplan apply`

![](public/img-arodwa/aplico-yaml3-netplan.png)

## Configurando reglas de firewall

![](public/img-arodwa/reglas-firewall.png)

Verificar estado de las reglas de firewall
![](public/img-arodwa/verificar-estado-fw.png)

### Explicación breve de los comandos:

1. Establecer las políticas predeterminadas por defecto, lo más seguro es bloquear todas las conexiones entrantes y permitir las salientes.bashsudo ufw default deny incoming
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