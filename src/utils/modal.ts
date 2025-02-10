import { animate } from "motion/mini";

export const MODAL_ANIMATION_DURATION_IN_MILLISECONDS = 200;

const animationOptions = {
  duration: MODAL_ANIMATION_DURATION_IN_MILLISECONDS / 1000,
};

export function showModal(selector: string) {
  animate(
    selector,
    {
      scale: [0, 1],
      opacity: [0, 1],
    },
    animationOptions
  );
}

export function hideModal(selector: string) {
  animate(
    selector,
    {
      scale: [1, 0],
      opacity: [1, 0],
    },
    animationOptions
  );
}

export function toggleModalFade(modalId: string) {
  const backdrop = document.getElementById(`${modalId}Backdrop`)!;
  const modalFade = document.getElementById(`${modalId}Fade`)!;

  modalFade.classList.toggle("hidden");
  modalFade.classList.toggle("grid");
  backdrop.classList.toggle("hidden");
}
