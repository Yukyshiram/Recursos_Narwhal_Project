# ¿Qué es la carpeta .svn?

La carpeta **`.svn`** es una carpeta especial utilizada por **Apache Subversion (SVN)**, un sistema de control de versiones. Su propósito principal es almacenar metadatos y la información de control de versiones de un proyecto administrado por SVN.

## ¿Para qué sirve .svn?

Cuando un directorio está bajo el control de versiones de **SVN**, la carpeta `.svn` se crea automáticamente y contiene información importante, como:
- La versión del repositorio.
- Registros de cambios.
- Referencias a los archivos versionados.
- Información sobre la rama y la URL del repositorio remoto.

## ¿Se debe versionar la carpeta .svn?

No, la carpeta `.svn` **no debe ser subida a GitHub ni a ningún otro sistema de control de versiones como Git**. Para evitarlo, añade esta línea a tu archivo **`.gitignore`**:

```
.svn/
```

Esto evitará que la carpeta `.svn` se incluya en los commits de Git.

## Diferencia entre `.svn` y `.git`

| Característica | `.svn` (Subversion) | `.git` (Git) |
|--------------|----------------|-------------|
| Tipo de control | Centralizado | Distribuido |
| Carpeta oculta | `.svn` en cada subdirectorio | Solo una `.git` en la raíz |
| Almacenamiento de versiones | En el servidor | En cada copia local |
| Requiere conexión para historial completo | Sí | No |

## ¿Cómo eliminar .svn de un proyecto?
Si accidentalmente subiste `.svn` a tu repositorio, puedes eliminarlo con el siguiente comando:

```bash
git rm -r --cached .svn/
```

Luego, confirma los cambios y vuelve a subirlos:

```bash
git commit -m "Eliminando carpeta .svn del repositorio"
git push origin main
```

## Conclusión

La carpeta `.svn` es parte de Subversion y almacena información de control de versiones. En proyectos gestionados con Git, es recomendable ignorarla para evitar conflictos y archivos innecesarios en el repositorio.

