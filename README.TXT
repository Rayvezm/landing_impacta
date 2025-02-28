Documentación del Proyecto de Desarrollo Web

<!DOCTYPE html>

<html lang="es">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keyworkws" content="frutas, manzana, pera" />
        <meta name="author" content="RAYVE ZERPA" />
        <meta name="description" content="Landing de Impacta" />
        <meta name="robots" content="noarchive" />
        <!-- fonts -->
        <link rel="stylesheet" href="./css/fonts.css" />
        <!-- favicon -->
        <link rel="icon" href="./media/logos/Recurso_14.svg" />
        <!-- styles -->
        <link rel="stylesheet" href="./css/styles.css" />
        <!-- aos css -->
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <!-- swiper css -->
        <link
            rel="stylesheet"
            href="./libs/swiper/swiper-bundle.min.css" />
        <!-- Título de la Página -->
        <title>Impacta</title>
    </head>
    <body>
        <input type="checkbox" name="menu-oculto" id="menu-oculto"
            class="checkbox" />
        <aside class="publicidad">
            <p>MÁS PUBLICIDAD! <span class="subscribe">SUBSCRÍBETE A NUESTRA
                    NEWSLETTER</span> <a href="#" class="click"> Clic
                    aquí</a></p>
        </aside>
        <header class="header-menu">
            <figure class="logo">
                <img src="./media/logos/Recurso_13.svg" alt="logo"
                    class="logo-img">
            </figure>
            <button type="button" class="btn-menu">
                <label class="chk-oculto" for="menu-oculto">
                    <span class="men">menu</span>
                    <span class="chk-oculto__lineas linea--primera"></span>
                    <span class="chk-oculto__lineas linea--segunda"></span>
                    <span class="chk-oculto__lineas linea--tercera"></span>
                </label>
            </button>
            <nav class="nav-menu">
                <ul class="nav-menu__lista">
                    <li class="nav-menu__item">
                        <a href class="nav-menu__link link--active">Nosotros</a>
                    </li>
                    <li class="nav-menu__item">
                        <a href class="nav-menu__link">Servicios</a>
                    </li>
                    <li class="nav-menu__item">
                        <a href class="nav-menu__link">Proyectos</a>
                    </li>
                    <li class="nav-menu__item">
                        <a href class="nav-menu__link">Contactos</a>
                    </li>
                </ul>
            </nav>
            <figure class="redes">
                <a href="#">
                    <img src="./media/logos/Recurso_15.svg" alt class="ig">
                </a>
                <a href="#">
                    <img src="./media/logos/Recurso_16.svg" alt class="fb">
                </a>
            </figure>
        </header>
        <main>
            <section class="section-1">
                <!-- Slider main container -->
                <article class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <figure class="swiper-slide">
                            <header class="title">
                                <h1>A veces,
                                    somos
                                    gente
                                    normal
                                </h1>
                            </header>
                            <img src="./media/portada/edit_1.webp"
                                alt="Portada de Mostruo" width="100%"
                                height="500px">
                        </figure>
                        <figure class="swiper-slide">
                            <header class="title">
                                <h1>A veces,
                                    somos
                                    gente
                                    normal
                                </h1>
                            </header>
                            <img src="./media/portada/edit_2.webp"
                                alt="Portada de Dinosaurio" width="100%">
                        </figure>
                        <figure class="swiper-slide">
                            <header class="title">
                                <h1>A veces,
                                    somos
                                    gente
                                    normal
                                </h1>
                            </header>
                            <img src="./media/portada/edit_3.webp"
                                alt="Portada de Formula 1" width="100%">
                        </figure>
                        <figure class="swiper-slide">
                            <header class="title">
                                <h1>A veces,
                                    somos
                                    gente
                                    normal
                                </h1>
                            </header>
                            <img src="./media/portada/edit_4.webp"
                                alt="Portada de Tiburon" width="100%">
                        </figure>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </article>
            </section>

            <!-- section 2 -->
            <section class="Section-2">
                <article
                    class="my-card my-5" data-aos="fade-up">
                    <figure class="CardImage salud">
                        <span></span>
                        <img class="SaludM"
                            src="./media/Fotos e iconos/salud-mental.svg"
                            height="60%" alt="Salud mental">
                    </figure>

                    <header class="Header-Card">
                        <h2>CREATIVIDAD SIN LÍMIRES PARA IMPULSAR TU
                            MARCA</h2>
                    </header>
                    <p>
                        Transformamos ideas en <strong>experiencias
                            inolvidables</strong>, creando campañas que
                        capturan
                        la esencia de tu marca y resuenan profundamente con
                        tu
                        audiencia.
                    </p>
                </article>
                <article class="my-card my-5" data-aos="fade-up">
                    <figure class="CardImage sperm">
                        <span></span>
                        <img class="Esperma"
                            src="./media/Fotos e iconos/esperma.svg"
                            height="50%"
                            alt="Esperma">
                    </figure>
                    <header class="Header-Card">
                        <h2>AGILIDAD Y EFICIENCIA EN CADA PROYECTO</h2>
                    </header>
                    <p>
                        <strong>Respuesta rápida y eficiente</strong> para
                        un mercado en constante cambio, adaptándonos a tus
                        necesidades y superando tus expectativas con cada
                        entrega.
                    </p>
                </article>
                <article class="my-card my-5" data-aos="fade-up">
                    <figure class="CardImage chincheta">
                        <span></span>
                        <img class="Chincheta"
                            src="./media/Fotos e iconos/chincheta.svg"
                            height="60%" alt>
                    </figure>
                    <header class="Header-Card">
                        <h2>TECNOLOGÍA PARA RESULTADOS ÓPTIMOS</h2>
                    </header>
                    <p>
                        Innovación para potencias tus campañas
                        publicitarias, utilizando<strong> las herramientas
                            más avanzadas</strong> para alcanzar y superar
                        tus objetivos.
                    </p>
                </article>
                <article class="my-card my-5" data-aos="fade-up">
                    <figure class="CardImage cerveza">
                        <span></span>
                        <img class="Cerveza"
                            src="./media/Fotos e iconos/jarro-de-cerveza.svg"
                            height="60%" alt="Cerveza">
                    </figure>
                    <header class="Header-Card">
                        <h2>CREATIVIDAD SIN LÍMIRES PARA IMPULSAR TU
                            MARCA</h2>
                    </header>
                    <p>
                        Profesionales apasionados dedicados a impulsar tu
                        marca, combinando
                        talento y experiencia para ofrecer <strong>
                            resultados excepcionales y transformar
                            tu visión en realidad.</strong>
                    </p>
                </article>
            </section>
            <section class="Section-3">
                <article class="Section-3__Article">
                    <figure class="Section-3__Figure"
                        data-aos="flip-up"></figure>
                    <header class="Section-3__Header">
                        <h2 class="Section-3__H2">VENDEMOS HUMO CON MUCHA
                            PASIÓN</h2>
                    </header>
                </article>
            </section>
            <section class="Section-4">
                <article class="Container-Sec4">
                    <header class="Section-4__title">
                        <h3>¿NUESTROS CLIENTES?</h3>
                    </header>
                    <div class="Caja1">

                        <div class="parent">
                            <div data-aos="flip-left" class="div1 Small-Icon">
                                <img src="./media/logos/Recurso_8.svg"
                                    alt="Al Campo">
                            </div>
                            <div data-aos="flip-left" class="div2 Small-Icon">
                                <img src="./media/logos/Recurso_7.svg"
                                    alt="Basf">
                            </div>
                            <div data-aos="flip-left" class="div3 Long-Icon">
                                <img src="./media/logos/Recurso_3.svg"
                                    alt="Cajamar">
                            </div>
                            <div data-aos="flip-left" class="div4 Small-Icon">
                                <img src="./media/logos/Recurso_11.svg"
                                    alt="Ferrovial">
                            </div>

                            <div data-aos="flip-left" class="div5 Small-Icon">
                                <img src="./media/logos/Recurso_9.svg"
                                    alt="KPMG">
                            </div>
                            <div data-aos="flip-left" class="div6 Long-Icon">
                                <img src="./media/logos/Recurso_1.svg"
                                    alt="Cepsa">
                            </div>
                            <div data-aos="flip-left" class="div7 Small-Icon">
                                <img src="./media/logos/Recurso_10.svg"
                                    alt="Corporate Excellence">
                            </div>
                            <div data-aos="flip-left" class="div8 Small-Icon">
                                <img src="./media/logos/Recurso_12.svg"
                                    alt="BMI">
                            </div>
                            <div data-aos="flip-left" class="div9 Small-Icon">
                                <img src="./media/logos/Recurso_6.svg"
                                    alt="Brita">
                            </div>
                            <div data-aos="flip-left" class="div10 Small-Icon">
                                <img src="./media/logos/Recurso_5.svg"
                                    alt="Schneider">
                            </div>
                            <div data-aos="flip-left" class="div11 Small-Icon">
                                <img src="./media/logos/Recurso_2.svg"
                                    alt="Hill+Knowlton">
                            </div>
                            <div data-aos="flip-left" class="div12 Small-Icon">
                                <img src="./media/logos/Recurso_4.svg"
                                    alt="Broseta">
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section class="Section-5">
                <article class="Form1">
                    <form action="#" class="Formi1" id="Formi1">
                        <fieldset class="Form-Set1">
                            <legend>
                                <h3 class="Form-Title">
                                    <span>ENVIANOS TU</span> MENSAJE
                                </h3>
                            </legend>
                            <input class="Input" placeholder="Nombre"
                                type="text" name="Nombre"
                                id="Nombre">
                            <input class="Input" placeholder="Email"
                                type="email" name="Correo"
                                id="Correo">
                            <input class="Input" placeholder="Teléfono"
                                type="number" name="Telefono"
                                id="Telefono">
                            <input class="Input"
                                placeholder="Planeta de nacimiento" type="text"
                                name="Planeta"
                                id="Planeta">
                            <textarea class="Comentarios" name="Comentarios"
                                placeholder="Mensaje"
                                id="Comentarios"></textarea>
                            <p class="politicas">Sus datos serán tratados por
                                IMPACTA para la
                                atención de las consultas o solicitudes de
                                información realizadas.
                                Puede ejercer sus derechos conforme a lo
                                dispuesto en la Política de Privacidad. <a
                                    href>Más información aquí.</a></p>
                        </fieldset>
                        <fieldset class="Form-Set2">
                            <legend>SELECCIONA SOLO UN RESULTADO</legend>
                            <div class="Cajas">

                                <input class="Radial" type="radio" name="deseo"
                                    id="feliz"
                                    value="Quiero ser feliz">
                                <label class="labradio" for="feliz"
                                    id="labfeliz">Quiero ser
                                    feliz</label>

                                <input class="Radial" type="radio" name="deseo"
                                    id="rico"
                                    value="Quiero ser rico">
                                <label class="labradio" for="rico"
                                    id="labrico">Quiero ser
                                    rico</label>

                                <input class="Radial" type="radio" name="deseo"
                                    id="avion"
                                    value="Quiero ser un avión">

                                <label class="labradio" for="avion"
                                    id="labavion">Quiero ser un
                                    avión</label>

                                <input class="Radial" type="radio" name="deseo"
                                    id="dormir"
                                    value="Quiero dormir todo el día">
                                <label class="labradio" for="dormir"
                                    id="labdormir">Quiero dormir
                                    todo el
                                    día</label>

                            </div>
                            <div class="Form-Set3">
                                <input class="Privacidad" type="checkbox"
                                    name="Privacidad" id="Privacidad">
                                <label for="Privacidad" class="labcheckbox">He
                                    leído y acepto el aviso legal y la política
                                    de privacidad</label>
                                <button class="Enviar" type="submit"
                                    for="Formi1">ENVIAR MENSAJE</button>

                            </div>
                        </fieldset>
                    </form>
                </article>
            </section>
            <aside class="publicidad pub--white">
                <p>MÁS PUBLICIDAD! <span class="subscribe">SUBSCRÍBETE A NUESTRA
                        NEWSLETTER</span> <a href="#" class="click"> Clic
                        aquí</a></p>
            </aside>
            <!-- dialog -->
            <dialog id="dialogAgradecimiento">
                <p>¡Gracias por enviar tu información!</p>
                <button id="cerrarDialog">OK</button>
            </dialog>
            <!-- inicio del footer -->
            <footer class="footer">
                <div class="div-frecuentes">
                    <h5 class="titles-footer">Contacto y Preguntas
                        Frecuentes</h5>
                    <ul class="div__ul">
                        <li>+ (34) 666 666 666</li>
                        <li>FORMULARIO DE CONTACTO</li>
                        <li>PREGUNTAS FRECUENTES</li>
                        <li>LIBRO DE RECLAMACIONES</li>
                        <li>CONOCE NUESTRA MANERA DE TRABAJAR</li>
                    </ul>
                    <p>Pago seguro</p>
                    <figure class="pay">
                        <img src="./media/logos/Recurso_20.svg" alt>
                        <img src="./media/logos/Recurso_17.svg" alt>
                        <img src="./media/logos/Recurso_19.svg" alt>
                        <img src="./media/logos/Recurso_18.svg" alt>
                    </figure>
                </div>
                <div class="div-Nosotros">
                    <h5 class="titles-footer">Nosotros</h5>
                    <ul class="div__ul">
                        <li>CATEGORÍAS</li>
                        <li>NOVEDADES</li>
                        <li>OFERTAS</li>
                    </ul>
                    <h5 class="titles-footer">Servicios</h5>
                </div>
                <div class="div-proyectos">
                    <h5 class="titles-footer">Proyectos</h5>
                    <ul class="div__ul">
                        <li>CALIDADES</li>
                        <li>REVISIONES</li>
                        <li>RENOVACIÓN</li>
                        <li>VENTAS</li>
                    </ul>
                </div>
                <div class="div-contacto">
                    <h5 class="titles-footer">Contacto</h5>
                    <ul class="div__ul">
                        <li>FORMULARIO DE CONTACTO</li>
                    </ul>
                    <h5 class="titles-footer">Redes</h5>
                    <figure class="redes2">
                        <a href="#">
                            <img src="./media/logos/Recurso_15.svg" alt
                                class="ig-footer">
                        </a>
                        <a href="#">
                            <img src="./media/logos/Recurso_16.svg" alt
                                class="fb-footer">
                        </a>
                    </figure>
                    <figure class="logo">
                        <img src="./media/logos/Recurso_14.svg" alt="logo"
                            class="logo-img">
                    </figure>
                </div>
            </footer>
            <div class="publicidad pub--white">
                <p>© IMPACTA. 2024</p>
            </div>
            <!-- final del footer -->
        </main>
        <!-- font awesome -->
        <script src="https://kit.fontawesome.com/22e2075a20.js"
            crossorigin="anonymous"></script>
        <!-- swiper js -->
        <script type="text/javascript"
            src="./libs/swiper/swiper-bundle.min.js"></script>
        <!-- aos js -->
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <!-- JS Nativo -->
        <script type="text/javascript" src="./js/main.js"></script>
    </body>

</html>



Decisiones de Diseño

> Tipografía
- Fuente Principal: Utilicé la fuente 'Outfit ' para todo el cuerpo de la página, siguiendo el diseño original del PDF.

> Colores
- Paleta de Colores: Implementé los colores especificados en el diseño PDF:
  - Color principal: #e2001a
  - Color secundario: #001c3a
  - Colores adicionales: #e21f1f, #ffffff, #111111, #00ffbf, #ff3737, #d103ff, #04fe3a, #00708f, #1146cc, #ffffffb6, #fdce1e

Diseño Responsivo
- Utilicé media queries para asegurar que la página se vea bien en dispositivos móviles y de escritorio, trabajando de modo mobile first.

css

@media (width >=768px) {
  .redes {
    position: relative;
    margin: initial;
  }

  .Section-2 {
    padding: 150px 150px;
  }

  .btn-menu {
    display: none;
  }

  .nav-menu {
    display: flex;
    height: 100px;
    background: none;
  }

  .nav-menu__lista {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
  }

  .checkbox:checked+.header-menu {
    flex-direction: row;
    justify-content: space-around;
  }

  .checkbox:checked+.header-menu .nav-menu {
    background: none;
    position: relative;
    top: 0;
  }
}

@media (min-width: 1120px) {
  .div11 {
    grid-column: span 2;
  }

  .div12 {
    grid-column: span 3;
  }
}

@media (width >=1265px) {
  .parent {
    grid-template-columns: repeat(7, minmax(165px, 1fr));
    grid-template-rows: repeat(2, 1fr);
  }

  .div3 {
    grid-column: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .div4 {
    grid-column-start: 3;
    grid-row-start: 1;
  }

  .div5 {
    grid-column-start: 4;
    grid-row-start: 1;
  }

  .div6 {
    grid-column: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 2;
  }

  .div7 {
    grid-column-start: 5;
    grid-row-start: 1;
  }

  .div8 {
    grid-column-start: 6;
    grid-row-start: 1;
  }

  .div9 {
    grid-column-start: 7;
    grid-row-start: 1;
  }

  .div10 {
    grid-column-start: 5;
  }

  .div11 {
    grid-column-start: 6;
  }

  .div12 {
    grid-column-start: 7;
  }
}

Elementos Interactivos
- Botones y Links: Añadí efectos de hover y transiciones para mejorar la experiencia del usuario.

css

.nav-menu__link::after {
  content: "";
  background: linear-gradient(to right, transparent 15%, #00ffbf, #ff3737, #d103ff, #04fe3a);
  background-position: left;
  background-size: 600%;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -6px;
  transition: background-position .4s ease-in-out;
}
.nav-menu__link:hover::after {
  background-position: right;
  background-size: 200%;
}




Herramientas y Tecnologías Utilizadas
- HTML5: Para la estructura del documento.
- SASS y CSS3: Para el diseño y el estilo.
- JavaScript, AOS, Swiper: Para la interactividad.
- Responsive Design: Para asegurar que la página funcione bien en todos los dispositivos.

Conclusión
Esta página web fue creada siguiendo el diseño proporcionado en PDF, asegurando que todos los elementos fueran replicados fielmente y que la página fuera totalmente funcional y atractiva en diferentes dispositivos.