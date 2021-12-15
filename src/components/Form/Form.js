import "./Form.scss";

function Form() {
  return (
    <body>
      <div class="form">
        <h3 className="form-title">Un commentaire, une suggestion ?</h3>
        <form action="" method="get">
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Prénom"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Nom"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input
                type="email"
                id="email-address"
                name="email-address"
                placeholder="adresse Email "
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Num. Téléphone"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right"></div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <textarea id="hobbies" name="hobbies"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input type="file" id="avatar" name="avatar" accept="image/*" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-left"></div>
            <div class="form-right">
              <input
                type="submit"
                id="btn-submit"
                name="btn-submit"
                value="Envoyer"
              />
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Form;
