// ==========================================================================
// INTERATIVIDADE COM JAVASCRIPT - PORTAL DO CIDADÃO (SISPROTO)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interação nos Cards de Serviço (Inspirado na Etapa 5 do Roteiro de Animações)
  const cards = document.querySelectorAll('.service-card');
  const inputAssunto = document.getElementById('assunto');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Alterna a seleção visual do card clicado
      card.classList.toggle('selected-card');

      // Preenche o campo de serviço no formulário de Ouvidoria:
      const nomeServico = card.getAttribute('data-service');
      if (inputAssunto && nomeServico) {
        inputAssunto.value = `Solicitação: ${nomeServico}`;
      }
    });
  });

  // 2. Botão para fechar o banner de manutenção do servidor COBOL
  const closeBannerBtn = document.getElementById('closeBanner');
  const alertBanner = document.getElementById('alertBanner');
  if (closeBannerBtn && alertBanner) {
    closeBannerBtn.addEventListener('click', () => {
      alertBanner.style.display = 'none';
    });
  }

  // 3. Simulação de Consulta de Protocolo
  const protocolForm = document.getElementById('protocolForm');
  const resultadoBusca = document.getElementById('resultadoBusca');

  if (protocolForm && resultadoBusca) {
    protocolForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const num = document.getElementById('numProtocolo').value;
      const ano = document.getElementById('exercicio').value;

      resultadoBusca.style.display = 'block';
      resultadoBusca.innerHTML = `
        <strong>✅ Processo Localizado:</strong> Nº ${num} (Exercício ${ano})<br>
        <strong>Status Atual:</strong> Em análise pela Secretaria de Tecnologia e Modernização.<br>
        <strong>Última Movimentação:</strong> Aguardando refatoração da interface pelos alunos de Desenvolvimento de Sistemas!
      `;
    });
  }

  // 4. Simulação de Envio da Ouvidoria
  const ouvidoriaForm = document.getElementById('ouvidoriaForm');
  if (ouvidoriaForm) {
    ouvidoriaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = document.getElementById('nomeCidadao').value;
      alert(`Obrigado, ${nome}! Sua manifestação foi registrada com sucesso no protocolo eletrônico.`);
      ouvidoriaForm.reset();
    });
  }
});
