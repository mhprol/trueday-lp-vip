/**
 * Conversão desta LP = clique no CTA que leva ao convite do Grupo VIP.
 *
 * Duas decisões embutidas aqui:
 *  - Evento PADRÃO `Lead` (não personalizado): é o que a Meta sabe otimizar em
 *    campanha. A legibilidade vem do parâmetro `content_name`, não do nome do
 *    evento.
 *  - Nunca deixar isto derrubar o clique. Se o Pixel estiver bloqueado (Brave
 *    Shields, adblock) ou ainda não tiver carregado, `fbq` não existe — o
 *    try/catch garante que o usuário vá para o WhatsApp de qualquer jeito.
 *
 * O CTA abre em nova aba (`target="_blank"`), então a página não é descarregada
 * e não há corrida entre o disparo e a navegação.
 */
export function trackVipClick(origem) {
  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Grupo VIP WhatsApp",
        content_category: "lp-vip",
        origem, // hero | card | ribbon — de qual CTA saiu o clique
      });
    }
  } catch (e) {
    // silencioso de propósito: telemetria nunca bloqueia conversão
  }
}
