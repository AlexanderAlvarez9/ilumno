import React from 'react';
import './Form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="Form">
      <section className="Form__Header">
        <div className="container">
          <div className="row text-center text-lg-left">
            <div className="Form__Header__Image pt-2 pb-2 col">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="Form__Main">
        <div className="Form__Main__container container-md">
          <div className="Form__Main--decorator"></div>
          <div className="Form__Main--form row">
            <div className="Form__Main__form col-12 col-md-12 col-lg-7 mt-md-5 px-0">
              <div className="Form__Main__title mt-4 mb-4 mb-md-2 mb-lg-4 text-center">
                <h2 className="Form__Main__title--principal mb-3  display">
                  Cotiza tu Seguro Automotriz
                </h2>
                <h5 className="Form__Main__title--secondary">
                  ¡Resultados Instantáneos!
                </h5>
              </div>

              <form className="form mx-0 pt-4 pt-md-0 pb-md-0 pt-lg-0 px-2 p-md-5 px-md-2 pb-md-0">
                <div class="form-row">
                  <div class="col-12 col-md-12 col-lg-6 d-md-flex d-lg-block px-md-2 mb-md-2">
                    <label
                      for="brand"
                      className="d-sm-none d-md-block d-lg-inline col-md-4 px-0"
                    >
                      Marca del auto
                    </label>
                    <select id="year" class="form-control rounded-0">
                      <option value="0" selected>
                        Marca del auto
                      </option>
                      <option value="2005">Audi</option>
                      <option value="2005">Jaguar</option>
                      <option value="2006">Nissan</option>
                      <option value="2007">Ford</option>
                      <option value="2008">Toyota</option>
                    </select>
                  </div>
                  <div class="col-8 col-md-12 col-lg-6 d-md-flex d-lg-block pr-0 px-md-2 mb-md-2">
                    <label
                      for="model"
                      className="d-sm-none d-md-block d-lg-inline col-md-4 px-md-3 px-lg-3 px-0 p-0"
                    >
                      Modelo del auto
                    </label>
                    <select id="year" class="form-control rounded-0">
                      <option value="0" selected>
                        Modelo de auto
                      </option>
                      <option value="2005">A1</option>
                      <option value="2006">A4</option>
                      <option value="2007">Aveo</option>
                      <option value="2008">Camaro</option>
                      <option value="2008">Fiesta</option>
                      <option value="2008">XF</option>
                    </select>
                  </div>
                  <div class="col-4 col-md-12 col-lg-5 d-md-flex d-lg-block pl-0 px-md-2 mb-md-2">
                    <label
                      for="year"
                      className="d-sm-none d-md-block d-lg-inline col-md-4 px-0"
                    >
                      Año
                    </label>
                    <select id="year" class="form-control rounded-0">
                      <option value="0" selected>
                        Año
                      </option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                  <div class="col-12 col-lg-7 d-md-flex d-lg-block px-md-2">
                    <label
                      for="email"
                      className="d-sm-none d-md-block d-lg-inline col-md-4 px-0"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <Link to="/success">
                  <button
                    type="submit"
                    class="col-12 mt-4 mb-1 mr-2 btn btn-ilumno"
                  >
                    Cotizar
                  </button>
                </Link>
              </form>
              <p className="Form__Restore p-4 p-md-2 text-center">
                Recuperar Cotizacion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
