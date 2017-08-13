import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this)); //by bind() method 'this' stays to what its pointed towards by the next action, an is not binded to open modal button. we have control over what browser interpret as 'this'

    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; //prevent default behavior of scrolling up
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
