<div align="center">
    <h1>Proyecto 7. Aplicación Full Stack de CE<h1>
</div>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,react,express,mongo,github" />
  </a>
</p>

<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/UDD-DWFS-orange">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MriquelmeCPHCJA/UDD-PROYECTOS?color=green">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/MriquelmeCPHCJA/UDD-PROYECTOS">
</div>


##  🏨 Introducción
En este proyecto, el objetivo fue construir una aplicación backend que administre la autenticación y autorización de los usuarios, tambien el despliegue de articulos en venta. El proyecto fue orientado en un sitio de Donaciones para eventos catastroficos de fuerza natural..

Se utilizó MongoDB Atlas para la persistencia de datos, y construí un modelo de "usuario", un modelo de "producto" y un modelo de "categorias". Se pueden enlazar (productos, categorias). Estos modelos estarán relacionados entre sí a través de MongoDB. Tambien está el registro de Usuarios y Login. Adicionalmente para temas de pruebas también fueron agregados las consultas, eliminación y actualización tanto de Usuarios como de Productos y Categorias, dejando abierta la oportunidad de realizar un CRUD desde el FrontEnd.

El proyecto posée una estructura de carpetas clara con controladores, modelos, rutas y middleware. Finalmente, se desplegó la aplicación a través de render.com y la base de datos en MongoDB Atlas.

## Tabla de Contenidos
1. [Requisitos](#)  
2. [Instalación](#️)  
3. [Estructura del Proyecto](#)  
4. [API de Autenticación y Productos](#)  
5. [Endpoints Principales](#)
6. [Documentación](#)
7. [Render.com](#)  




##  ✅ Requisitos
- NodeJS
- Express
- Bcryptjs
- jsonwebtoken
- Cors
- dotenv
- mongoose
- nodemon
- stripe


##  ⚙️ Instalación
1. **Clonar el repositorio:**
   ```
   BACKEND
   git clone https://github.com/MriquelmeCPHCJA/DONA-T-BACKEND

   FRONTEND
   git clone https://github.com/MriquelmeCPHCJA/DONA-T-FRONTEND
   ```
2. **Acceder al directorio del proyecto:**
   ```
   cd DONA-T-BACKEND
   ```
3. **Instalar las dependencias:**
   ```
   npm install
   ```
4. **Configurar el archivo `.env`:**
   Crear un archivo `.env` con los siguientes contenidos:
   ```
   DB_URI=AQUI_VA_TU_BASE_DE_DATOS_EN_MONGO_ATLAS_O_LOCAL

   PORT=TU_PUERTO_LOCAL

   SECRET_KEY=TU_PALABRA_CLAVE

   STRIPE_SECRET_KEY=XXXXXXXXXXXXXXXXXX

   SUCCESS_URL=http://localhost:5173/pago-exitoso

   CANCEL_URL=http://localhost:5173/pago-cancelado 

   ```
5. **Ejecutar la aplicación:**
   ```
   npm start
   ```


## 📂 Estructura del Proyecto

```
📦 PROYECTO-6
│
├── 📂 config
│         └── db.js
│
├── 📂 controlles
│         ├── categoryProductController.js
│         ├── productController.js
│         ├── paymentController
│         └── UserController.js
│     
├── 📂 middleware
│         └── authorization.js
│
├── 📂 models
│         ├── CategoryProducts.js
│         ├── Product.js
│         └── User.js
│     
├── 📂 routes
│         ├── categoryProductsRoutes.js
│         ├── productRoutes.js
│         ├── paymentRoutes
│         └── userRoutes.js
│
├── 📜 .env
└── 📜 server.js
```




## ✅ **API de Autenticación y Productos**

Una API RESTful creada con Node.js, Express y MongoDB que permite la autenticación de usuarios y operaciones CRUD para productos y categorias. 

- Maneja la creación, lectura, actualización y eliminación de productos. 
- Majena el registro, actualización, verificación de token  y login de usuarios.

Puedes crear una base de datos MongoDB en local modificanco el atchivo  `.env` y dirigiendo la bade de datos en el equipo local o usar una base de datos en la nube como MongoDB Atlas.


#### **Características**

- Registro e inicio de sesión de usuarios.
- Autenticación con JSON Web Tokens (JWT).
- Operaciones CRUD completas para productos.
- Rutas y funciones para la pasarela de pagos Stripe

## ✅ **Endpoints Principales**

#### **Usuarios**

- `POST /api/users/register` - Registrar un usuario.
```
Body:

    email: {
        tipo: String,
        requerido
        único
    },

    password: {
        tipo: String,
        requerido
    },
    nameUser:  {
        firstname: {
            type: String,
            requerido
        },
        lastname: {
            type: String,
            requerido
        }
    },

    addressUser: { 
       type: String 
    },

    phoneUser: {
       type: Number
    }
```
- `POST /api/users/login` - Iniciar sesión.
```
Body:
    username: {
        tipo: String
    },

    password: {
        tipo: String
    },    
```
- `GET /api/users/verify-user` - Verificar token.
```
Headers:
    Bearer {Token}

```
- `PUT /api/users/update-user/:id` - Actualizar un usuario.
```
Params:
    id
Body: (Puede omitir uno o varios valores en la actualización)

    email: {
        tipo: String,
        requerido
        único
    },

    password: {
        tipo: String,
        requerido
    },
    nameUser:  {
        firstname: {
            type: String,
            requerido
        },
        lastname: {
            type: String,
            requerido
        }
    },

    addressUser: { 
       type: String 
    },

    phoneUser: {
       type: Number
    }

```

#### **Categorias**

- `POST /api/category/create-category` - Crear una categria.
```
Body:
    name: {
        tipo: String,
        único,
        requerido
    },

    description: {
        tipo: String,
        requerido
    }
```
- `GET /api/category/all-category` - Listar todas las categrias.

- `GET /api/category/category/:id` - Obtener categria por ID.
```
Params:
    id
```
- `PUT /api/category/update-category/:id` - Actualizar una categria.
```
Params:
    id
Body:
    name: {
        tipo: String,
        único,
        requerido
    },

    description: {
        tipo: String,
        requerido
    }
```
- `DELETE /api/category/delete-category/:id` - Eliminar una categria.
```
Params:
    id
```

#### **Productos**

- `POST /api/products/create-product` - Crear un producto.
```
Body:
    nameProduct: {
      type: String,
      required: function () {
        return this.isNew;
      },
      trim: true,
      unique: true,
    },
    priceProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    quantityProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    descriptionProduct: {
      descCorta: {
        type: String,
        trim: true,
      },
      descLarga: {
        type: String,
        trim: true,
      },
      items: [
        {
          type: String,
          trim: true,
        },
      ],
    },
```
- `GET /api/products/all-products` - Listar todos los productos.
- `GET /api/products/product/:id` - Obtener producto por ID.
```
Params:
    id
```
- `PUT /api/products/update-product/:id` - Actualizar un producto.
```
Params:
    id
Body: (Puede omitir uno o varios valores en la actualización)

    nameProduct: {
      type: String,
      required: function () {
        return this.isNew;
      },
      trim: true,
      unique: true,
    },
    priceProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    quantityProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    descriptionProduct: {
      descCorta: {
        type: String,
        trim: true,
      },
      descLarga: {
        type: String,
        trim: true,
      },
      items: [
        {
          type: String,
          trim: true,
        },
      ],
    },
```
- `DELETE /api/products/delete-product/:id` - Eliminar un producto.
```
Params:
    id
```
#### **Pasarela de pagos Stripe**
- `POST /api/payment/create-checkout-session` - Crea una sesion de pago

- `GET /api/payment/checkout-session/:session_id` - Cierra sesion de pago y responde datos del producto pagado por su ID de Sesion

- `GET /api/payment/success` - Redirecciona a una pagina o componente de visualización frontend de pago exitoso

- `GET /api/payment/cancel` - Redirecciona a una pagina o componente de visualización frontend de pago cancelado o no realizado

## 🌎 **Render.com**

Se desplegó el BackEnd en Render.com, puedes acceder a la API en:

```
https://dona-t-backend.onrender.com
```

## 📧 Contácto
**Marcelo Riquelme**

**Email**: luriquelme.dwfs1@bootcampudd.cl
