export default function PercentageNumericValue({ children: number }) {
    const locale = 'en-US' // recuperar del contexto
    return new Intl.NumberFormat(locale, {
        style: 'percent',
        maximumFractionDigits: 2
    }).format(number);
}