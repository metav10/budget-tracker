import React, { useState } from 'react'
import { tags } from '../../lib/interfaces'
import AddExpenseContent from './AddExpenseContent'

const AddExpense = ({}: {}) => {
    const [cost, setCost] = useState<number>(0)
    const [date, setDate] = useState<string>('')
    const [category, setCategory] = useState<tags>(tags.Entertament)

    const onSubmit = () => {}

    return (
        <AddExpenseContent
            cost={cost}
            setCost={setCost}
            date={date}
            setDate={setDate}
            category={category}
            setCategoty={setCategory}
            onSubmit={onSubmit}
        />
    )
}
export default AddExpense
