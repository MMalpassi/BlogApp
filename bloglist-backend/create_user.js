// Importar dependencias
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

// Cargar variables de entorno (.env)
dotenv.config()

// Conectarse a la base de datos
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ ERROR: No se encontró MONGODB_URI en el archivo .env')
  process.exit(1)
}

mongoose.set('strictQuery', false)

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error conectando a MongoDB:', err)
    process.exit(1)
  })

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  name: String,
  passwordHash: {
    type: String,
    required: true
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ],
})

const User = mongoose.model('User', userSchema)

// Función para crear un usuario
const createUser = async (username, name, password) => {
  try {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      name,
      passwordHash,
    })

    const savedUser = await user.save()
    console.log('✅ Usuario creado exitosamente:')
    console.log(savedUser)
  } catch (error) {
    console.error('❌ Error al crear el usuario:', error.message)
  } finally {
    mongoose.connection.close()
  }
}

// --- EDITA ESTOS DATOS PARA TU USUARIO ---
const username = 'MATEO'
const name = 'Mateo Malpassi'
const password = '123'
// --------------------------------------------

createUser(username, name, password)
