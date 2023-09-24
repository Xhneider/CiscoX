export default comandosDeConfiguracion = [
  [
    {
      id:0,
      titulo: 'Ir al modo EXEC Usuario',
      pasos:
        "1. Conectarse al Switch por consola.\n2. En el Hyperterminal, introducir la contraseña inicial (definida en 'contraseña de consola').",
      comando: "Switch> (Ingresa 'N/A' sin comandos en este modo)",
      concepto:
        "En un switch Cisco u otros dispositivos de red similares, el comando 'enable' se utiliza para ingresar al modo EXEC privilegiado, también conocido como 'modo privilegiado' o 'modo enable'. Este modo es un nivel superior de acceso que brinda más control y capacidad de configuración en comparación con el modo EXEC de usuario. Al ingresar al modo EXEC privilegiado, el usuario obtiene acceso a funciones y comandos avanzados que pueden modificar la configuración y administrar el dispositivo de red.",
    },
    {
      id:1,
      titulo: 'Ir al modo EXEC privilegiado',
      pasos:
        "1. En el modo EXEC Usuario, introducir 'enable'.\n2. Ingresar la contraseña para este modo (definida en 'contraseña secret').",
      comando: 'Switch# enable',
      concepto:
        "El modo EXEC privilegiado es un nivel superior de acceso en un switch Cisco. Para acceder a este modo, se utiliza el comando 'enable'. En este modo, los usuarios pueden realizar tareas de administración avanzada y configuración del dispositivo de red. La contraseña para este modo se configura previamente y es necesaria para garantizar la seguridad.",
    },
    {
      id:2,
      titulo: 'Ir al modo Configuración Global',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'configure terminal'.",
      comando: 'Switch(config)# configure terminal',
      concepto:
        "El modo Configuración Global es un nivel más profundo de configuración en un switch Cisco. Para acceder a este modo, se utiliza el comando 'configure terminal'. En este modo, los usuarios pueden realizar cambios en la configuración global del dispositivo, como configurar interfaces y ajustar parámetros de red.",
    },
    {
      id:3,
      titulo:
        'Ir al modo de configuración de puertos \n(desde configuración global)',
      pasos:
        "1. En el modo Configuración Global, usar el comando 'interface' seguido del nombre del puerto o VLAN a configurar.\n2. Una vez dentro del modo de configuración de interfaz, ingresar los comandos necesarios para configurar ese puerto o VLAN específico.",
      comando: 'Switch(config)# interface [nombre_puerto_o_VLAN]',
      concepto:
        "El modo de configuración de puertos permite a los administradores de red configurar parámetros específicos de un puerto en un switch Cisco. Para acceder a este modo desde el modo Configuración Global, se utiliza el comando 'interface' seguido del nombre del puerto o VLAN que se desea configurar. En este modo, se pueden ajustar opciones individuales para ese puerto o VLAN.",
    },
  ],[
    /// CONFIGURACION DEL RAUTER
    {
      id:0,
      titulo: 'Ir al modo EXEC Usuario',
      pasos:
        "1. Conectarse al Router por consola.\n2. En el Hyperterminal, introducir la contraseña inicial (definida en 'contraseña de consola').",
      comando: "Router> (Ingresa 'N/A' sin comandos en este modo)",
      concepto:
        "En un router Cisco u otros dispositivos de red similares, el comando 'enable' se utiliza para ingresar al modo EXEC privilegiado, también conocido como 'modo privilegiado' o 'modo enable'. Este modo es un nivel superior de acceso que brinda más control y capacidad de configuración en comparación con el modo EXEC de usuario. Al ingresar al modo EXEC privilegiado, el usuario obtiene acceso a funciones y comandos avanzados que pueden modificar la configuración y administrar el dispositivo de red.",
    },
    {
      id:1,
      titulo: 'Ir al modo EXEC privilegiado',
      pasos:
        "1. En el modo EXEC Usuario, introducir 'enable'.\n2. Ingresar la contraseña para este modo (definida en 'contraseña secret').",
      comando: 'Router# enable',
      concepto:
        "El modo EXEC privilegiado es un nivel superior de acceso en un router Cisco. Para acceder a este modo, se utiliza el comando 'enable'. En este modo, los usuarios pueden realizar tareas de administración avanzada y configuración del dispositivo de red. La contraseña para este modo se configura previamente y es necesaria para garantizar la seguridad.",
    },
    {
      id:2,
      titulo: 'Ir al modo Configuración Global',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'configure terminal'.",
      comando: 'Router(config)# configure terminal',
      concepto:
        "El modo Configuración Global es un nivel más profundo de configuración en un router Cisco. Para acceder a este modo, se utiliza el comando 'configure terminal'. En este modo, los usuarios pueden realizar cambios en la configuración global del dispositivo, como configurar interfaces y ajustar parámetros de red.",
    },
    {
      id:3,
      titulo: 'Configurar nombre del Router',
      pasos:
        "1. En el modo Configuración Global, introducir 'hostname [nombre_router]'.",
      comando: 'R1(config)# hostname [nombre_router]',
      concepto:
        "El comando 'hostname' se utiliza para configurar el nombre del router. El nombre del router se utiliza para identificar el dispositivo en la red y en la línea de comandos.",
    },
    {
      id:4,
      titulo: 'Desactivar la búsqueda DNS',
      pasos:
        "1. En el modo Configuración Global, introducir 'no ip domain-lookup'.",
      comando: 'R1(config)# no ip domain-lookup',
      concepto:
        "El comando 'no ip domain-lookup' se utiliza para desactivar la búsqueda DNS en el router. Esto evita que el router intente resolver nombres de dominio cuando se ingresan comandos incorrectos, lo que puede ser útil durante pruebas.",
    },
    {
      id:5,
      titulo: 'Configurar contraseña del modo EXEC',
      pasos:
        "1. En el modo Configuración Global, introducir 'enable secret [contraseña]'.",
      comando: 'R1(config)# enable secret [contraseña]',
      concepto:
        "El comando 'enable secret' se utiliza para configurar una contraseña para el modo EXEC privilegiado. Esta contraseña es necesaria para acceder al modo EXEC privilegiado desde el modo EXEC de usuario.",
    },
    {
      id:6,
      titulo: 'Configurar banner MOTD',
      pasos:
        "1. En el modo Configuración Global, introducir 'banner motd [mensaje]'.",
      comando: 'R1(config)# banner motd [mensaje]',
      concepto:
        "El comando 'banner motd' se utiliza para configurar un mensaje del día (MOTD) que se muestra cuando alguien se conecta al router. Puede utilizarse para mostrar un mensaje de advertencia o información importante.",
    },
    {
      id:7,
      titulo: 'Configurar la línea de consola',
      pasos: "1. En el modo Configuración Global, introducir 'line console 0'.",
      comando: 'R1(config)# line console 0',
      concepto:
        "El comando 'line console' se utiliza para configurar la línea de consola del router, que se utiliza para la administración local del dispositivo.",
    },
    { id:8,
      titulo: 'Configurar contraseña de la línea de consola',
      pasos:
        "1. En el modo de configuración de línea de consola, introducir 'password [contraseña]'.\n2. Habilitar la autenticación con 'login'.\n3. Evitar interrupciones con 'logging synchronous'.",
      comando:
        'R1(config-line)# password [contraseña]\nR1(config-line)# login\nR1(config-line)# logging synchronous',
      concepto:
        'Estos comandos se utilizan para configurar la contraseña de la línea de consola, habilitar la autenticación y evitar que los mensajes IOS interrumpan la entrada por teclado.',
    },
    {
      id:9,
      titulo: 'Configurar las líneas VTY',
      pasos: "1. En el modo Configuración Global, introducir 'line vty 0 4'.",
      comando: 'R1(config)# line vty 0 4',
      concepto:
        "El comando 'line vty' se utiliza para configurar las líneas de terminal virtual (VTY) que permiten el acceso al router a través de protocolos como Telnet. En este caso, se configuran las líneas VTY del 0 al 4.",
    },
    {
      id:10,
      titulo: 'Configurar contraseña de las líneas VTY',
      pasos:
        "1. En el modo de configuración de línea VTY, introducir 'password [contraseña]'.\n2. Habilitar la autenticación con 'login'.\n3. Evitar interrupciones con 'logging synchronous'.",
      comando:
        'R1(config-line)# password [contraseña]\nR1(config-line)# login\nR1(config-line)# logging synchronous',
      concepto:
        'Estos comandos se utilizan para configurar la contraseña de las líneas VTY (telnet), habilitar la autenticación y evitar que los mensajes IOS interrumpan la entrada por teclado.',
    },
    {
      id:11,
      titulo: 'Guardar la configuración',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'copy running-config startup-config'.",
      comando: 'R1# copy running-config startup-config',
      concepto:
        'Este comando se utiliza para guardar la configuración actual en la memoria permanente, de modo que se conserve después de un reinicio.',
    },
    {
      id:12,
      titulo: 'Guardar la configuración (modo abreviado)',
      pasos: "1. En el modo EXEC privilegiado, introducir 'copy run start'.",
      comando: 'R1# copy run start',
      concepto:
        'Este comando es una forma abreviada de guardar la configuración actual en la memoria permanente del router.',
    },
    {
      id:13,
      titulo: 'Borrar la configuración de inicio',
      pasos:
        "1. En el modo EXEC privilegiado, introducir 'erase startup-config'.",
      comando: 'Router# erase startup-config',
      concepto:
        'Este comando se utiliza para borrar la configuración de inicio, que es la configuración almacenada en la memoria permanente del router.',
    },
    {
      id:14,
      titulo: 'Recargar la configuración',
      pasos: "1. En el modo EXEC privilegiado, introducir 'reload'.",
      comando: 'Router# reload',
      concepto:
        'Este comando se utiliza para recargar la configuración del router. Puede ser útil después de realizar cambios importantes en la configuración.',
    }
  ],
];
