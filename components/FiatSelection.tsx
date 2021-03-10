import { useContext } from 'react'

import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

import { FiatContext } from '../components/FiatProvider'

const FiatSelection = (): JSX.Element => {
  const { currency, updateSelection } = useContext(FiatContext)

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      size="sm"
      defaultValue={currency}
      onChange={(e) => updateSelection(e)}
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
