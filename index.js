document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Pega os valores do formulário
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    // Se não tiver data, usa texto padrão
    const date = document.getElementById('date').value
      ? document.getElementById('date').value
      : 'Qualquer data';
    const message = document.getElementById('message').value.trim();

    // Monta a mensagem que vai pro WhatsApp
    const text = 
      `Olá, meu nome é ${name}.\n` +
      `Tenho interesse no serviço: ${service}.\n` +
      `Data desejada: ${date}.\n` +
      ( message ? `Mensagem adicional: ${message}.\n` : '' ) +
      `Telefone para contato: ${phone}.`;

    // Codifica para URL
    const encodedText = encodeURIComponent(text);

    // Número fixo para o WhatsApp (seu número)
    const waNumber = '5511994793486';

    // Monta a URL do WhatsApp
    const waURL = `https://wa.me/${waNumber}?text=${encodedText}`;

    // Debug (opcional): ver no console a URL gerada
    console.log('WhatsApp URL:', waURL);

    // Abre o WhatsApp em nova aba
    window.open(waURL, '_blank');
  });
});
