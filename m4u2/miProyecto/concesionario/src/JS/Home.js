import React from 'react'
import '../CSS/home.css'

function Home() {
  return (
    <main className='home__contenedor'>
      <div class="desc__vehiculo">
            <section class="desc__breve">
                <h1>ALFA ROMEO QUADRIFOGLIO</h1>
                <p>El poder de la confianza</p>
            </section>
            <section class="mas__info">
                <button>DESCUBRA MÁS</button>
            </section>
        </div>
        <div class="carousel">
            <section class="botones">
                <button class="prev boton_car">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                        class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </button>

                <button class="next boton_car">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                        class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </section>
        </div>
    </main>
  );
}

export default Home