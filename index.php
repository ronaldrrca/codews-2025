<?php include './header.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <main>
        <section id="inicio" class="hero">
            <picture>
                <source srcset="./img/imagen-principal-pc.png" media="(min-width: 1200px)">
                <source srcset="./img/imagen-principal-tablet.png" media="(min-width: 768px)">
                <source srcset="./img/imagen-principal-movil.png" media="(min-width: 400px)">
                <img src="./img/imagen-principal.png" alt="Imagen de varias páginas web alineadas verticalmente">
              </picture>
              
            <div class="hero-content">
                <h1>Desarrollo Web Personalizado</h1>
                <p>Ofrecemos soluciones web adaptadas a tus objetivos y presupuesto, con un enfoque en diseño moderno y funcionalidad.</p>
                <a href="#contacto" id="cta-button" class="cta-button">Contáctanos</a>
            </div>
        </section>
    
        <section id="servicios">
            <h2>Servicios</h2>
            <div class="servicio">
                <h3>Landing Page</h3>
                <p>Una página sencilla y efectiva para promocionar un producto o servicio.</p>
                <p><strong>Desde $XX</strong></p>
                <a href="./servicios.php">Leer más</a>
            </div>
            <div class="servicio">
                <h3>Web Corporativa</h3>
                <p>Un sitio para presentar tu empresa o negocio con varias secciones.</p>
                <p><strong>Desde $XX</strong></p>
                <a href="./servicios.php">Leer más</a>
            </div>
            <div class="servicio">
                <h3>Tienda Online Básica</h3>
                <p>Venta de productos con carrito de compras y pasarela de pago integrada.</p>
                <p><strong>Desde $XX</strong></p>
                <a href="./servicios.php">Leer más</a>
            </div>
            <div class="servicio">
                <h3>Invitación Web para Eventos</h3>
                <p>Invitaciones elegantes e interactivas para bodas, fiestas y más.</p>
                <p><strong>Desde $XX</strong></p>
                <a href="./servicios.php">Leer más</a>
            </div>
        </section>
    
        <section id="proyectos">
            <h2>Proyectos</h2>
            <p>Explora algunos de los proyectos que he desarrollado.</p>
            <div id="galeria-proyectos-inicio">
                <div class="proyecto-inicio">
                <picture>
                    <source srcset="./img/placeholder-imagen-250x1000.png" media="(min-width: 768px)">
                    <source srcset="./img/placeholder-imagen-300x1000.png" media="(min-width: 400px)">
                    <img src="./img/placeholder-imagen-300x1000.png" alt="Imagen de páginas web de diferentes proyectos">
              </picture>
                </div>
                <div class="proyecto-inicio">
                <picture>
                    <source srcset="./img/placeholder-imagen-250x1000.png" media="(min-width: 768px)">
                    <source srcset="./img/placeholder-imagen-300x1000.png" media="(min-width: 400px)">
                    <img src="./img/placeholder-imagen-300x1000.png" alt="Imagen de páginas web de diferentes proyectos">
              </picture>
                </div>
                <div class="proyecto-inicio">
                <picture>
                    <source srcset="./img/placeholder-imagen-250x1000.png" media="(min-width: 768px)">
                    <source srcset="./img/placeholder-imagen-300x1000.png" media="(min-width: 400px)">
                    <img src="./img/placeholder-imagen-300x1000.png" alt="Imagen de páginas web de diferentes proyectos">
              </picture>
                </div>
                <div class="proyecto-inicio">
                <picture>
                    <source srcset="./img/placeholder-imagen-250x1000.png" media="(min-width: 768px)">
                    <source srcset="./img/placeholder-imagen-300x1000.png" media="(min-width: 400px)">
                    <img src="./img/placeholder-imagen-300x1000.png" alt="Imagen de páginas web de diferentes proyectos">
              </picture>
                </div>  
            </div>
        </section>
    
        <section id="contacto">
            <h2>Contacto</h2>
            <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <form id="form-contacto">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Nombre">
    
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required placeholder="Email">
    
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required placeholder="Ingresa tu mensaje"></textarea>
    
                <button type="submit" aria-label="">Enviar</button>
            </form>
        </section>
    </main>

    

    <footer>
        <p>&copy; 2025 Ronald. Todos los derechos reservados.</p>
        <p>Sígueme en: <a href="#">Instagram</a> | <a href="#">LinkedIn</a></p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>