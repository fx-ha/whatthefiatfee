import { useContext } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { TxnSizeContext } from '../context/TxnSizeContext'
import { FiatContext } from '../context/FiatContext'
import { Fee, Rate } from '../generated/graphql'
import { calculateFee, convertToFiat } from '../utils/calculator'
import { TableHeader } from '../utils/types'

type FeeTableProps = {
  fees: Fee[]
  rate: Rate
}

const tableRows: Record<TableHeader, number[]> = {
  '0.5h': [],
  '1h': [],
  '1.5h': [],
  '2h': [],
  '3h': [],
  '4h': [],
  '6h': [],
  '8h': [],
  '12h': [],
  '16h': [],
  '24h': [],
}

const FeeTable = ({ fees, rate }: FeeTableProps) => {
  let fiatValue = rate.usd
  let locale = 'en-US'
  let counter = 0
  const { currency } = useContext(FiatContext)
  const { txnSize } = useContext(TxnSizeContext)

  switch (currency) {
    case 'eur':
      locale = 'de-DE'
      fiatValue = rate.eur
      break
    case 'gbp':
      locale = 'en-GB'
      fiatValue = rate.gbp
      break
  }

  const keys = Object.keys(tableRows) as Array<keyof typeof tableRows>

  for (const key of keys) {
    tableRows[key] = fees.slice(counter, counter + 5).map((fee) => fee.amount)
    counter += 5
  }

  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th isNumeric></Th>
          <Th isNumeric>5%</Th>
          <Th isNumeric>20%</Th>
          <Th isNumeric>50%</Th>
          <Th isNumeric>80%</Th>
          <Th isNumeric>95%</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(tableRows).map(
          ([tableHeader, tableData], tableRowIndex) => {
            return (
              <Tr key={tableRowIndex}>
                <Th isNumeric>{tableHeader}</Th>
                {tableData.map((fee, tableDataIndex) => {
                  return (
                    <Td key={tableDataIndex} isNumeric>
                      {convertToFiat(
                        calculateFee(fee, fiatValue, currency, txnSize),
                        locale,
                        currency
                      )}
                    </Td>
                  )
                })}
              </Tr>
            )
          }
        )}
      </Tbody>
    </Table>
  )
}

export default FeeTable
