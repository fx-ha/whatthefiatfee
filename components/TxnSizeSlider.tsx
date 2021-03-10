import { useContext } from 'react'

import { Form } from 'react-bootstrap'

import { TxnSizeContext } from '../components/TxnSizeProvider'

const TxnSizeSlider = (): JSX.Element => {
  const { txnSize, setTxnSize } = useContext(TxnSizeContext)

  return (
    <Form.Group controlId="feeRange">
      <Form.Label>Transaction size: {txnSize} vbytes</Form.Label>
      <Form.Control
        type="range"
        min="100"
        max="1000"
        value={txnSize}
        step="25"
        onChange={(e) => setTxnSize(Number(e.target.value))}
      />
    </Form.Group>
  )
}

export default TxnSizeSlider
