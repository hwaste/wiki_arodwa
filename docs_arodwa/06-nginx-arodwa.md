# Instalar NGINX en Ubuntu Server

> 1. Actualizar el sistema
sudo apt update && sudo apt upgrade -y

Actualiza la lista de paquetes e instala las últimas actualizaciones.

> 2. Instalar NGINX
sudo apt install nginx -y

Descarga e instala el servidor web NGINX.

3. Verificar que el servicio esté funcionando
sudo systemctl status nginx

Comprueba que NGINX esté activo. Si aparece active (running), la instalación fue correcta.

4. Habilitar el firewall (UFW)

Permitir conexiones HTTP:

sudo ufw allow 'Nginx HTTP'

O bien:

sudo ufw allow 80/tcp

Si aún no está habilitado:

sudo ufw enable

Verificar reglas:

sudo ufw status
