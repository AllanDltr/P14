import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../features/store";
import { DateInput } from "../DateInput/DateInput";
import { SelectInput } from "../Select/SelectInput";
import { Modal } from "../Modale/Modale";
import {states, departments} from "../../datas/datas"
import {TextInput} from "../TextInput/TextInput";
import "./Form.css";

export function Form() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.employeeDatas);

  function handleClick() {
    setOpenModal(!openModal);
  }

  async function handleOnSubmit(e) { // Fonction de submit
    e.preventDefault(); // Empêche le rechargement de la page
    const form = new FormData(e.target); // Récupère les données du formulaire
    const user = stateData.employeeList; // Récupère les données du state (vide au début)
    let count; // Déclare une variable pour le compteur d'id

    if (user.length === 0) { // Si le tableau est vide, on met l'id à 0
      count = 0;
    } else { // Sinon on ajoute 1 à l'id actuel
      count = user.length;
    }

    let data = { id: count }; // On crée un objet avec l'id
    form.forEach((item, i) => { // On boucle sur les données du formulaire (item = nom du champ du form, i = valeur du champ du form)
      let input = { [i]: item };
      Object.assign(data, input); // On ajoute les données du formulaire à l'objet data
    });

    const array = data
    // const array = [user, data]; // On crée un tableau avec les données du state et les données du formulaire
    if (data) {
      dispatch(addEmployee({ employeeList: [...stateData.employeeList, array]}));
    }

    handleClick();
    e.target.reset();
  };

  return (
    <div className="create__employee__content">
      <h1> Create Employee </h1>
      <form action="#" id="form" onSubmit={handleOnSubmit}>
        <div className="form__wrapper">
          <label htmlFor="firstName"> First Name </label>
          <TextInput
            id="0"
            name="firstName"
            label="First Name"
            minlength={1}
            maxlength={17}
            />
        </div>
        <div className="form__wrapper">
          <label htmlFor="lastName"> Last Name </label>
          <TextInput
            id="1"
            label="Last Name"
            name="lastName"
            minlength={1}
            maxlength={17}
            />
        </div>
        <div className="form__wrapper">
          <label htmlFor="dateOfBirth"> Date of Birth </label>
          <DateInput
            id="2"
            name="birthDate"
            label="Date of Birth"
          />
        </div>
        <div className="form__wrapper">
          <label htmlFor="startDate"> Start Date </label>
          <DateInput
            id="3"
            name="startDate"
            label="Start Date"
          />
        </div>
        <div className="form__wrapper">
          <label htmlFor="street"> Street </label>
          <TextInput
            id="4"
            name="street"
            label="Street"
            minlength={1}
            maxlength={17}
            />
        </div>
        <div className="form__wrapper">
          <label htmlFor="city"> City </label>
          <TextInput
              id="5"
              name="city"
              label="City"
              minlength={1}
              maxlength={17}
            />
        </div>
          <label htmlFor="state"> State </label>
          <SelectInput
              id="5"
              label="State"
              name="state"
              data={states}
          />
        <div className="form__wrapper">
          <label htmlFor="zipCode"> Zip Code </label>
          <TextInput
              id="6"
              name="zipcode"
              label="Zip Code"
              minlength={5}
              maxlength={5}
            />
        </div>
        <label htmlFor="department"> Department </label>
        <SelectInput
          id="7"
          label="Department"
          name="department"
          data={departments}
        />
      <button type="submit" className="modal__OpenBtn">
        {" "}
        Save{" "}
      </button>

      { openModal &&
      <Modal
      title="Employee Created"
      text="Your employee has been created"
      onClick={handleClick}
      isOpen={openModal}
      /> }
      </form>
    </div>
  );
}