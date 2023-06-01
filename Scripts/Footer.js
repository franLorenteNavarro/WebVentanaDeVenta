var fecha = "01/06/2023";
var empresa = "Empresa";
var url = "<a href='file:///C:/Users/fjesu/Desktop/WebsGit/WebVentanaDeVenta/index.html'>Pagina Web</a>";

var correo = "<a href='mailto:correo@ejemplo.com'>correo@ejemplo.com</a>";


function closePopup() {
    document.getElementById('popupPoliticaPrivacidad').style.display = 'none';
    document.getElementById('popupRedesSociales').style.display = 'none';
  }
  document.addEventListener('DOMContentLoaded', function() {
      var politicaPrivacidad = `
        <h2> ` + empresa + ` Política de Privacidad</h2>
        <p>Fecha de entrada en vigencia: ` + fecha + ` </p>
        <p>
            Esta Política de Privacidad describe cómo ` + empresa + ` recopila, utiliza, almacena y protege
            la información personal que obtenemos a través de nuestro sitio web ` + url + `. Al utilizar
            nuestro sitio web, aceptas los términos y condiciones de esta Política de Privacidad.
        </p>
        <h3>Información que recopilamos</h3>
        <p>
            Información de identificación personal: podemos recopilar tu nombre, dirección de correo electrónico,
            número de teléfono u otra información que elijas proporcionarnos voluntariamente al utilizar nuestro
            sitio web.
            Información de registro: cuando visitas nuestro sitio web, nuestro servidor automáticamente recopila
            información de registro, como tu dirección IP, el tipo de navegador que utilizas, las páginas que
            visitas y la fecha y hora de tu visita.
            Cookies y tecnologías similares: podemos utilizar cookies y tecnologías similares para recopilar
            información sobre tu actividad en nuestro sitio web. Puedes ajustar la configuración de tu navegador
            para rechazar cookies, pero esto puede limitar algunas funcionalidades de nuestro sitio web.
        </p>
        <h3>Uso de la información</h3>
        <p>
            Utilizamos la información recopilada para proporcionarte los servicios y productos que solicitas,
            mejorar nuestro sitio web y comunicarnos contigo sobre actualizaciones, ofertas promocionales u otros
            temas relacionados con nuestros servicios.
            No compartiremos tu información personal con terceros sin tu consentimiento, excepto cuando sea
            necesario para cumplir con la ley, proteger nuestros derechos o responder a una solicitud legal.
        </p>
        <h3>Protección de la información</h3>
        <p>
            Implementamos medidas de seguridad razonables para proteger tu información personal contra accesos no
            autorizados, uso indebido o divulgación.
            Sin embargo, debes tener en cuenta que ninguna transmisión de datos a través de Internet o
            almacenamiento electrónico es completamente segura. Por lo tanto, no podemos garantizar la seguridad
            absoluta de tu información personal.
        </p>
        <h3>Enlaces a sitios web de terceros</h3>
        <p>
            Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las
            prácticas de privacidad o el contenido de dichos sitios web. Te recomendamos leer las políticas de
            privacidad de esos sitios antes de proporcionar cualquier información personal.
        </p>
        <h3>Cambios en nuestra Política de Privacidad</h3>
        <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te
            recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio. La fecha de
            entrada en vigencia de la versión actualizada se indicará al comienzo de la Política de Privacidad.
        </p>
        <h3>Contacto</h3>
        <p>
            Si tienes alguna pregunta, inquietud o solicitud relacionada con nuestra Política de Privacidad o el
            manejo de tu información personal, puedes comunicarte con nosotros mediante  ` + correo + `.
        </p>
        <span id="closePopup" onclick="closePopup()">&#x2716;</span>      `;
    
    var redesSociales = `
        <p>
            <a id="logoInicio" href="#">
                <img src="./Images/redesSociales.png" class = "redSocial" alt="Instagram">
            </a>
            <li>Instagram</li>
        </p>
        <p>
            <a id="logoInicio" href="#">
                <img src="./Images/redesSociales.png" class = "redSocial" alt="Facebook">
            </a>
            <li>Facebook</li>
        </p>
        <p>
            <a id="logoInicio" href='mailto:correo@ejemplo.com'>correo@ejemplo.com
                <img src="./Images/redesSociales.png" class = "redSocial" alt="Email">
            </a>
            <li>Email</li>
        </p>
        <span id="closePopup" onclick="closePopup()">&#x2716;</span>      `;


    document.querySelector('.popup-politicaPrivacidad').innerHTML = politicaPrivacidad;
    document.querySelector('.popup-redesSociales').innerHTML = redesSociales;
});

  document.getElementById('abrirPoliticaPrivacidad').addEventListener('click', function() {
    document.getElementById('popupPoliticaPrivacidad').style.display = 'block';
  });
  document.getElementById('abrirRedesSociales').addEventListener('click', function() {
    document.getElementById('popupRedesSociales').style.display = 'block';
  });
  // Controlar el evento de desplazamiento del ratón
  document.getElementById('popupPoliticaPrivacidad').addEventListener('wheel', function(event) {
    event.stopPropagation();
  });
  document.getElementById('popupRedesSociales').addEventListener('wheel', function(event) {
    event.stopPropagation();
  });