import { useState } from 'react'

import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const FiatSelection = (): JSX.Element => {
  const [currency, setCurrency] = useState('usd')

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      size="sm"
      defaultValue="usd"
      onChange={(e) => setCurrency(e)}
    >
      <ToggleButton variant="outline-secondary" value="btc">
        ₿
      </ToggleButton>
      <ToggleButton variant="outline-secondary" value="usd">
        $
      </ToggleButton>
      <ToggleButton variant="outline-secondary" value="eur">
        €
      </ToggleButton>
      <ToggleButton variant="outline-secondary" value="gbp">
        £
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default FiatSelection
