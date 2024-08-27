export function openModal(modal) {
    modal.style.display = "block";
};

export function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });
};

export function resetForm() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.reset();
    })
}