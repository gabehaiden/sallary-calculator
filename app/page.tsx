'use client'

import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Input from '@/components/shared/Input'
import { Contribution } from '@/services/Contribution'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

export default function Home() {

  const [sallary, setSallary] = useState<number>(0)
  const [dependents, setDependents] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    switch (name) {
      case 'sallary':
        setSallary(+value)
        break;
      case 'dependents':
        setDependents(+value)
        break;
      default:
        break;
    }
  }

  const onCalculate = (e: SyntheticEvent) => {
    e.preventDefault()

    if (sallary <= 0) {
      return
    }

    const contributions = new Contribution(sallary, dependents)

    const total = contributions.calculateLiquidSallary()

    setTotal(total)
  }

  return (
    <div className='w-full'>
      <form>
        <Flex>
          <Input label='Salário bruto' type='number' name='sallary' value={sallary} required onChange={onInputChange} />
          <Input label='Nº de dependentes' type='number' name='dependents' value={dependents} onChange={onInputChange} />
          <Button title='Calcular' type='submit' onClick={onCalculate} />
          {total > 0 &&
            <h1>{total}</h1>
          }
        </Flex>
      </form>
    </div>
  )
}
