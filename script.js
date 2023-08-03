const claim = document.getElementById('claimButton');
const form = document.getElementById('form');

claim.addEventListener('click', () => {
    form.submit();
});