import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuw8zcYkAFr-H63YNwnDRQni6hewc6Ahs",
  authDomain: "integrador-4e724.firebaseapp.com",
  projectId: "integrador-4e724",
  storageBucket: "integrador-4e724.appspot.com",
  messagingSenderId: "248409477908",
  appId: "1:248409477908:web:6f693c0a2c65d17b34a801"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

//inicializar el server 
const app = express()

//inicializamos el middleware
app.use(express.static('public'))
app.use(express.json())

//Rutas del backend
//Ruta home
app.get('/',(req,res)=>{
  res.sendFile('index.html',{root: 'public'})
}

//arrancamos el server 
app.listen(process.env.PORT, () =>{
  console.log(`Server in Port: ${process.env.PORT}`)
})