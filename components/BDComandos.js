export default switch_config = [
    {
        "titulo": "Ir al modo EXEC Usuario",
        "pasos": "1. Conectarse al Switch por consola.\n2. En el Hyperterminal, introducir la contraseña inicial (definida en 'contraseña de consola').",
        "comando": "Switch> (Ingresa 'N/A' sin comandos en este modo)",
        "concepto": "En un switch Cisco u otros dispositivos de red similares, el comando 'enable' se utiliza para ingresar al modo EXEC privilegiado, también conocido como 'modo privilegiado' o 'modo enable'. Este modo es un nivel superior de acceso que brinda más control y capacidad de configuración en comparación con el modo EXEC de usuario. Al ingresar al modo EXEC privilegiado, el usuario obtiene acceso a funciones y comandos avanzados que pueden modificar la configuración y administrar el dispositivo de red."
    },
    {
        "titulo": "Ir al modo EXEC privilegiado",
        "pasos": "1. En el modo EXEC Usuario, introducir 'enable'.\n2. Ingresar la contraseña para este modo (definida en 'contraseña secret').",
        "comando": "Switch# enable",
        "concepto": "El modo EXEC privilegiado es un nivel superior de acceso en un switch Cisco. Para acceder a este modo, se utiliza el comando 'enable'. En este modo, los usuarios pueden realizar tareas de administración avanzada y configuración del dispositivo de red. La contraseña para este modo se configura previamente y es necesaria para garantizar la seguridad."
    },
    {
        "titulo": "Ir al modo Configuración Global",
        "pasos": "1. En el modo EXEC privilegiado, introducir 'configure terminal'.",
        "comando": "Switch(config)# configure terminal",
        "concepto": "El modo Configuración Global es un nivel más profundo de configuración en un switch Cisco. Para acceder a este modo, se utiliza el comando 'configure terminal'. En este modo, los usuarios pueden realizar cambios en la configuración global del dispositivo, como configurar interfaces y ajustar parámetros de red."
    },
    {
        "titulo": "Ir al modo de configuración de puertos (desde el modo de configuración global)",
        "pasos": "1. En el modo Configuración Global, usar el comando 'interface' seguido del nombre del puerto o VLAN a configurar.\n2. Una vez dentro del modo de configuración de interfaz, ingresar los comandos necesarios para configurar ese puerto o VLAN específico.",
        "comando": "Switch(config)# interface [nombre_puerto_o_VLAN]",
        "concepto": "El modo de configuración de puertos permite a los administradores de red configurar parámetros específicos de un puerto en un switch Cisco. Para acceder a este modo desde el modo Configuración Global, se utiliza el comando 'interface' seguido del nombre del puerto o VLAN que se desea configurar. En este modo, se pueden ajustar opciones individuales para ese puerto o VLAN."
    }
]
