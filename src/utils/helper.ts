/**
 * 等额本息计算方式
 * 每月还款额=贷款本金×[月利率×（1+月利率）^还款月数]÷[（1+月利率）^还款月数-1]
 * 总支付利息：总利息=还款月数×每月月供额-贷款本金
 * 每月应还利息=贷款本金×月利率×〔(1+月利率)^还款月数-(1+月利率)^(还款月序号-1)〕÷〔(1+月利率)^还款月数-1〕
 * 每月应还本金=贷款本金×月利率×(1+月利率)^(还款月序号-1)÷〔(1+月利率)^还款月数-1〕
 * 总利息=还款月数×每月月供额-贷款本金
 *
 * 等额本金计算方式编辑
 * 每月月供额=(贷款本金÷还款月数)+(贷款本金-已归还本金累计额)×月利率
 * 每月应还本金=贷款本金÷还款月数
 * 每月应还利息=剩余本金×月利率=(贷款本金-已归还本金累计额)×月利率。
 * 每月月供递减额=每月应还本金×月利率=贷款本金÷还款月数×月利率
 * 总利息=还款月数×(总贷款额×月利率-月利率×(总贷款额÷还款月数)*(还款月数-1)÷2+总贷款额÷还款月数)
 */

interface ParamsProps {
  loanTotal: number;
  loanYears: number;
  loanRate: number;
}

interface ReturnProps {
  perMonthAmount: string;
  totalAmount: string;
  totalInterestAmount: string;
  totalMonth: number;
}

/**
 * 等额本息
 * @export
 * @param {ParamsProps} {loanTotal = 100单位万元, loanYears = 30单位年, loanRate = 4.65 单位4.65%}
 * @returns {ReturnProps}
 */
export function EqualInterest({loanTotal = 100, loanYears = 30, loanRate = 4.65} : ParamsProps) : ReturnProps {
  const totalMonth = loanYears * 12
  const monthInterest = loanRate * 0.01 / 12
  // const perMonth = 100 * (0.0385 / 12) * Math.pow((1 +(0.0385 / 12)), 60) / (Math.pow((1 + (0.0385 / 12)), 60) - 1)
  const perMonthAmount = loanTotal * monthInterest * Math.pow((1 + monthInterest), totalMonth) / (Math.pow((1 + monthInterest), totalMonth) - 1)
  const totalAmount = perMonthAmount * totalMonth
  const totalInterestAmount = totalAmount - loanTotal

  return {
    perMonthAmount: (perMonthAmount * 10000).toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    totalInterestAmount: totalInterestAmount.toFixed(2),
    totalMonth
  }
}

/**
 * 等额本金
 */

export function EqualPrincipal({loanTotal = 100, loanYears = 30, loanRate = 4.65} : ParamsProps) {
  const totalMonth = loanYears * 12
  const monthInterest = loanRate * 0.01 / 12
  const decreaseAmount = loanTotal / totalMonth * monthInterest
  // const perMonth = 1000000 / 360 + (100000 - 1000000 / 360 * i) * 0.0465 / 12
  const firstMonthAmount = loanTotal / totalMonth + (loanTotal - 0) * monthInterest
  const totalPerMonthArr = getPrincipalArr(totalMonth, firstMonthAmount, decreaseAmount)
  const totalAmount = +totalPerMonthArr.reduce((acc, cur) => acc + cur) / 10000
  const totalInterestAmount = totalAmount - loanTotal

  return {
    firstMonthAmount: (firstMonthAmount * 10000).toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    totalInterestAmount: totalInterestAmount.toFixed(2),
    totalPerMonthArr,
    totalMonth
  }
}

/**
 *
 *
 * @param {*} totalMonth 总月数
 * @param {*} firstMonthAmount 首月还款额
 * @param {*} decreaseAmount 每月递减额
 * @returns arr 单位元
 */
function getPrincipalArr(totalMonth, firstMonthAmount, decreaseAmount) {
  let arr: number[] = []
  for(let i = 0; i < totalMonth; i++) {
    arr.push(+((firstMonthAmount - decreaseAmount * i) * 10000).toFixed(2))
  }
  return arr
}