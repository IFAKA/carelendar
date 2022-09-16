import { TypeDate } from "@/models"

const formatDate = (unformatedDate: TypeDate) => {
    const day = unformatedDate.slice(-2)
    const monthNumber = unformatedDate.slice(5, 7)
    const month = new Date(monthNumber).toLocaleString('en-US', { month: 'short' })
    const year = unformatedDate.slice(2, 4)
    const date = `${day} ${month} ${year}`
    return date
}

export default formatDate