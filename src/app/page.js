export default function Home() {
  return (
    <div>
      Soy home
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" placeholder="Ingrese su correo electrónico" />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Ingrese su contraseña" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </div>
  )
}