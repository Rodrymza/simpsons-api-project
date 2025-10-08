# Simpsons Api Project

**Ramirez Rodrigo - Comision 3**

## Comando npm init -y

Este comando crea el archivo package.json con los valore predeterminados de forma rápida. Se usa para inicializar un proyecto Node.js gestionado por npm. Este archivo tiene datos importantes como autor, licencias, depedencias para el proyecto, descripcion, repositorio de github, entre otros. De no usar el modificador -y la herramienta nos pedirá los datos uno a uno para crear el archivo.# simpsons-api-project

## ¿Por qué se usa --save-dev en lugar de guardar TypeScript como dependencia normal?
Este modificador se usa para herramientas que solo son usadas para el desarrollo pero no son necesarias en producción. En nuestro caso Typescript es solo dependencia de desarrollo ya que luego el código escrito en este lenguaje luego será  se transpilado a JavaScript puro. Otras herramientas de testing o automatizaciones también son ejemplos de dependencias que sólo serán usadas en el proceso de desarrollo.