export const toDigit = (number) => new Intl.NumberFormat("en-US", { style: 'decimal' }).format(number)
export default function NumericResumeValue({ children: number }) {
    const locale = 'en-US' // recuperar del contexto
    return new Intl.NumberFormat(locale, { style: 'decimal' }).format(number);
}
