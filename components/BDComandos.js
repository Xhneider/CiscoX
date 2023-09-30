export default comandosDeConfiguracion = [
  [
    {
      id: 0,
      titulo: 'Ir al modo EXEC Usuario',
      pasos:
        "1. Conectarse al Switch por consola.\n2. En el Hyperterminal, introducir la contraseña inicial (definida en 'contraseña de consola').",
      comando: "Switch> (Ingresa 'N/A' sin comandos en este modo)",
      concepto:
        "En un switch Cisco u otros dispositivos de red similares, el comando 'enable' se utiliza para ingresar al modo EXEC privilegiado, también conocido como 'modo privilegiado' o 'modo enable'. Este modo es un nivel superior de acceso que brinda más control y capacidad de configuración en comparación con el modo EXEC de usuario. Al ingresar al modo EXEC privilegiado, el usuario obtiene acceso a funciones y comandos avanzados que pueden modificar la configuración y administrar el dispositivo de red.",
    },
    {
      id: 1,
      titulo: 'Ir al modo EXEC privilegiado',
      pasos:
        "1. En el modo EXEC Usuario, introducir 'enable'.\n2. Ingresar la contraseña para este modo (definida en 'contraseña secret').",
      comando: 'Switch# enable',
      concepto:
        "El modo EXEC privilegiado es un nivel superior de acceso en un switch Cisco. Para acceder a este modo, se utiliza el comando 'enable'. En este modo, los usuarios pueden realizar tareas de administración avanzada y configuración del dispositivo de red. La contraseña para este modo se configura previamente y es necesaria para garantizar la seguridad.",
    },
    {
      id: 2,
      titulo: 'Ir al modo Configuración Global',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'configure terminal'.",
      comando: 'Switch(config)# configure terminal',
      concepto:
        "El modo Configuración Global es un nivel más profundo de configuración en un switch Cisco. Para acceder a este modo, se utiliza el comando 'configure terminal'. En este modo, los usuarios pueden realizar cambios en la configuración global del dispositivo, como configurar interfaces y ajustar parámetros de red.",
    },
    {
      id: 3,
      titulo:
        'Ir al modo de configuración de puertos \n(desde configuración global)',
      pasos:
        "1. En el modo Configuración Global, usar el comando 'interface' seguido del nombre del puerto o VLAN a configurar.\n2. Una vez dentro del modo de configuración de interfaz, ingresar los comandos necesarios para configurar ese puerto o VLAN específico.",
      comando: 'Switch(config)# interface [nombre_puerto_o_VLAN]',
      concepto:
        "El modo de configuración de puertos permite a los administradores de red configurar parámetros específicos de un puerto en un switch Cisco. Para acceder a este modo desde el modo Configuración Global, se utiliza el comando 'interface' seguido del nombre del puerto o VLAN que se desea configurar. En este modo, se pueden ajustar opciones individuales para ese puerto o VLAN.",
    },
    {
      id: 4,
      titulo: 'Configurar el nombre de host del switch',
      pasos:
        "Ingresar al modo EXEC privilegiado con el comando 'enable'.\nAcceder al modo de configuración global con 'configure terminal' o 'conf t'.\nConfigurar el nombre de host utilizando el comando 'hostname' seguido del nombre deseado.",
      comando:
        'Switch> enable\nSwitch# configure terminal\nSwitch(config)# hostname CustomerSwitch\n',
      concepto:
        "En un switch Cisco u otros dispositivos de red similares, el comando 'hostname' se utiliza para configurar el nombre de host del dispositivo. El nombre de host es un identificador amigable que se utiliza para distinguir el dispositivo en la red.",
    },

    {
      id: 5,
      titulo: 'Configurar la contraseña del modo privilegiado y secreto',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t'\nConfigurar la contraseña del modo privilegiado con 'enable password'\nConfigurar la contraseña secreta del modo privilegiado con 'enable secret'",
      comando:
        'Switch(config)# enable password cisco\nSwitch(config)# enable secret class',
      concepto:
        "En un switch Cisco, la configuración de contraseñas es esencial para garantizar la seguridad. La contraseña del modo privilegiado, establecida con 'enable password', permite el acceso al modo EXEC privilegiado. La contraseña secreta del modo privilegiado, configurada con 'enable secret', proporciona una capa adicional de seguridad.",
    },
    {
      id: 6,
      titulo: 'Configurar la contraseña de consola',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t'\nAcceder a la configuración de la línea de consola con 'line console 0',\nConfigurar la contraseña de consola utilizando el comando 'password' y habilitar la autenticación con 'login'.",
      comando:
        'Switch(config)# line console 0\nSwitch(config-line)# password cisco\nSwitch(config-line)# login\nSwitch(config-line)# exit',
      concepto:
        'La contraseña de consola en un switch Cisco se configura para proteger el acceso al dispositivo a través de la conexión por consola. Esta contraseña se utiliza para autenticar a los usuarios que intentan acceder al modo EXEC privilegiado a través de la consola física.',
    },
    {
      id: 7,
      titulo: 'Configurar la contraseña de vty',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t',\nAcceder a la configuración de líneas virtuales (vty) con 'line vty 0 15'.\nConfigurar la contraseña de vty utilizando el comando 'password' y habilitar la autenticación con 'login'\nEncriptar las contraseñas con 'service password-encryption' en la configuración global.",

      comando:
        'Switch(config)# line vty 0 15\nSwitch(config-line)# password cisco\nSwitch(config-line)# login\nSwitch(config-line)# exit\nSwitch(config)# service password-encryption',
      concepto:
        "En un switch Cisco, las contraseñas de vty se configuran para proteger el acceso remoto al dispositivo a través de conexiones Telnet o SSH. Estas contraseñas permiten autenticar a los usuarios que intentan acceder al switch de forma remota. La encriptación de contraseñas con 'service password-encryption' mejora la seguridad al ocultar las contraseñas en texto claro en la configuración.",
    },
    {
      id: 8,
      titulo: 'Configurar una dirección IP en la interfaz VLAN99',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t'\nAcceder a la interfaz VLAN99 con el comando 'interface VLAN99'\nAsignar una dirección IP utilizando el comando 'ip address' con la IP y la máscara deseada\nActivar la interfaz con 'no shutdown",

      comando:
        'Switch(config)# interface VLAN99\nSwitch(config-if)# ip address 192.168.1.5 255.255.255.0\nSwitch(config-if)# no shutdown\nSwitch(config-if)# exit',
      concepto:
        'En un switch Cisco, la configuración de una dirección IP en una interfaz VLAN permite que el dispositivo sea accesible a través de la red. Esto es fundamental para la gestión y la conectividad en la red local y para permitir el acceso remoto al switch.',
    },
    {
      id: 9,
      titulo: 'Configurar el gateway por defecto',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t'\nAsignar la IP de la interfaz LAN del router como gateway del switch con 'ip default-gateway' seguido de la IP del router.",

      comando: 'Switch(config)# ip default-gateway 192.168.1.1',
      concepto:
        'El gateway por defecto en un switch Cisco se configura para permitir que el dispositivo envíe tráfico fuera de la red local hacia otras redes o hacia Internet a través de un router. Esta configuración es esencial para el enrutamiento de tráfico.',
    },
    {
      id: 10,
      titulo: 'Configuración del Reloj',
      pasos:
        "Ingresar al modo EXEC privilegiado.\nConfigurar la hora, día, mes y año utilizando el comando 'clock set'.",
      comando:
        'Switch# clock set hh:mm:ss día mes año\nEjemplo: Switch# clock set 22:58:00 25 NOV 2011',
      concepto:
        'La configuración del reloj en un switch Cisco es importante para mantener un registro preciso del tiempo en el dispositivo. Esto es fundamental para sincronizar eventos y registros en la red, así como para programar tareas y eventos en el switch.',
    },
    {
      id: 11,
      titulo: 'Configurar y probar el mensaje MOTD',
      pasos:
        "Ingresar al modo de configuración global con 'configure terminal' o 'conf t'.\nConfigurar el mensaje del día (MOTD) con el comando 'banner motd' seguido del texto deseado, utilizando un carácter delimitante antes y después del texto.\nAsegurarse de no agregar espacios antes o después del texto del mensaje.\nSalir de la configuración y verificar que el mensaje se muestra al volver a iniciar sesión.",

      comando:
        'Switch(config)# banner motd &Authorized Access Only&\nSwitch(config)# end (o exit)',
      concepto:
        'El mensaje del día (MOTD) en un switch Cisco se configura para mostrar un mensaje de advertencia o información importante a los usuarios que inician sesión en el dispositivo. Este mensaje se utiliza para comunicar políticas de acceso o notificaciones importantes.',
    },
    {
      id: 12,
      titulo: 'Guardar el contenido del archivo de configuración en NVRAM',
      pasos:
        "Ejecutar el comando 'copy running-config startup-config' para guardar la configuración en la NVRAM\n'Nota: Es importante guardar una copia de seguridad en la NVRAM siempre que se realicen configuraciones en el switch para evitar pérdida de cambios en reinicios.",
      comando: 'Switch# copy running-config startup-config',
      concepto:
        "En un switch Cisco, para preservar los cambios realizados en la configuración, se utiliza el comando 'copy running-config startup-config' para copiar la configuración actual de la memoria RAM (running-config) a la memoria no volátil (NVRAM). Esto garantiza que los cambios persistan incluso después de reiniciar el dispositivo.",
    },
    {
      id: 13,
      titulo: 'Guardar el archivo de seguridad con otro nombre',
      pasos:
        "Ejecutar el comando 'copy startup-config flash:nombre_de_archivo' para guardar una copia de seguridad con un nombre personalizado.",
      comando: 'Switch# copy startup-config flash:prueba.bak1',
      concepto:
        "En un switch Cisco, para realizar copias de seguridad adicionales de la configuración, se puede utilizar el comando 'copy startup-config' con un nombre de archivo personalizado. Esto es útil para tener múltiples versiones de la configuración guardadas con nombres descriptivos.",
    },
    {
      id: 14,
      titulo: 'Restauración de un archivo de configuración guardado',
      pasos:
        "Copiar un archivo guardado como archivo de inicio con 'copy flash:prueba.bak1 startup-config'.\nEjecutar 'reload' para reiniciar el switch y cargar la nueva configuración.",

      comando: 'Switch# copy flash:prueba.bak1 startup-config\nSwitch# reload',
      concepto:
        "En un switch Cisco, la restauración de una configuración previamente guardada implica copiar un archivo de configuración guardado (por ejemplo, una copia de seguridad) en la configuración activa utilizando el comando 'copy flash'. Luego, se reinicia el switch con 'reload' para aplicar la configuración restaurada.",
    },
    {
      id: 15,
      titulo:
        'Copia de respaldo de los archivos de configuración en un servidor TFTP',
      pasos:
        "Utilizar el comando 'copy system:running-config tftp://172.16.2.155/tokyo-config' para copiar el archivo de configuración a un servidor TFTP.",
      comando:
        'Switch# copy system:running-config tftp://172.16.2.155/tokyo-config',
      concepto:
        "En un switch Cisco, la copia de respaldo de la configuración en un servidor TFTP se realiza mediante el comando 'copy', que envía una copia de la configuración actual al servidor TFTP especificado. Esto es útil para mantener copias de seguridad externas de la configuración del dispositivo.",
    },
    {
      id: 16,
      titulo: 'Restauración de archivo de configuración de un servidor TFTP',
      pasos:
        "Usar el comando 'copy tftp://172.16.2.155/tokyo-config system:running-config' para restaurar un archivo de configuración desde un servidor TFTP.",
      comando: [
        'Switch# copy tftp://172.16.2.155/tokyo-config system:running-config',
      ],
      concepto:
        "En un switch Cisco, la restauración de la configuración desde un servidor TFTP implica copiar un archivo de configuración previamente respaldado en el dispositivo desde el servidor TFTP utilizando el comando 'copy'. Esto es útil en situaciones en las que se necesita recuperar una configuración anterior o en un dispositivo de reemplazo.",
    },
    {
      id: 17,
      titulo: 'Ver la información IOS de Cisco',
      pasos: null,
      comando: 'Switch> show version',
      concepto:
        "El comando 'show version' en un switch Cisco se utiliza para mostrar información detallada sobre el sistema operativo IOS (Internetwork Operating System) que se ejecuta en el dispositivo. Esto incluye la versión del software, la memoria disponible, la configuración de hardware y otra información relevante del sistema.",
    },
    {
      id: 18,
      titulo: 'Ver el archivo de configuración activa actual del switch',
      pasos: null,
      comando: 'Switch# show running-config',
      concepto:
        "El comando 'show running-config' en un switch Cisco se utiliza para mostrar la configuración actual que está en ejecución en el dispositivo. Esta configuración refleja loscomandoque están configurados y en uso en ese momento en el switch.",
    },
    {
      id: 19,
      titulo: 'Ver el contenido actual de la NVRAM',
      pasos: null,
      comando: 'Switch# show startup-config',
      concepto:
        "El comando 'show startup-config' en un switch Cisco se utiliza para mostrar el contenido actual de la memoria no volátil (NVRAM). La NVRAM almacena la configuración que se carga automáticamente cuando el switch se inicia. Mostrar el contenido de la NVRAM permite ver la configuración que persistirá después de un reinicio.",
    },
    {
      id: 20,
      titulo: 'Ver la configuración de un determinado puerto',
      pasos: null,
      comando:
        'Switch# show interface fastethernet 0/XX (XX el número de puerto 1, 10, 18, etc.)',
      concepto:
        'Ver la configuración de un determinado puerto generalmente se refiere a obtener información sobre el estado y las propiedades de un puerto específico en un dispositivo o sistema. Los puertos son puntos de conexión que permiten la comunicación entre dispositivos y aplicaciones En el contexto de la configuración de puertos, esto puede incluir detalles como el número de puerto, el protocolo utilizado (TCP o UDP), el estado de la conexión y otros parámetros relevantes.',
    },
    {
      id: 21,
      titulo: 'Asignación de puertos a una VLAN',
      pasos:
        "1. Accede al modo EXEC privilegiado con el comando 'enable'.\n2. Accede al modo de configuración global con 'configure terminal' o 'conf t'.\n3. Ve al modo de configuración de interfaz del puerto que deseas asignar a una VLAN con 'interface fastethernet 0/X' (donde X es el número del puerto).\n4. Asigna una VLAN al puerto con el comando 'switchport access vlan [número]' (reemplaza '[número]' por el ID de la VLAN que deseas asignar).\n5. Repite los pasos 3 y 4 para cada puerto que desees asignar a la misma o diferentes VLANs.\n6. Para asignar un rango de puertos a una VLAN, utiliza el comando 'interface range fastethernet 0/X - XX' y luego 'switchport access vlan [número]' para asignar la VLAN al rango.",
      comando:
        'Switch> enable\nSwitch# configure terminal\nSwitch(config)# interface fastethernet 0/X\nSwitch(config-if)# switchport access vlan [número]\nSwitch(config)# interface range fastethernet 0/X - XX\nSwitch(config-if-range)# switchport access vlan [número]',
      concepto:
        "La asignación de puertos a una VLAN en un switch Cisco es un proceso importante en la administración de redes. Por defecto, todos los puertos pertenecen a la VLAN1. Para asignar puertos a una VLAN específica, debes acceder al modo de configuración y utilizar el comando 'switchport access vlan' seguido del número de VLAN deseado. Esto permite segmentar la red en grupos lógicos y controlar el tráfico de datos entre ellos.",
    },
    {
      id: 22,
      titulo: 'Configuracion de Mac estatica ',
      pasos:
        "1. Accede al modo de configuración global con 'configure terminal' o 'conf t'.\n2. En el modo de configuración global, utiliza el comando 'mac-address-table static [dirección MAC] vlan [número] interface fastethernet 0/X' (donde X es el número del puerto) para configurar una dirección MAC estática en un puerto específico.\n3. Para eliminar una MAC estática, utiliza el comando 'no mac-address-table static [dirección MAC] vlan [número] interface fastethernet 0/X'.",
      comando:
        'Switch# configure terminal\nSwitch(config)# mac-address-table static [dirección MAC] vlan [número] interface fastethernet 0/X\nSwitch(config)# no mac-address-table static [dirección MAC] vlan [número] interface fastethernet 0/X',
      concepto:
        'La seguridad de puertos con una dirección MAC estática es una medida importante para controlar qué dispositivos pueden conectarse a un puerto específico en un switch Cisco. Al configurar una asignación estática de dirección MAC, se limita el acceso a un puerto a un dispositivo específico, lo que mejora la seguridad de la red al prevenir conexiones no autorizadas. Esto es útil en entornos donde se requiere un alto nivel de seguridad.',
    },
    {
      id: 23,
      titulo: 'Agregar Seguridad de Puertos',
      pasos:
        "1. Accede al modo de configuración de interfaz del puerto que deseas asegurar con 'interface fastethernet 0/X' (donde X es el número del puerto).\n2. Habilita la seguridad del puerto con el comando 'switchport port-security'.\n3. Configura la cantidad máxima de direcciones MAC permitidas con 'switchport port-security maximum [número]'.\n4. Habilita la opción de agregar direcciones MAC automáticamente a la configuración en ejecución con 'switchport port-security mac-address sticky'.\n5. Configura el puerto para desactivarse automáticamente en caso de infracción de seguridad con 'switchport port-security violation shutdown'.\n6. Verifica la configuración de seguridad del puerto con 'show port-security interface fastethernet 0/X'.",
      comando:
        'Switch(config-if)# interface fastethernet 0/X\nSwitch(config-if)# switchport port-security\nSwitch(config-if)# switchport port-security maximum [número]\nSwitch(config-if)# switchport port-security mac-address sticky\nSwitch(config-if)# switchport port-security violation shutdown\nSwitch# show port-security interface fastethernet 0/X',

      concepto:
        'La seguridad de puertos con una dirección MAC estática es una medida importante para controlar qué dispositivos pueden conectarse a un puerto específico en un switch Cisco. Al configurar una asignación estática de dirección MAC, se limita el acceso a un puerto a un dispositivo específico, lo que mejora la seguridad de la red al prevenir conexiones no autorizadas. Esto es útil en entornos donde se requiere un alto nivel de seguridad.',
    },
    {
      id: 24,
      titulo: 'Activar/Desactivar un puerto FastEthernet',
      pasos:
        "1. Accede al modo de configuración de interfaz del puerto que deseas activar o desactivar con 'interface fastethernet 0/X' (donde X es el número del puerto).\n2. Utiliza el comando 'shutdown' para desactivar el puerto o 'no shutdown' para activarlo.",
      comando:
        'Switch(config-if)# interface fastethernet 0/X\nSwitch(config-if)# shutdown\nSwitch(config-if)# no shutdown',
      concepto:
        'La activación y desactivación de puertos FastEthernet es una operación común en la administración de redes. Puedes desactivar un puerto para aislarlo de la red o realizar tareas de mantenimiento, y luego volver a activarlo cuando sea necesario. Esto proporciona flexibilidad en la administración de la conectividad de red.',
    },
    {
      id: 25,
      titulo: 'Configuración de Enlace Troncal entre Dos Switches',
      pasos:
        "1. Accede al modo de configuración global con 'configure terminal' o 'conf t'.\n2. Accede al modo de configuración de interfaz del puerto Gigabit Ethernet que se utilizará como enlace troncal con 'interface gigabitethernet 0/X' (donde X es el número del puerto).\n3. Configura el puerto como enlace troncal con el comando 'switchport mode trunk'.",
      comando:
        'Switch(config)# interface gigabitethernet 0/X\nSwitch(config-if)# switchport mode trunk',

      concepto:
        'Un enlace troncal (trunk link) entre dos switches se configura en un puerto Gigabit Ethernet y permite el paso de múltiples VLANs a través de ese enlace. Esto facilita la comunicación entre switches y la extensión de VLANs en una red.',
    },
    {
      id: 26,
      titulo: 'Borrado de la Configuración del Switch y Reinicio',
      pasos:
        "1. Accede al modo EXEC privilegiado ingresando el'enable'. Si se te solicita una contraseña, ingresa 'class'.\n2. Elimina el archivo de información de la base de datos de la VLAN utilizando el'delete flash:vlan.dat'.\n3. Confirma la eliminación del archivo VLAN con 'confirm' (presiona Enter).\n4. Elimina el archivo de configuración de inicio del switch de la NVRAM con el'erase startup-config'.\n5. Confirma la eliminación de la configuración con 'confirm' (presiona Enter).\n6. Verifica que la información de la VLAN se haya eliminado utilizando el'show vlan'. Si la información anterior de la VLAN sigue existiendo (que no sea la administración predeterminada de la VLAN 1), reinicia el switch (hardware) en lugar de ejecutar el'reload'.\n7. Reinicia el software utilizando el'reload'.\n8. Responde 'no' cuando se te pregunte si deseas guardar la configuración modificada.\n9. Confirma el reinicio del switch con 'confirm' (presiona Enter).\n10. El switch se recargará y mostrará un mensaje que indica que se solicitó el reinicio desde la consola.\n11. Cuando aparezca la siguiente solicitud de entrada, responde 'no' para no ingresar al diálogo de configuración inicial.\n12. Presiona Enter para completar el reinicio del switch.",

      comando:
        'Switch> enable\nDelete filename [vlan.dat]? [confirm][Enter]\nSwitch# delete flash:vlan.dat\nSwitch# erase startup-config\nErasing the nvram filesystem will remove all files! Continue? [confirm][Enter]\nSwitch# show vlan\nSwitch(config)# reload\nSystem configuration has been modified. Save? [yes/no]: n\nProceed with reload? [confirm][Enter]\nReload requested by console.\nPress RETURN to get started! [Enter]\nWould you like to enter the initial configuration dialog? [yes/no]: n',
    },
  ],
  [
    /// CONFIGURACION DEL RAUTER
    {
      id: 0,
      titulo: 'Ir al modo EXEC Usuario',
      pasos:
        "1. Conectarse al Router por consola.\n2. En el Hyperterminal, introducir la contraseña inicial (definida en 'contraseña de consola').",
      comando: "Router> (Ingresa 'N/A' sin comandos en este modo)",
      concepto:
        "En un router Cisco u otros dispositivos de red similares, el comando 'enable' se utiliza para ingresar al modo EXEC privilegiado, también conocido como 'modo privilegiado' o 'modo enable'. Este modo es un nivel superior de acceso que brinda más control y capacidad de configuración en comparación con el modo EXEC de usuario. Al ingresar al modo EXEC privilegiado, el usuario obtiene acceso a funciones y comandos avanzados que pueden modificar la configuración y administrar el dispositivo de red.",
    },
    {
      id: 1,
      titulo: 'Ir al modo EXEC privilegiado',
      pasos:
        "1. En el modo EXEC Usuario, introducir 'enable'.\n2. Ingresar la contraseña para este modo (definida en 'contraseña secret').",
      comando: 'Router# enable',
      concepto:
        "El modo EXEC privilegiado es un nivel superior de acceso en un router Cisco. Para acceder a este modo, se utiliza el comando 'enable'. En este modo, los usuarios pueden realizar tareas de administración avanzada y configuración del dispositivo de red. La contraseña para este modo se configura previamente y es necesaria para garantizar la seguridad.",
    },
    {
      id: 2,
      titulo: 'Ir al modo Configuración Global',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'configure terminal'.",
      comando: 'Router(config)# configure terminal',
      concepto:
        "El modo Configuración Global es un nivel más profundo de configuración en un router Cisco. Para acceder a este modo, se utiliza el comando 'configure terminal'. En este modo, los usuarios pueden realizar cambios en la configuración global del dispositivo, como configurar interfaces y ajustar parámetros de red.",
    },
    {
      id: 3,
      titulo: 'Configurar nombre del Router',
      pasos:
        "1. En el modo Configuración Global, introducir 'hostname [nombre_router]'.",
      comando: 'R1(config)# hostname [nombre_router]',
      concepto:
        "El comando 'hostname' se utiliza para configurar el nombre del router. El nombre del router se utiliza para identificar el dispositivo en la red y en la línea de comandos.",
    },
    {
      id: 4,
      titulo: 'Desactivar la búsqueda DNS',
      pasos:
        "1. En el modo Configuración Global, introducir 'no ip domain-lookup'.",
      comando: 'R1(config)# no ip domain-lookup',
      concepto:
        "El comando 'no ip domain-lookup' se utiliza para desactivar la búsqueda DNS en el router. Esto evita que el router intente resolver nombres de dominio cuando se ingresan comandos incorrectos, lo que puede ser útil durante pruebas.",
    },
    {
      id: 5,
      titulo: 'Configurar contraseña del modo EXEC',
      pasos:
        "1. En el modo Configuración Global, introducir 'enable secret [contraseña]'.",
      comando: 'R1(config)# enable secret [contraseña]',
      concepto:
        "El comando 'enable secret' se utiliza para configurar una contraseña para el modo EXEC privilegiado. Esta contraseña es necesaria para acceder al modo EXEC privilegiado desde el modo EXEC de usuario.",
    },
    {
      id: 6,
      titulo: 'Configurar banner MOTD',
      pasos:
        "1. En el modo Configuración Global, introducir 'banner motd [mensaje]'.",
      comando: 'R1(config)# banner motd [mensaje]',
      concepto:
        "El comando 'banner motd' se utiliza para configurar un mensaje del día (MOTD) que se muestra cuando alguien se conecta al router. Puede utilizarse para mostrar un mensaje de advertencia o información importante.",
    },
    {
      id: 7,
      titulo: 'Configurar la línea de consola',
      pasos: "1. En el modo Configuración Global, introducir 'line console 0'.",
      comando: 'R1(config)# line console 0',
      concepto:
        "El comando 'line console' se utiliza para configurar la línea de consola del router, que se utiliza para la administración local del dispositivo.",
    },
    {
      id: 8,
      titulo: 'Configurar contraseña de la línea de consola',
      pasos:
        "1. En el modo de configuración de línea de consola, introducir 'password [contraseña]'.\n2. Habilitar la autenticación con 'login'.\n3. Evitar interrupciones con 'logging synchronous'.",
      comando:
        'R1(config-line)# password [contraseña]\nR1(config-line)# login\nR1(config-line)# logging synchronous',
      concepto:
        'Estos comandos se utilizan para configurar la contraseña de la línea de consola, habilitar la autenticación y evitar que los mensajes IOS interrumpan la entrada por teclado.',
    },
    {
      id: 9,
      titulo: 'Configurar las líneas VTY',
      pasos: "1. En el modo Configuración Global, introducir 'line vty 0 4'.",
      comando: 'R1(config)# line vty 0 4',
      concepto:
        "El comando 'line vty' se utiliza para configurar las líneas de terminal virtual (VTY) que permiten el acceso al router a través de protocolos como Telnet. En este caso, se configuran las líneas VTY del 0 al 4.",
    },
    {
      id: 10,
      titulo: 'Configurar contraseña de las líneas VTY',
      pasos:
        "1. En el modo de configuración de línea VTY, introducir 'password [contraseña]'.\n2. Habilitar la autenticación con 'login'.\n3. Evitar interrupciones con 'logging synchronous'.",
      comando:
        'R1(config-line)# password [contraseña]\nR1(config-line)# login\nR1(config-line)# logging synchronous',
      concepto:
        'Estos comandos se utilizan para configurar la contraseña de las líneas VTY (telnet), habilitar la autenticación y evitar que los mensajes IOS interrumpan la entrada por teclado.',
    },
    {
      id: 11,
      titulo: 'Guardar la configuración',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'copy running-config startup-config'.",
      comando: 'R1# copy running-config startup-config',
      concepto:
        'Este comando se utiliza para guardar la configuración actual en la memoria permanente, de modo que se conserve después de un reinicio.',
    },
    {
      id: 12,
      titulo: 'Guardar la configuración (modo abreviado)',
      pasos: "1. En el modo EXEC privilegiado, introducir 'copy run start'.",
      comando: 'R1# copy run start',
      concepto:
        'Este comando es una forma abreviada de guardar la configuración actual en la memoria permanente del router.',
    },
    {
      id: 13,
      titulo: 'Borrar la configuración de inicio',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'erase startup-config'.",
      comando: 'Router# erase startup-config',
      concepto:
        'Este comando se utiliza para borrar la configuración de inicio, que es la configuración almacenada en la memoria permanente del router.',
    },
    {
      id: 14,
      titulo: 'Recargar la configuración',
      pasos: "1. En el modo EXEC privilegiado, introducir 'reload'.",
      comando: 'Router# reload',
      concepto:
        'Este comando se utiliza para recargar la configuración del router. Puede ser útil después de realizar cambios importantes en la configuración.',
    },
    {
      id: 15,
      titulo: 'Configurar una interfaz Serial',
      pasos:
        "En el modo de configuración global, ingrese a la interfaz Serial utilizando el comando 'interface Serial0/0'.\nConfigure la dirección IP utilizando el comando 'ip address' seguido de la dirección IP y la máscara de subred, por ejemplo: 'ip address 192.168.2.1 255.255.255.0'.\nAsigne una descripción a la interfaz utilizando el comando 'description' si es necesario, por ejemplo: 'description Link to R2'.\nConfigure el reloj (solo en el router que actúa como DCE) con el comando 'clock rate', por ejemplo: 'clock rate 64000'.\nFinalmente, active la interfaz utilizando el comando 'no shutdown'.",

      comando:
        'R1(config)#interface Serial0/0\nR1(config-if)#ip address 192.168.2.1 255.255.255.0\nR1(config-if)#description Link to R2\nR1(config-if)#clock rate 64000\nR1(config-if)#no shutdown',
      concepto:
        'Estos comandos se utilizan para configurar una interfaz Serial en un router Cisco, asignándole una dirección IP, descripción y configuración de reloj si es necesario. Luego, se activa la interfaz para que esté lista para la comunicación.',
    },
    {
      id: 16,
      titulo: 'Configurar una interfaz FastEthernet',
      pasos:
        "En el modo de configuración global, ingrese a la interfaz FastEthernet con el comando 'interface FastEthernet0/0'.\nConfigure la dirección IP utilizando el comando 'ip address', por ejemplo: 'ip address 192.168.1.1 255.255.255.0'.\nAsigne una descripción a la interfaz utilizando el comando 'description', por ejemplo: 'description Link to R1'.\nActive la interfaz utilizando el comando 'no shutdown'.",

      comando:
        'R1(config)#interface FastEthernet0/0\nR1(config-if)#ip address 192.168.1.1 255.255.255.0\nR1(config-if)#description Link to R1\nR1(config-if)#no shutdown',
      concepto:
        'Estos comandos se utilizan para configurar una interfaz FastEthernet en un router Cisco, asignándole una dirección IP, descripción y activándola para la comunicación.',
    },
    {
      id: 17,
      titulo: 'Comandos de Información',
      pasos: null,
      comando:
        'show ip route\nshow interfaces\nshow ip interface brief\nshow ip interface summary\nshow cdp neighbors\nshow cdp neighbors detail\nshow ip protocols',

      concepto:
        'Estos comandos se utilizan para obtener información sobre la configuración y el estado de las interfaces de red, la tabla de enrutamiento, los protocolos de enrutamiento y los dispositivos vecinos.',
    },
    {
      id: 18,
      titulo: 'Comandos para la Creación de Rutas Estáticas',
      pasos:
        "Utilice 'debug ip routing' para mostrar las actualizaciones de rutas si es necesario.\nIngrese al modo de configuración global con 'conf t'.\nConfigure una ruta estática utilizando 'ip route' especificando la red de destino, la máscara de subred y la puerta de enlace.\nPor ejemplo: 'ip route 172.16.1.0 255.255.255.0 172.16.2.2' o 'ip route 172.16.1.0 255.255.255.0 Serial0/0/1'.",
      comando:
        'R1#debug ip routing\nR1#conf t\nR1(config)#ip route 172.16.1.0 255.255.255.0 172.16.2.2\nR1(config)#ip route 172.16.1.0 255.255.255.0 Serial0/0/1',
      concepto:
        'Estos comandos se utilizan para crear rutas estáticas en un router Cisco, lo que permite especificar manualmente cómo se debe enrutar el tráfico hacia una red de destino específica.',
    },
    {
      id: 19,
      titulo: 'Comandos para la Creación de Subinterfaces y Direccionamiento',
      pasos:
        "Para crear subinterfaces VLAN en un puerto FastEthernet, utilice el siguiente formato: 'interface FastEthernet0/1.X', donde 'X' es el número de subinterfaz VLAN.\nAsigne encapsulación VLAN utilizando 'encapsulation dot1Q' seguido del número de VLAN.\nConfigure una dirección IP en la subinterfaz utilizando 'ip address' con la IP y máscara de subred correspondientes.",

      comando:
        'Interface FastEthernet0/0.1\nEncapsulation dot1q 10\nIP address 192.168.10.1 255.255.255.0',

      concepto:
        'Estos comandos se utilizan para crear subinterfaces VLAN en un puerto FastEthernet de un router Cisco, lo que permite que el router interactúe con múltiples VLANs en una sola interfaz física.',
    },
    {
      id: 20,
      titulo: 'Comandos para la Configuración de RIPv1/v2',
      pasos:
        "Ingrese al modo de configuración de router RIP con 'router rip'.\nConfigure la versión de RIP con 'version 2' si es necesario.\nUtilice 'network' para configurar las redes directamente conectadas al router en RIP.\nPuede utilizar 'passive-interface' para detener actualizaciones de enrutamiento desde una interfaz específica.\nPara propagar una ruta por defecto, use 'default-information originate'.\nDesactive el resumen automático de rutas en RIPv2 con 'no auto-summary'.",

      comando:
        'R1(config)#router rip\nR1(config-router)#version 2\nR1(config-router)#network 192.168.4.0\nR1(config-router)#passive-interface FastEthernet0/0\nR1(config-router)#default-information originate\nR1(config)#no router rip',

      concepto:
        'Estos comandos se utilizan para configurar el protocolo de enrutamiento RIP en un router Cisco, especificando las redes que participarán en el proceso de enrutamiento, la versión del protocolo y otros parámetros.',
    },
    {
      id: 21,
      titulo: 'Comandos para la Configuración de OSPF',
      pasos:
        "Ingrese al modo de configuración de router OSPF con 'router ospf' y asigne un número de proceso.\nUtilice 'network' para configurar las redes directamente conectadas a OSPF, especificando la dirección de red y el área correspondiente.",

      comando:
        'R1(config)#router ospf 1\nR1(config-router)#network 192.168.4.0 0.0.0.7 area 0\nR1(config)#no router ospf 1',

      concepto:
        'Estos comandos se utilizan para configurar el protocolo de enrutamiento OSPF en un router Cisco, especificando las redes que participarán en el proceso de enrutamiento y el área a la que pertenecen.',
    },
    {
      id: 22,
      titulo: 'Comando para Borrar la Tabla de Enrutamiento',
      pasos:
        "Utilice 'clear ip route *' para borrar todas las entradas de la tabla de enrutamiento y forzar una actualización.",
      comando: 'R1#clear ip route *',
      concepto:
        'Este comando se utiliza para borrar todas las entradas de la tabla de enrutamiento en un router Cisco, lo que fuerza una actualización de las rutas.',
    },
  ],
];
