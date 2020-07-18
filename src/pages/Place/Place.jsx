import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Star } from 'react-feather';
import axiosInstance from '../../axiosApi';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

import sharedStyle from '../../scss/shared.module.scss';
import style from './Place.module.scss';

const Place = ({ match }) => {
  const { id } = match.params;
  const [placeData, setPlaceData] = useState({ locations: [] });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axiosInstance.get(`/places/${id}`)
      .then((response) => {
        setPlaceData(response.data);
      });
  }, [id]);

  const locationCards = placeData.locations.map((location) => (
    <div className="col-7 py-2 col-md-4" key={location.location_id}>
      <div className={cn(style.locationCard, 'p-3')}>
        <p>{location.address}</p>
        <p>{location.city}, {location.state} {location.zip_code}</p>
      </div>
    </div>
  ));

  const toggleModal = () => setModalOpen(isModalOpen => !isModalOpen)

  return (
    <>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader tag="h3">Checking in?</ModalHeader>
        <ModalBody>
          <p>Check in to let them know you're there!</p>
          <hr/>
          <p>{placeData.check_in_requirement}</p>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-outline-secondary" onClick={toggleModal}>Cancel</button>
          <button className="btn btn-primary" onClick={toggleModal}>Check in</button>
        </ModalFooter>
      </Modal>

      <div className="container-fluid px-0 pb-4">
        <div className="row no-gutters">
          <div className={cn(style.imageContainer, 'col-12')}>
            <img src={placeData.image_url} alt="" />
          </div>
        </div>
      </div>

      <div className="container row no-gutters mx-auto">
        <div className="col-12 col-lg-8">
          <section>
            <div className="row mb-4">
              <div className="col col-md-auto">
                <h1 className="mb-0">{placeData.place_name}</h1>
              </div>
              <div className={cn(style.rating, 'col-auto')}>
                <Star />
                <span>{placeData.rating}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div>{placeData.description}</div>
              </div>
            </div>
          </section>

          <div className={style.placeSection}>
            <h4 className="text-muted">Qualifications</h4>
            {placeData.check_in_requirement}
          </div>

          <div className={style.placeSection}>
            <h4 className="text-muted">Available locations</h4>
            <div className={sharedStyle.horizontalScrollContainer}>
              {locationCards}
            </div>
          </div>

          <div className={style.placeSection}>
            <h4 className="text-muted">Questions?</h4>
            Contact {placeData.place_name} at <a href="tel:6125555555">(612) 555-5555</a>
          </div>
        </div>

        <div className={'col-12 col-lg-4'}>
          <section className={cn(style.checkInSection, 'd-flex justify-content-center')}>
              <div className="row align-items-center justify-content-around flex-lg-column">
                <div className="col-auto mb-lg-2">
                  <span className={cn(style.reward, 'text-primary font-weight-bold')}>$4 </span>
                  cash back
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary px-4" onClick={toggleModal}>Check in</button>
                </div>
              </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default Place;
