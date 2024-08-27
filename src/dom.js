export function openModal(modal) {
    modal.style.display = "block";
};

export function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });
};
