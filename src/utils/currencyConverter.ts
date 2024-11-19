/**
 * Convert to BRL currency format
 * @param value - Number to be converted
 * @returns Corverter BRL string
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
