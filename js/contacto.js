document.addEventListener('DOMContentLoaded', function() {
    // ⚠️ PASO CRUCIAL: REEMPLAZA ESTA CADENA CON TU ENDPOINT ÚNICO DE FORMSPREE ⚠️
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/movrwyoj';

    const form = document.getElementById('contactForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');
   
    // Botones y elementos
    const confirmSendBtn = document.getElementById('confirmSend');
    const cancelSendBtn = document.getElementById('cancelSend');
    const closeConfBtn = confirmationModal.querySelector('.close-btn');
    const closeSuccessBtn = successModal.querySelector('.close-btn-success');
    const closeSuccessFinalBtn = successModal.querySelector('.btn-close-success');

    // Funciones para Modales
    function closeConfirmationModal() {
        confirmationModal.style.display = 'none';
    }

    function closeSuccessMessage() {
        successModal.style.display = 'none';
    }

    // --- 1. Manejo del Evento Submit del Formulario ---
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // ⚠️ Validación rápida del navegador
        if (!form.checkValidity()) {
            // El navegador maneja la visualización de errores 'required'.
            return;
        }

        // Muestra el modal de confirmación
        confirmationModal.style.display = 'block';
    });

    // --- 2. Lógica de Envío (Formspree con fetch) ---
    confirmSendBtn.addEventListener('click', async function() {
        closeConfirmationModal(); // Cierra el modal de confirmación

        // Validar que el endpoint no sea el placeholder
        if (FORMSPREE_ENDPOINT === 'TU_ENDPOINT_UNICO_DE_FORMSPREE') {
            alert('ERROR: Debes reemplazar "TU_ENDPOINT_UNICO_DE_FORMSPREE" en script.js con tu URL real de Formspree.');
            return;
        }

        const formData = new FormData(form);
       
        try {
            // Envía los datos a Formspree
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Éxito: Limpiar campos y mostrar modal de éxito
                form.reset();
                successModal.style.display = 'block';
            } else {
                // Fallo del servidor o Formspree
                alert('⚠️ Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
                console.error('Error de Formspree:', response.status);
            }
        } catch (error) {
            // Fallo de red
            alert('❌ No se pudo completar el envío. Revisa tu conexión a internet.');
            console.error('Error de red/conexión:', error);
        }
    });

    // --- 3. Cierre de Modales (Eventos de Cierre) ---
    cancelSendBtn.addEventListener('click', closeConfirmationModal);
    closeConfBtn.addEventListener('click', closeConfirmationModal);
    closeSuccessBtn.addEventListener('click', closeSuccessMessage);
    closeSuccessFinalBtn.addEventListener('click', closeSuccessMessage);

    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target == confirmationModal) {
            closeConfirmationModal();
        }
        if (event.target == successModal) {
            closeSuccessMessage();
        }
    });
});
