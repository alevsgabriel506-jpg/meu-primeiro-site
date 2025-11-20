document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value || 'Qualquer data';
    const message = document.getElementById('message').value || '';

    const text = encodeURIComponent(
      'Olá, meu nome é ${name}. Quero agendar: ${service} em ${date}. Telefone: ${phone}. ${message}'
    );

    const wa = 'https://wa.me/5511956817467?text=${text}';
    window.open(wa, '_blank');
  });
});