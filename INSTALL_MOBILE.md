# Cómo instalar la App en tu Móvil

Dado que no tienes Android Studio instalado, la forma más fácil de generar el archivo instalable (`.apk`) es usar **GitHub Actions** (la nube) o instalar las herramientas de línea de comandos.

## Opción 1: Usar GitHub Actions (Recomendado)
Si subes tu código a GitHub, puedes usar el archivo de flujo de trabajo que he preparado para generar el APK automáticamente.

1.  Copia el archivo `android_build_workflow.yml` a la carpeta `.github/workflows/` en tu repositorio (créala si no existe).
2.  Sube tus cambios a GitHub (`git push`).
3.  Ve a la pestaña **Actions** en tu repositorio de GitHub.
4.  Verás un proceso de "Build Android APK". Cuando termine, podrás descargar el archivo `app-debug.apk` desde los "Artifacts".

## Opción 2: Instalar Command Line Tools (Local)
Si prefieres hacerlo en tu PC sin subirlo, necesitas instalar el Android SDK Command Line Tools.
1.  Descarga las "Command line tools only" desde [developer.android.com](https://developer.android.com/studio#command-tools).
2.  Descomprime y configura la variable de entorno `ANDROID_HOME`.
3.  Ejecuta `./gradlew assembleDebug` en la carpeta `android`.

## Cómo instalar el APK en tu teléfono
Una vez tengas el archivo `app-debug.apk`:

1.  **Transfiere el archivo**: Envíalo a tu móvil por USB, Google Drive, Telegram, o email.
2.  **Habilita orígenes desconocidos**:
    *   Ve a **Ajustes** > **Seguridad** (o Aplicaciones).
    *   Busca "Instalar aplicaciones desconocidas" o "Fuentes desconocidas".
    *   Autoriza a la app que estés usando para abrir el archivo (ej. Chrome, Files, Drive).
3.  **Instala**: Toca el archivo `.apk` y selecciona "Instalar".
4.  **¡Listo!**: Verás "NeveraChef" en tu lista de apps.
