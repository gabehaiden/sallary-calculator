import { INSS } from '@/enum/INSS'
import { IRRF } from '@/enum/IRRF'

type INSSTable = {
  percentage: number,
  deduction: number
}

type IRRFTable = {
  percentage: number,
  deduction: number
}

export class Contribution {

  private inss: number = 0
  private irrf: number = 0

  constructor(
    private sallary: number,
    private dependents: number,
  ) {
    this.sallary = sallary
    this.dependents = dependents
    this.calculateINSS(sallary)
    this.calculateIRRF()
  }

  private checkINSSRange(sallary: number): INSSTable {
    if (sallary <= 1320) {
      return {
        percentage: INSS.LESSER_THAN_1320,
        deduction: 0
      }
    } else if (sallary <= 2571.29) {
      return {
        percentage: INSS.LESSER_THAN_2571,
        deduction: 18.18,
      }
    } else if (sallary <= 3865) {
      return {
        percentage: INSS.LESSER_THAN_3856,
        deduction: 91,
      }
    } else {
      return {
        percentage: INSS.LESSER_THAN_OR_BIGGER_7507,
        deduction: 163.83,
      }
    }
  }

  private checkIRRFRange(): IRRFTable {
    if (this.sallary <= 1320) {
      return {
        percentage: IRRF.LESSER_THAN_1903,
        deduction: 0
      }
    } else if (this.sallary <= 2571.29) {
      return {
        percentage: IRRF.LESSER_THAN_2826,
        deduction: 18.18,
      }
    } else if (this.sallary <= 3865) {
      return {
        percentage: IRRF.LESSER_THAN_3751,
        deduction: 91,
      }
    } else {
      return {
        percentage: IRRF.LESSER_THAN_OR_BIGGER_4644,
        deduction: 163.83,
      }
    }
  }

  private calculateINSS(sallary: number) {
    const range = this.checkINSSRange(sallary)
    const inss = (sallary * range.percentage) - range.deduction

    this.inss = inss
  }

  private calculateIRRF() {
    const range = this.checkIRRFRange()
    const base = this.sallary - this.inss - (this.dependents * IRRF.DEPENDENTS)
    const irrf = (base * range.percentage) - range.deduction

    this.irrf = irrf
  }

  public calculateLiquidSallary() {
    return this.sallary - this.inss - this.irrf
  }
}