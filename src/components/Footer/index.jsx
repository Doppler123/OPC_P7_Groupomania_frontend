import "./footer.scss"

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer__container">
          <div class="boxes" id="about">
            <h4 class="title">A propos</h4>
            <a class="link">Fonctionnement du site</a>
            <a class="link">Données et confidentialité</a>
          </div>

          <div class="boxes" id="assistance">
            <h4 class="title">Assistance</h4>
            <a class="link">Contacter l'administrateur</a>
            <a class="link">Contacter le service technique</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
