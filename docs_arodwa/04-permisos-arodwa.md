## Permisos por línea de comandos

Para el ejemplo se crea un directorio de nombre "privado" y un archivo "nota" para asignar permisos...
Aplicando los comandos chmod, chown y un permiso especial

![](/img-arodwa/1mkdir-demo-mkdir-privado.png)
Crea el directorio demo, entra en él, crea el archivo nota.txt y el directorio privado.

![](/img-arodwa/2chmod600-nota.png)
Asigna permisos 600 al archivo: el propietario puede leer y escribir; el grupo y otros usuarios no tienen acceso.

![](/img-arodwa/3chmod-u+x.png)
Modifica los permisos del directorio privado: agrega permiso de ejecución al propietario y elimina todos los permisos al grupo y a otros usuarios, dejando el directorio como privado.

![](/img-arodwa/4sudo-chown-root.png)
Cambia el propietario y el grupo del archivo nota.txt al usuario root.

![](/img-arodwa/5sudo-mkdir-2275.png)
Crea el directorio /srv/compartido y le asigna permisos 2775, activando setgid para que los archivos nuevos hereden el grupo del directorio.

![](/img-arodwa/6sudo-mkdir+t.png)
Activa el sticky bit en /tmp, permitiendo que cada usuario elimine únicamente sus propios archivos.

![](/img-arodwa/7ls-ld.png)

Muestra los permisos, propietario, grupo y atributos de ambos directorios para verificar que setgid (s) y sticky bit (t) se aplicaron correctamente.

![](/img-arodwa/8permiso-especial-con-setgid.png)

Activa el permiso especial setgid en el directorio /srv/compartido. Esto hace que todos los archivos y subdirectorios creados dentro de él hereden automáticamente el mismo grupo del directorio, en lugar del grupo principal del usuario que los crea.


